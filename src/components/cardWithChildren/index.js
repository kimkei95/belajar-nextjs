import React from "react";

const Card = ({ children, cardClassName }) => {
  return (
    <>
      <div className={`border rounded-lg shadow-lg w-[300px]${cardClassName}`}>
        {children}
      </div>
    </>
  );
};

export default Card;
/** children
 * children adalah properti khusus yang dipake buat mengirimkan komponen anak(children) ke dalam komponen induk (parent)
 * dalam kasus ini komponencard aja menjadi komponen parent/pembungkus
 * untuk komponen children didalam<card>{komponenchildren}</card>
 */
