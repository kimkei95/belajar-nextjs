import React from "react";
/** props
 * props: cara untuk mengirim data dari satu komponen ke komponen lainnya
 * props adalah objek yang di teruskan sebagai argumen atau parameter dan digunakan
 * untuk custom style komponen, mengirim data dari API dan sebagainya
 */
const ButtonWithProps = ({ buttonClassName }) => {
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${buttonClassName}`}>
      button
    </button>
  );
};

export default ButtonWithProps;
// const ButtonWithProps = ({ buttonClassName = "bg-blue-500", textButton = "Button", link="#" }) => {
//     return (
//       <a href="#" className={`h-10 px-6 font-semibold rounded-md ${buttonClassName}`}>
//         {textButton}
//       </a>
//     );
//   };
