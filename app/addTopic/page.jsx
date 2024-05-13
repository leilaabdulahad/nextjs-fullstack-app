"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        await router.push("/")
        router.reload()
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen mt-[-150px]">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-black font-bold mb-4">Add Topic</h2>
        <div className="mb-4">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="text-black border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Topic Title"
          />
        </div>
        <div className="mb-4">
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="text-black border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Topic Description"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 focus:outline-none focus:bg-green-700"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
}
