"use client";

import { FormEvent } from "react";

export default function Home() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("http://localhost:8000/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      //   router.push("/profile");
      console.log(await response.json());
    } else {
      // Handle errors
    }
  }

  return (
    <form className="text-black" onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit" className="border text-white">
        Login
      </button>
    </form>
  );
}
