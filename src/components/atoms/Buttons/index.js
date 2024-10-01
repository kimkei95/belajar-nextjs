import React from "react";

const Button = ({
  color = "bg-blue-500",
  textButton = "Button",
  size,
  onClick = () => {},
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-10 px-6 font-semibold rounded-md ${color} ${size}`}
    >
      {textButton}
    </button>
  );
};

export default Button;
