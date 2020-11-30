import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import { Avatar } from "@material-ui/core";
import Canvas from "react-canvas-js";
import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import Card from "@material-ui/core/Card";

export default function Main() {
  function handleMemeDownlod(el) {
    var canvas = document.getElementById("workingSpace");
    html2canvas(canvas).then(function (canvas) {
      domtoimage
        .toBlob(document.getElementById("workingSpace"))

        .then(function (base64image) {
          console.log();
          window.saveAs(base64image, "newspaper");
        });
    });
  }

  return (
    <div>
      {/* ////////////////////////// */}
      <div className="allheader">
        <div className="header">
          <div className="header__left">
            <Link to="/">
              <Btn className="header__leftStepper" title="Main page" />
            </Link>
          </div>

          <p>GiftCard Generator</p>
          <div style={{ display: "flex" }} className="header__right">
            <Btn
              handleClick={() => handleMemeDownlod(this)}
              title="Export Image"
            />
          </div>
        </div>
      </div>
      {/* /////////////////////// */}
      <div
        style={{
          height: "30vh",
          width: "100%",
          backgroundColor: "#191e2b",
          color: "white",
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "400"
        }}
      >
        <h2 style={{ backgroundColor: "#191e2b", margin: "auto" }}>
          {" "}
          Lorem Epsum{" "}
        </h2>
      </div>
      <div className="cardcontainer">
        <Link to="/greet">
          {" "}
          <Card className="MainCard">
            <img
              style={{ height: "80%", width: "100%" }}
              src="https://i.pinimg.com/originals/59/c2/13/59c213997cbbf5358a7271efb895aba3.jpg"
              alt=""
            />
            <h2
              style={{
                backgroundColor: "#191e2b",
                margin: "auto",
                color: "#fff"
              }}
            >
              Greetings
            </h2>
          </Card>{" "}
        </Link>{" "}
        <Link to="/newspaper">
          <Card className="MainCard">
            <img
              style={{ height: "80%", width: "100%" }}
              src="https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/n/e/newspaper-layout-slide1.png"
              alt=""
            />
            <h2
              style={{
                backgroundColor: "#191e2b",
                margin: "auto",
                color: "#fff"
              }}
            >
              News Paper
            </h2>
          </Card>
        </Link>
        <Card className="MainCard">
          <img
            style={{ height: "80%", width: "100%" }}
            src="https://i1.fnp.com/images/pr/l/v19700101053000/personalized-magazine-cover_1.jpg"
            alt=""
          />
          <h2
            style={{
              backgroundColor: "#191e2b",
              margin: "auto",
              color: "#fff"
            }}
          >
            News Paper
          </h2>
        </Card>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <div className="cardcontainer">
        <Card className="MainCard"></Card>
        <Card className="MainCard">qewfghj</Card>
        <Card className="MainCard">qewfghj</Card>
        

      </div> */}
      <div className="footer"></div>
    </div>
  );
}
