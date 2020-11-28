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
              opacity: item.opacity,
              display: !item.isImgdisplay ? "inline-block" : "none",
              objectFit: "contain",
              width: item.width + "px",
              position: "absolute",
              top: index * 50,
              left: index * 50,
              margin: "auto",
              borderRadius: item.borderRadius,
              border: "1px solid ",
              filter:
                "blur(" +
                item.blur +
                "px) grayscale(" +
                item.grayscale +
                ") contrast(" +
                item.contrast +
                ") invert(" +
                item.invert +
                ")",

              borderColor: item.borderColor
            }}
            src={item.ImgSource}
            alt={index}
          />
          {/* {JSON.stringify(item)} */}
        </div>
      </div>
    </Draggable>
  );
}
export default ImgDisplay;
