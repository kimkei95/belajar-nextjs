import Button from "@/components/atoms/Buttons";
import CardProduct from "@/components/molecules/CardProducts";
import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    name: "odeng1",
    image: "images/odeng.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maiores.",
    price: 30000,
  },
  {
    id: 2,
    name: "odeng2",
    image: "images/odeng.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maiores.",
    price: 30000,
  },
  {
    id: 3,
    name: "odeng3",
    image: "images/odeng.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maiores.",
    price: 30000,
  },
];
const ProductPage = () => {
  const [username, setUsername] = useState("");
  /**useState: hooks dari react yang memungkinkan kita menambahkan state ke functional component
   * username: variable state yang akan menyimpan nilai username
   * setUsername: fungsi yang dipake buat memperbarui nilai username
   * ""(dalam useState): nilai awal dari state username
   * ketika setUsername dipanggil dengan nilai baru, react merender ulang komponen dengan nilai state yang baru
   */
  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUsername(getUsername);
    }
  }, []);
  /**useEffect(()=>{},[]): hooks dari react yang memungkinkan kita untuk menambahkan side effect ke functional component
   * useEffect diapke untuk memperbarui komponen ketika ada perubahan pada state
   * [](array kosong depedency array): argumen kedua milik useEffect yang artinya  efek ini akan dijalankan sekali
   * saat komponen dijalankan pertama kali dirender. jika username ditemukan di localStorage, dia bakan pake setUsername
   * untuk memperbarui nilai state username
   */
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 px-5 py-4">
        <h1 className="text-xl"> Welcome, {username}</h1>
        <Button color="bg-red-500" textButton="Logout" onClick={handleLogout} />
      </div>
      <div className="flex justify-center items-center min-h-screen gap-4">
        {/*cara make nested componen*/}
        <CardProduct>
          <CardProduct.Header image={"images/odeng.jpg"} />
          <CardProduct.Body
            title={"Title Product"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maiores."
            }
          ></CardProduct.Body>
          <CardProduct.Footer price={"25000"} />
        </CardProduct>

        {/**cara make rendering list
         * rendering list: teknik untuk nampilin beberapa elemen
         * berdasarkan data dinamis yang disimpan di dalam array of object
         */}
        {data.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={item.image} />
            <CardProduct.Body
              title={item.name}
              desc={item.desc}
            ></CardProduct.Body>
            <CardProduct.Footer price={item.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
