/*file index js dibuat secara otomatis di folder src/pages.
file ini akan menjadi halaman utama di aplikasi next js*/

import Button from "@/components/buttons";
import ButtonWithProps from "@/components/buttonWithProps";
import Card from "@/components/cardWithChildren";

export default function Home() {
  return (
    <div className="font-poppins p-4 flex justify-center items-center text-black min-h-screen">
      <h1>Welcome to Next.js</h1>
      <Button />
      {/* cara menggunakan komponen props*/}
      <ButtonWithProps buttonClassName={"bg-red-500 text-white"} />
      <ButtonWithProps buttonClassName={"bg-yellow-500"} />
      <ButtonWithProps buttonClassName={"bg-green-500 text-white"} />

      {/* cara menggunakan komponen dengan children*/}
      <Card cardClassName={"p-4"}>
        {/*awal komponen children*/}

        {/* <card></card> = parent*/}
        <h2 className="text-xl font-bold my-3">Card Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Card>

      {/* akhir dari komponen children*/}
      <Card cardClassName={"p-2"}>
        <h2 className="text-xl font-bold my-3">Card Title 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Card>
    </div>
  );
}
