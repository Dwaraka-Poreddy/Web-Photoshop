import { BorderColor } from "@material-ui/icons";
import React, { useState } from "react";
import Draggable from "react-draggable";
import ResizableContent from "./ResizableContent";
function ImgDisplay({ item, index, handleClick }) {
  const [isMousedOver, setMouseOver] = useState(true);
  return (
    <ResizableContent
      // onClick={() => {
      //   handleClick(index);
      // }}
      top={100}
      left={100}
      width={100}
      height={100}
      rotateAngle={0}
    >
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
              height: "100%",
              width: "100%",

              objectFit: "cover",
              top: index * 50,
              left: index * 50,
              margin: "auto",
              // borderRadius: item.borderRadius,
              // border: "1px solid ",
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
    </ResizableContent>
  );
}
export default ImgDisplay;
