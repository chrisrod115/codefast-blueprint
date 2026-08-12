import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_API_KEY);

  const body = await req.text();
  const signature = headers().get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (e) {
    // A bad signature will never verify on retry, so fail with a 400.
    console.error("Stripe signature verification failed: " + e?.message);
    return NextResponse.json({ error: e.message }, { status: 400 });
  }

  try {
    const { data, type } = event;

    if (type === "checkout.session.completed") {
      await connectMongo();
      const user = await User.findById(data.object.client_reference_id);
      if (!user) {
        throw new Error(
          `No user found for client_reference_id ${data.object.client_reference_id}`,
        );
      }
      user.hasAccess = true;
      user.customerId = data.object.customer;

      await user.save();
    }
  } catch (e) {
    // Return a non-2xx so Stripe retries instead of dropping the event.
    console.error("Stripe Error: " + e?.message);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }

  return NextResponse.json({});
}
