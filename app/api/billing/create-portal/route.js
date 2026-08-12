import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Stripe from "stripe";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.returnUrl) {
      return NextResponse.json(
        { error: "Missing required URL" },
        { status: 400 },
      );
    }

    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { error: "Not authorized to access" },
        { status: 401 },
      );
    }

    await connectMongo();
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (!user.customerId) {
      return NextResponse.json(
        { error: "No billing account found. Please subscribe first." },
        { status: 400 },
      );
    }

    const stripe = new Stripe(process.env.STRIPE_API_KEY);
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: user.customerId,
      return_url: body.returnUrl,
    });

    return NextResponse.json({ url: portalSession.url });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
