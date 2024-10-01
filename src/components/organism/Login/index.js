import Button from "@/components/atoms/Buttons";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";

const Login = () => {
  //handle login
  const handleLogin = (event) => {
    event.preventDefault(); //untuk mencegah halaman agar tidak refresh saat fungsi di trigger
    console.log("Login");
    //event target xxx value: buat ngambil data dalam inputan
    console.log(event.target.username.value);
    console.log(event.target.password.value);

    window.location.href = "/products"; // window location href: untuk arahin ke halaman lain
    //localstorage.setitem: buat nyimpen data inputan form ke dalam penyimpanan lokal browser
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);
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
