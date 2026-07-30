"use client";

import { useState } from "react";
import axios from "axios";
const FormNewBoard = () => {
  const [name, setName] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const data = await axios.post("/api/board", { name });
      console.log(data);
    } catch (error) {
      // display error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      <p className="font-bold text-lg">Create a new feedback board</p>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Board name</span>
        </div>
        <input
          required
          type="text"
          placeholder="Future input unicorn 🦄"
          className="input input-bordered w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <button className="btn btn-primary w-full" type="submit">
        {isloading && <span className="loading loading-dots loading-xs"></span>}
        Create Board
      </button>
    </form>
  );
};

export default FormNewBoard;
