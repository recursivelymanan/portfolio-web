import React, { useState } from "react";

function ImageText({ imgSrc, message, classname, side }) {
  const [hover, setHover] = useState(false);

  const mouseOver = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  return (
    <>
      <p
        id="img"
        class={classname}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        {message}
      </p>

      {hover && <img class={`hover-${side}`} src={imgSrc} />}
    </>
  );
}

export default ImageText;
