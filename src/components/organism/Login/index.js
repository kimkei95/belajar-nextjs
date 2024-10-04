import Button from "@/components/atoms/Buttons";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";
import { login } from "@/services/auth";

const Login = () => {
  //handle login
  const handleLogin = async (event) => {
    event.preventDefault();
    //payload buat ambil data dari input form untuk dikirim ke service
    const payload = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    //panggil service login
    try {
      const response = await login(payload);
      //cek token kalo ga ada token bakal diarahin ke halaman login
      if (response.status) {
        localStorage.setItem("token", response.token);
        window.location.href = "/products";
      } else {
        console.log("login failed", response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <InputForm
        //onsubmit: event handler dari form yang menangani aksi ketika form disubmit

        label="Username"
        name="username"
        type="text"
        placeholder="Masukkan nama"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan password"
      />
      <Button
        //onClick={handleLogin}: event handler dari button yang menangani event ketika button di klik
        color="bg-blue-500 hover:bg-blue-700"
        size={"w-full"}
        textButton="Submit"
        type="submit"
      ></Button>
    </form>
  );
};

export default Login;
