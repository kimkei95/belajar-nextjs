import CardProduct from "@/components/molecules/CardProducts";
import React from "react";

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
  return (
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
  );
};

export default ProductPage;
