import formatCurrency from "@/helpers/utils/formatCurrency";
import { getProductById } from "@/services/products";
import React from "react";
/**Dynamic Routing: membuat page deengan slug dinamus, baik berupa id, ataupun slug seperti contoh kasus dibawah ini
 * contoh lain: "localhost:3000/product/laptop-gaming"
 * link setelah /product disebut sebagai params atau slug.slug (/laptop-gaming)inilah yang akan di render
 * slug vs query params
 * slug: url params diblakang/ cth: /product-1
 * query params: query dibelakang? cth: /produk?kategori-pakaian
 */
const ProductDetailPage = ({ detailProduct }) => {
  console.log(detailProduct);
  return (
    <>
      <div className="flex flex-col min-h-screen p-6 bg-gradient-to-b from-black to to-blue-950 text-white">
        <h1 className="text-4xl font-bold">Detail produk</h1>
        <div className="p-4 mt-5 rounded-2xl max-w-xl bg-white bg-opacity-20">
          <h2 className="text-2xl font-bold">{detailProduct?.title}</h2>
          <p className="font-semibold mt-5">{detailProduct?.description}</p>
          <span className="text-xl font-bold mt-5">
            {formatCurrency(detailProduct?.price)}
          </span>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps({ params }) {
  console.log(params);
  const id = params.slug;
  const detailProduct = await getProductById(id);

  return {
    props: {
      detailProduct,
    },
  };
}

export default ProductDetailPage;
