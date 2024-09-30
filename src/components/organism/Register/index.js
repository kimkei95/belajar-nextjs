import Button from "@/components/atoms/Buttons";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <form className="flex flex-col gap-4">
      <InputForm
        label="Name"
        name="name"
        type="text"
        placeholder="Masukkan nama"
      />
      <InputForm
        label="Username"
        name="email"
        type="email"
        placeholder="Masukkan email"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan password"
      />
      <Button size={"w-full"}>Register</Button>
    </form>
  );
};

export default Register;
