import axios from "axios";

const api = process.env.NEXT_PUBLIC_API_EVENTS;

export async function getEvents() {
  try {
    //buat request GET ke URL API produk menggunakan axios kemudian tampung hasilnya di viarble response
    const response = await axios.get(`${api}/events`);
    //kembalikan data produk dari response jika berhasil
    return response.data;
  } catch (error) {
    //tampilin error jika gagal mengambil data dari API
    console.log(error);
  }
}
