import React from "react";

const Img = ({ src, alt, radius }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`block w-full h-full object-cover ${radius}`}
    />
  );
};

export default Img;
