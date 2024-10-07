import Button from "@/components/atoms/Buttons";
import CardProduct from "@/components/molecules/CardProducts";
import Image from "next/image";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import BackToTop from "@/components/atoms/icons/BackToTop";
import { getProducts } from "@/services/products";

import useLogin from "@/hooks/useLogin";
import formatCurrency from "@/helpers/utils/formatCurrency";
import { setLazyProp } from "next/dist/server/api-utils";
import Modal from "@/components/Modal";

const ProductPage = ({ products }) => {
  //useRef: hooks dari react yg dipake untuk membuat referensi ke elemen DOM
  const footerRef = useRef();
  const username = useLogin();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const searchProduct = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  /**useState: hooks dari react yang memungkinkan kita menambahkan state ke functional component
   * username: variable state yang akan menyimpan nilai username
   * setUsername: fungsi yang dipake buat memperbarui nilai username
   * ""(dalam useState): nilai awal dari state username
   * ketika setUsername dipanggil dengan nilai baru, react merender ulang komponen dengan nilai state yang baru
   */

  //untuk dapetin data dr local storage
  useEffect(() => {
    const token = localStorage.getItem("token");

    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };
  //event Handler diganti ke use call back
  /**usecallback: hooks yang dipake buat nyimpen fungsi di cache agar fungsinya hanya dijalankan
   * ketika ada perubaha npada nilai fungsi tersebut
   */
  const handleAddToCart = useCallback(
    (id) => {
      //jika ada id yang sama maka akan nambahin qty+1
      if (cart.find((item) => item.id === id)) {
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        );
      } else {
        //kalo qty data cmn 1 maka akan di set 1qty-nya
        setCart([...cart, { id, qty: 1 }]);
      }
    },
    [cart]
  );
  //useMemo untuk menghitung total harga cart dan menyimpan hasil perhitungannya ke cache
  /**usememo: hook untuk menyimpan hasil komputasi di cache
   * agar tidak perlu dijalankan ulang ketika tidak ada perubahan
   * dalam kasus ini, usememo untuk nyimpen hasil total cart di cache sehingga ketika halaman di refresh
   * total cart ga di itung ulang kalo nilai ga berubah
   * product?.price: ? pada product adalah optimal chaining
   * optional chaining: sebuah penjagaan untuk memastikan nilai atau propertinya ada
   * atau tidak dari suatu data, manfaat dari optional chaining adalah untuk menghindari
   * error null atau undefined
   */
  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      const product = products.find((product) => product.id === item.id);
      return total + product?.price * item.qty;
    }, 0);
  }, [cart, products]);

  //use effect untuk ngitung total harga dan menyimpan data cart ke localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  //use effect untuk handle tombol back to top
  useEffect(() => {
    function handleScroll() {
      //untuk ambil nilai offsettop posisi vertikal dari elemen footer yang diakses footerRef
      const footerTop = footerRef.current.offsetTop;
      //untuk ambil tinggi objek window/tampilan viewport(tanpa toolbaar)
      const viewPortHeight = window.innerHeight;
      //untuk ambil nilai sumbu y(vertikal)
      const scrollPosition = window.scrollY;
      //cek jika posisi scroll dilayar sudah sampai footer
      if (scrollPosition + viewPortHeight >= footerTop) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }
    //event listener untuk ngecek scroll

    //fungsi handleScroll akan dijalanin pada saat event scroll terjadi
    window.addEventListener("scroll", handleScroll);
    //kembalikan fungsi yang akan dijalankan saat layar berhenti discroll
    return () => {
      //hapus event listener pada event scroll ketika scroll berhenti
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerRef]); //<-[footerRef] dipantau setiap kali ada perubahan

  const handleBackToTop = () => {
    //scroll layar keatas dengan animasi smooth
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 px-5 py-4">
        <h1 className="text-xl">Welcome, {username}</h1>
        <div className="w-[300px]">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 rounded-full w-[300px]"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value !== "") {
                setShowSearch(true);
              } else {
                setShowSearch(false);
              }
            }}
          />
          {showSearch && searchProduct.length > 0 && (
            <ul className="absolute bg-white text-black w-[300px] mt-1 py-2 px-3 rounded-lg">
              {searchProduct.map((product) => (
                <li key={product.id} className="my-1">
                  {product.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button
          color="bg-red-500"
          textButton="Logout"
          onClick={() => {
            setShowModal(true);
          }}
        />
        {showModal && (
          <Modal handleClose={handleClose} handleLogout={handleLogout} />
        )}
      </div>
      <div className="flex px-5 py-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2 uppercase">Products</h1>
          {/* products */}
          <div className="flex flex-wrap gap-4">
            {products.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.title} desc={item.description} />
                <CardProduct.Footer
                  price={item.price}
                  onClick={() => {
                    handleAddToCart(item.id);
                  }}
                />
              </CardProduct>
            ))}
          </div>
        </div>
        {/* cart */}
        {cart.length > 0 && (
          <div className="cart w-2/3">
            <h1 className="text-3xl font-bold mb-2 uppercase">Cart</h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                //logic untuk nyari id dalam variabel data, kalo id yang di data sama dengan id yg ada di chart maka ambil produknya
                const datas = products.find((data) => data.id === item.id);
                return (
                  <>
                    <div key={item.id} className="flex p-4 border rounded-lg">
                      <Image
                        src={datas?.image}
                        width={100}
                        height={100}
                        alt="cart item"
                        className="aspect-square object-contain"
                      />
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-between ml-3">
                          <span className="font-bold text-xl line-clamp-2">
                            {datas?.title}
                          </span>
                          <span className="font-semibold">
                            {formatCurrency(datas?.price * item.qty)}
                          </span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <span className="mb-1">Qty</span>
                          <span className="flex-justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">
                            {item.qty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex justify-between px-4 py-2 border mt-2">
              <span className="font-semibold">total</span>
              <span className="font-semibold">{formatCurrency(cartTotal)}</span>
            </div>
          </div>
        )}
      </div>
      {showBackToTop && (
        <div
          onClick={handleBackToTop}
          className="fixed right-5 bottom-20 bg-blue-500 p-2 rounded-full"
        >
          <BackToTop />
        </div>
      )}

      <footer
        ref={footerRef}
        className="text-center p-5 bg-gray-800 text-white w-full"
      >
        Copyright by Akmal
      </footer>
    </>
  );
};
/**incremental static generation: teknik yang menggabungkan SSR dan SSG , dimana teknik ini
 * memumat halaman website secara statis namun halamannya bisa diupdate secara dinamis
 * jika ada perubahan data
 */
export async function getStaticProps() {
  try {
    const [productResults] = await Promise.all([getProducts()]);
    const slicedProducts = productResults.slice(0, 8);
    const products = await getProducts();

    return {
      props: {
        products: slicedProducts || [],
      },
      revalidate: 60, //revalidate akan mengupdate data sesuai dengan waktu yang ditentukan
    };
  } catch (error) {
    console.log(error);
  }
}

export default ProductPage;
