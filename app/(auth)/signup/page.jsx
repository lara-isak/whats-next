"use client";
import React from "react";
import AuthForm from "../AuthForm";

export default function Signup() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log("Signup handleSubmit", email, password);
  };
  return (
    <main>
      <h2 className="text-center">Sign up</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
