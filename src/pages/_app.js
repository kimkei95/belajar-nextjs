import { isMobileScreenAtom } from "@/jotai/atoms";
import "@/styles/globals.css";
import { useSetAtom } from "jotai";

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const setIsMobileScreen = useSetAtom(isMobileScreenAtom);
  useEffect(() => {
    function handleResize() {
      setIsMobileScreen(window.innerWidth < 768);
      // store.dispatch(setIsLargeScreen(window.innerWidth > 1240));
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileScreen]);
  return <Component {...pageProps} />;
}
