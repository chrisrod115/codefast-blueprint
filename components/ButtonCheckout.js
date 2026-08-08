"use client";

import axios from "axios";
import { useState } from "react";

const ButtonCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = () => {
    if (isLoading) return;
    setIsLoading(true);
  };

  return (
    <button className="btn btn-primary" onClick={() => handleSubscribe()}>
      {isLoading && (
        <span className="loading loading-infinity loading-xs"></span>
      )}
      Subscribe
    </button>
  );
};

export default ButtonCheckout;
