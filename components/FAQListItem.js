"use client";

import { useState } from "react";

const FAQListItem = ({ qa }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li key={qa.question}>
      {/* 1. Question Clickable */}
      <button
        className="btn btn-ghost w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{qa.question}</p>
      </button>

      {/* 2. Answer (Initially Hidden) */}
      <div className={`${isOpen ? "block" : "hidden"}`}> {qa.answer} </div>
    </li>
  );
};

export default FAQListItem;
