//import dependencies axios untuk integrasi ke API
import axios from "axios";
//import dan simpan variable api yang berisi URL public dari env NEXT_PUBLIC_API
const api = process.env.NEXT_PUBLIC_API;
//export fungsi getProducts yang mengembalikan data produk dari API
export async function getProducts() {
  //eksekusi di blok tryCatch
  try {
    //buat request GET ke URL API produk menggunakan axios kemudian tampung hasilnya di viarble response
    const response = await axios.get(`${api}/products`);
    //kembalikan data produk dari response jika berhasil
    return response.data;
  } catch (error) {
    //tampilin error jika gagal mengambil data dari API
    console.log(error);
  }
}
export async function getProductById(id) {
  try {
    const response = await axios.get(`${api}/products/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
