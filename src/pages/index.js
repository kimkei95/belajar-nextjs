import Button from "@/components/atoms/Buttons";
import CardProduct from "@/components/molecules/CardProducts";

import Card from "@/components/molecules/CardWithChildren";
import { isMobileScreenAtom } from "@/jotai/atoms";
import { getEvents } from "@/services/events";
import { useAtom } from "jotai";

export default function Home({ events }) {
  const [isMobileScreen] = useAtom(isMobileScreenAtom);
  console.log(isMobileScreen);

  return (
    <div className="font-poppins p-4 flex justify-center items-center text-black min-h-screen">
      {isMobileScreen ? (
        <h1>Ini halaman mobile</h1>
      ) : (
        <h1>ini halaman desktop</h1>
      )}
      <Button />
      <div className="flex gap-6">
        {events.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Body title={item.title} desc={item.participant} />
            {item.location}
          </CardProduct>
        ))}
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  try {
    const [eventResult] = await Promise.all([getEvents()]);
    return {
      props: {
        events: eventResult?.content,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
