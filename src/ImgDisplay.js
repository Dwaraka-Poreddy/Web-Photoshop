import { BorderColor } from "@material-ui/icons";
import React, { useState } from "react";
import Draggable from "react-draggable";
function ImgDisplay({ item, index, handleClick }) {
  const [isMousedOver, setMouseOver] = useState(true);
  return (
    <Draggable>
      <div style={{ zIndex: 10000 }}>
        <div>
          <img
            onClick={() => {
              handleClick(index);
            }}
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            style={{
              display: !item.isImgdisplay ? "inline-block" : "none",
              objectFit: "contain",
              width: "180px",
              position: "absolute",
              top: index * 50,
              left: index * 50,
              margin: "auto",
              border: "1px solid ",
              borderColor: item.bordCol
            }}
            src={item.ImgSource}
            alt={index}
          />
        </div>
      </div>
    </Draggable>
  );
}
export default ImgDisplay;
