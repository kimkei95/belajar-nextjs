/*file index js dibuat secara otomatis di folder src/pages.
file ini akan menjadi halaman utama di aplikasi next js*/

import Button from "@/components/atoms/Buttons";

import Card from "@/components/molecules/CardWithChildren";

export default function Home() {
  return (
    <div className="font-poppins p-4 flex justify-center items-center text-black min-h-screen">
      <h1>Welcome to Next.js</h1>
      <Button />
      {/* cara menggunakan komponen props*/}

      {/* cara menggunakan komponen dengan children*/}
      <Card cardClassName={"p-4"}>
        {/*awal komponen children*/}

        {/* <card></card> = parent*/}
        <h2 className="text-xl font-bold my-3">Card Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Card>

      {/* akhir dari komponen children*/}
      <Card cardClassName={"p-2"}>
        <h2 className="text-xl font-bold my-3">Card Title 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Card>
    </div>
  );
}
