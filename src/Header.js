import React, { useEffect, useState } from "react";
import "./Header.css";
import CustomScroll from "./CustomScroll";
import Response from "./response";
import { Avatar } from "@material-ui/core";
import HeaderBtn from "./HeaderBtn";
import Btn from "./Btn";
import PublishIcon from "@material-ui/icons/Publish";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import SearchIcon from "@material-ui/icons/Search";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import SettingsIcon from "@material-ui/icons/Settings";
import TextDisplay from "./TextDisplay";
import ImgDisplay from "./ImgDisplay";
import Draggable from "react-draggable";
import InputColor, { Color } from "react-input-color";
import FontPicker from "./FontPicker";

import TextField from "@material-ui/core/TextField";

//imports for leftbar
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
///
// imports of workspace
///
//imports for RightBar1
import BorderTopIcon from "@material-ui/icons/BorderTop";
import BorderBottomIcon from "@material-ui/icons/BorderBottom";
import BorderLeftIcon from "@material-ui/icons/BorderLeft";
import BorderRightIcon from "@material-ui/icons/BorderRight";
import BorderClearIcon from "@material-ui/icons/BorderClear";
import ColorizeIcon from "@material-ui/icons/Colorize";
import DeleteForever from "@material-ui/icons/DeleteForever";
///
//imports fro RightBar2
import CreateIcon from "@material-ui/icons/Create";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import ColorizeOutlinedIcon from "@material-ui/icons/ColorizeOutlined";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import Box from "@material-ui/core/Box";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
// imports for meme download
import Canvas from "react-canvas-js";
import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
/// content related to RightSidebar2
import Button from "@material-ui/core/Button";
import uuid from "react-uuid";

const secuseStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  }
}));

const useStylesinput = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "12ch",
      color: "#ffffff"
    }
  }
}));

//things related to Rightsidebar2
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0.5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const RBar2AntTabs = withStyles({
  root: {
    borderBottom: "0.05px solid #5a5d68",
    backgroundColor: "#252935"
  },
  indicator: {
    backgroundColor: "#ffffff"
  }
})(Tabs);
const RBar2AntTab = withStyles((RBar2theme) => ({
  root: {
    textTransform: "none",
    minWidth: 45,
    fontWeight: RBar2theme.typography.fontWeightRegular,
    marginRight: RBar2theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "#ffffff",
      opacity: 1
    },
    "&$selected": {
      color: "#ffffff",
      fontWeight: RBar2theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#ffffff"
    }
  },
  selected: {}
}))((props) => <Tab disableRipple {...props} />);
const RBar2useStyles = makeStyles((RBar2theme) => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: RBar2theme.spacing(3)
  },
  demo1: {
    backgroundColor: RBar2theme.palette.background.paper
  }
}));

const initialState = {
  ffamily: "",
  isdisplay: true,
  title: "SampleText",
  isBold: false,
  isItalic: false,
  isUnderLine: false,
  color: {},
  backgroundColor: {},
  outlineColor: {},
  alignment: "justify"
};

const imginitState = {
  isImgdisplay: true,
  ImgSource: "https://static.toiimg.com/photo/72975551.cms",
  bordCol: "{}"
};

function Header() {
  const data = Response;
  const [ffamily, setFfamily] = useState("");
  const [fFname, setfFname] = useState("FontName");
  const [isdisplay, setisDisplay] = useState("inline-block");
  const [color, setColor] = useState({});
  const [isBold, setIsBold] = useState(false);
  const [isUnderLine, setIsUnderLine] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState({});
  const [outlineColor, setOutlineColor] = useState({});
  const [alignment, setAlignment] = useState("justify");
  /////related to secondary image, separete js file
  const [secImgId, setSecImgId] = useState(0);
  const [secImgEditId, setSecImgEditId] = useState("");
  const [bordCol, setBordCol] = useState({});
  const [isImgdisplay, setIsImgdisplay] = useState(true);
  const [ImgSource, setImgSource] = useState(
    "https://static.toiimg.com/photo/72975551.cms"
  );
  ///related to rightsidebae2
  const RBar2classes = RBar2useStyles();
  const RBar2theme = useTheme();
  const [RBar2value, setRBar2Value] = React.useState(0);
  const handleRBar2Change = (event, newValue) => {
    setRBar2Value(newValue);
  };
  // const [isBold, setIsBold] = useState(true);
  ///////
  const [isshowText, setShowText] = useState(false);
  const [textelements, settextelements] = useState([]);
  const [textelement, settextelement] = useState(initialState);
  const [secImgElements, setSecImgElements] = useState([]);
  const [secImgElement, setSecImgElement] = useState(imginitState);

  const [fileName, setFileName] = React.useState("");
  const [id, setId] = useState("");
  const [imageid, setImageId] = useState("");
  const [activeImage, setActiveImage] = React.useState(
    "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
  );
  const secclasses = secuseStyles();
  const classesinput = useStylesinput();
  function handleMemeDownlod(el) {
    var canvas = document.getElementById("workingSpace");
    html2canvas(canvas).then(function (canvas) {
      domtoimage
        .toBlob(document.getElementById("workingSpace"))

        .then(function (base64image) {
          window.saveAs(base64image, fileName);
        });
    });
  }

  function handleSecImageInputChange(event) {
    setSecImgElements((prevElements) => {
      return [...prevElements, secImgElement];
    });
    addSecimage(window.URL.createObjectURL(event.target.files[0]));
  }
  function addSecimage(e) {
    setImgSource(e);
    const goats = secImgElements;
    goats[secImgId] = {
      ...goats[secImgId],
      ImgSource: e
    };
    setSecImgId(secImgId + 1);
    setSecImgElements(secImgElements);
  }

  const handleClick = (id) => {
    // console.log("My Id  ", id);
    setId(id);
  };
  const handleImgEditClick = (id) => {
    setSecImgEditId(id);
  };
  const displayText = () => {
    return textelements.map((item, index) => {
      // console.log(item);
      return (
        <div
          onClick={() => {
            setRBar2Value(0);
          }}
          style={{ display: "flex" }}
        >
          <TextDisplay
            // rank={uuid()}
            item={item}
            index={index}
            handleClick={handleClick}
            setShowText={setShowText}
          />
          {/* {JSON.stringify(rank)} */}
        </div>
      );
    });
  };

  const displayImage = () => {
    return secImgElements.map((item, index) => {
      return (
        <div
          onClick={() => {
            setShowText(true);
            setRBar2Value(1);
            setImageId(index);
          }}
        >
          <ImgDisplay
            item={item}
            handleClick={handleImgEditClick}
            index={index}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <div
        onClick={() => {
          setShowText(false);
        }}
        className="allheader"
      >
        <div className="header">
          <div className="header__left">
            <Avatar className="header__logo" alt="logo" src="" />
            <p className="header__leftStepper">Horizantal Stepper</p>
          </div>

          <p
            onClick={() => {
              console.log("1", fFname);
            }}
            style={{ fontFamily: fFname }}
          >
            GiftCard Generator
          </p>
          <div style={{ display: "flex" }} className="header__right">
            <TextField
              className={classesinput.root}
              style={{
                border: "2px solid #30343f",
                borderRadius: "5px",
                marginRight: "10px",
                height: "50px",
                marginTop: "5px"
              }}
              color="primary"
              id="standard-basic"
              label="File Name"
              size="small"
              onChange={(e) => {
                setFileName(e.target.value);
              }}
            />

            <Btn style={{ border: "0.05px solid #b2b2b2" }} title="Share" />
            <Btn
              handleClick={() => handleMemeDownlod(this)}
              title="Export Image"
            />
            <Btn title="Sign In" />
          </div>
        </div>
        <div className="header">
          <div className="header__left">
            <HeaderBtn
              handleClick={() => {
                setShowText(false);
              }}
              selected
              Icon={PublishIcon}
              title="Upload"
            />
            <HeaderBtn
              handleClick={() => {
                setShowText(false);
                settextelements((prevElements) => {
                  return [...prevElements, textelement];
                });
              }}
              style={{ color: "inherit" }}
              Icon={TextFieldsIcon}
              TramRounded
              title="Text"
            />
            <input
              accept="image/* "
              className={secclasses.input}
              id="fileInput"
              name="fileInput"
              multiple
              type="file"
              onChange={handleSecImageInputChange}
            />
            <label htmlFor="fileInput">
              <HeaderBtn
                handleClick={() => {
                  setShowText(false);
                }}
                Icon={SearchIcon}
                title="Add Images"
              />
            </label>
            <HeaderBtn
              handleClick={() => {
                setShowText(false);
              }}
              Icon={PlaylistPlayIcon}
              title="Timeline"
            />
            <input
              accept="image/* "
              className={secclasses.input}
              id="LocalfileInput"
              name="LocalfileInput"
              // multiple
              type="file"
              onChange={(event) => {
                setActiveImage(
                  window.URL.createObjectURL(event.target.files[0])
                );
              }}
            />
            <label htmlFor="LocalfileInput">
              <HeaderBtn
                handleClick={() => {
                  setShowText(false);
                }}
                Icon={ViewModuleIcon}
                title="Local Image"
              />
            </label>
            <HeaderBtn
              handleClick={() => {
                setShowText(false);
              }}
              Icon={AudiotrackIcon}
              title="Audio"
            />
            <HeaderBtn
              handleClick={() => {
                setShowText(false);
              }}
              Icon={SubtitlesIcon}
              title="Subtitles"
            />
          </div>
          <div
            handleClick={() => {
              setShowText(false);
            }}
            className="header__right"
          >
            <HeaderBtn
              handleClick={() => {
                setShowText(false);
              }}
              Icon={SettingsIcon}
              title="Settings"
            />
          </div>
        </div>
      </div>
      <div className="body">
        <div
          onClick={() => {
            setShowText(false);
          }}
          className="LeftSideBar"
        >
          <h2
            style={{
              textAlign: "center",
              margin: "auto",
              alignText: "center",
              backgroundColor: "#252935",
              padding: "5px"
            }}
          >
            Trending
          </h2>
          <CustomScroll>
            {data.items.map((item, index) => (
              <div
                className="scrollArea"
                style={{
                  display: "flex",
                  margin: "auto",
                  marginTop: "10px",
                  maxWidth: "700px",
                  borderRight: "8px solid #252935",
                  cursor: "pointer"
                }}
              >
                <img
                  onClick={() => {
                    setActiveImage(item.src);
                  }}
                  style={{
                    objectFit: "contain",
                    width: "200px",
                    padding: "3px",
                    // height: "158px",
                    margin: "auto",
                    border: "2px solid #5a5d68"
                  }}
                  src={item.src}
                  alt=""
                />
                {JSON.stringify(Math.random)}
              </div>
            ))}
          </CustomScroll>
        </div>
        <div className="WorkSpace">
          <React.Fragment>
            <CssBaseline />
            <Container fixed>
              <Typography
                id="workingSpace"
                component="div"
                style={{
                  backgroundColor: "#cfe8fc",
                  flex: "0.6"
                }}
              >
                <div
                  onClick={() => {
                    // console.log("clicked");
                    // setShowText(true);
                    // setRBar2Value(1);
                  }}
                  style={{
                    // height: "75vh",
                    // width: "100%",
                    flex: "0.6",
                    position: "relative",
                    // overflowX: "scroll",
                    padding: "0"
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      width: "100%",
                      zIndex: "0"
                      // overflowX: "auto"
                    }}
                    src={activeImage}
                    alt=""
                  />
                  {displayText()}
                  {displayImage()}
                </div>
              </Typography>
            </Container>
          </React.Fragment>
        </div>
        <div>
          <CustomScroll style={{ backgroundColor: "#252935" }}>
            {isshowText ? (
              <div className="RightSideBar2">
                <div className="RightSideBar2">
                  <div className={RBar2classes.root}>
                    <div className={RBar2classes.demo1}>
                      <RBar2AntTabs
                        value={RBar2value}
                        onChange={handleRBar2Change}
                        aria-label="ant example"
                      >
                        <RBar2AntTab label="TEXT" />
                        <RBar2AntTab label="IMAGE" />
                        <RBar2AntTab label=" ANIMATE" />
                      </RBar2AntTabs>
                    </div>
                    <SwipeableViews
                      axis={RBar2theme.direction === "rtl" ? "x-reverse" : "x"}
                      index={RBar2value}
                      onChangeIndex={handleRBar2Change}
                    >
                      <TabPanel
                        value={RBar2value}
                        index={0}
                        dir={RBar2theme.direction}
                      >
                        <div className="RightSideBar2__Btn">
                          <CreateIcon className="RightSideBar2__Btn__icon" />
                          <h2 className="RightSideBar2__Btn__title">
                            {" "}
                            &nbsp;Edit Text{" "}
                          </h2>{" "}
                        </div>
                        <p className="RightSideBar2__Text">FONT</p>
                        <div
                          onClick={() => {
                            setFfamily(ffamily);
                            // console.log("underline clicked", color);
                            const sheeps = textelements;
                            sheeps[id] = {
                              ...sheeps[id],
                              ffamily: sheeps[id].ffamily
                            };
                            settextelements(textelements);
                            // console.log(alignment);
                          }}
                        >
                          <FontPicker setfFname={setfFname} />
                        </div>

                        <div style={{ display: "flex" }}>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title"> 47 </h2>{" "}
                            <ExpandMoreIcon className="RightSideBar2__Btn__icon" />
                          </div>
                          <div className="RightSideBar2__Btn">
                            <AspectRatioIcon className="RightSideBar2__Btn__icon" />
                            <h2 className="RightSideBar2__Btn__title">
                              {" "}
                              &nbsp;Lock Ratio{" "}
                            </h2>{" "}
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div
                            onClick={() => {
                              setIsBold(!isBold);
                              const sheeps = textelements;
                              sheeps[id] = {
                                ...sheeps[id],
                                isBold: !sheeps[id].isBold
                              };
                              settextelements(textelements);
                            }}
                            style={{ padding: "10px 10px" }}
                            className="RightSideBar2__Btn"
                          >
                            <FormatBoldIcon className="RightSideBar2__Btn__icon" />
                          </div>
                          <div
                            onClick={() => {
                              setIsItalic(!isItalic);
                              // console.log("italic clicked", id);
                              const sheeps = textelements;
                              sheeps[id] = {
                                ...sheeps[id],
                                isItalic: !sheeps[id].isItalic
                              };
                              settextelements(textelements);
                            }}
                            style={{ padding: "10px 10px" }}
                            className="RightSideBar2__Btn"
                          >
                            <FormatItalicIcon className="RightSideBar2__Btn__icon" />
                          </div>
                          <div
                            onClick={() => {
                              setIsUnderLine(!isUnderLine);
                              // console.log("underline clicked", color);
                              const sheeps = textelements;
                              sheeps[id] = {
                                ...sheeps[id],
                                isUnderLine: !sheeps[id].isUnderLine
                              };
                              settextelements(textelements);
                            }}
                            style={{ padding: "10px 10px" }}
                            className="RightSideBar2__Btn"
                          >
                            <FormatUnderlinedIcon className="RightSideBar2__Btn__icon" />
                          </div>
                          <div
                            onClick={() => {
                              setAlignment("left");
                              // console.log("underline clicked", color);
                              const sheeps = textelements;
                              sheeps[id] = {
                                ...sheeps[id],
                                alignment: sheeps[id].alignment
                              };
                              settextelements(textelements);
                              // console.log(alignment);
                            }}
                            style={{ padding: "10px 10px" }}
                            className="RightSideBar2__Btn"
                          >
                            <FormatAlignLeftIcon className="RightSideBar2__Btn__icon" />
                          </div>
                          <div
                            onClick={() => {
                              setAlignment("center");
                              // console.log("underline clicked", color);
                              const sheeps = textelements;
                              sheeps[id] = {
                                ...sheeps[id],
                                alignment: sheeps[id].alignment
                              };
                              settextelements(textelements);
                              // console.log(alignment);
                            }}
                            style={{ padding: "10px 10px" }}
                            className="RightSideBar2__Btn"
                          >
                            <FormatAlignCenterIcon className="RightSideBar2__Btn__icon" />
                          </div>
                          <div
                            onClick={() => {
                              setAlignment("right");
                              // console.log("underline clicked", color);
                              const sheeps = textelements;
                              sheeps[id] = {
                                ...sheeps[id],
                                alignment: sheeps[id].alignment
                              };
                              settextelements(textelements);
                              // console.log(alignment);
                            }}
                            style={{ padding: "10px 10px" }}
                            className="RightSideBar2__Btn"
                          >
                            <FormatAlignRightIcon className="RightSideBar2__Btn__icon" />
                          </div>
                        </div>
                        <p className="RightSideBar2__Text">TEXT COLOR</p>

                        <input
                          type="color"
                          id="TextColor"
                          initialValue="null"
                          value={color.hex}
                          onChange={(e) => {
                            setColor(e.target.value);
                            const sheeps = textelements;
                            sheeps[id] = {
                              ...sheeps[id],
                              color: e.target.value
                            };
                            settextelements(textelements);
                          }}
                          placement="right"
                          autoAdjust="true"
                          style={{
                            margin: "auto",
                            visibility: "hidden",
                            position: "relative",
                            display: "flex",
                            height: "5px"
                          }}
                        />
                        <label htmlFor="TextColor">
                          <div
                            style={{ marginTop: "10px" }}
                            className="RightSideBar2__Btn"
                          >
                            <FormatColorTextIcon className="RightSideBar2__Btn__icon" />
                            <h2 className="RightSideBar2__Btn__title">
                              {" "}
                              &nbsp; Text Color{" "}
                            </h2>{" "}
                          </div>
                        </label>
                        <p className="RightSideBar2__Text">TEXT OUTLINE</p>
                        <input
                          type="color"
                          id="OutlineColor"
                          initialValue="null"
                          value={color.hex}
                          onChange={(e) => {
                            setOutlineColor(e.target.value);
                            const sheeps = textelements;
                            sheeps[id] = {
                              ...sheeps[id],
                              outlineColor: e.target.value
                            };
                            settextelements(textelements);
                            // console.log(outlineColor);
                          }}
                          placement="right"
                          autoAdjust="true"
                          style={{
                            margin: "auto",
                            visibility: "hidden",
                            position: "relative",
                            display: "flex",
                            height: "5px"
                          }}
                        />
                        <label htmlFor="OutlineColor">
                          <div
                            style={{ marginTop: "10px" }}
                            className="RightSideBar2__Btn"
                          >
                            <ColorizeOutlinedIcon className="RightSideBar2__Btn__icon" />
                            <h2 className="RightSideBar2__Btn__title">
                              {" "}
                              &nbsp; Outline Color{" "}
                            </h2>{" "}
                          </div>
                        </label>
                        <p className="RightSideBar2__Text">
                          TEXT BACKGROUND COLOR
                        </p>
                        <input
                          type="color"
                          id="BackgroundColor"
                          initialValue="null"
                          value={color.hex}
                          onChange={(e) => {
                            setBackgroundColor(e.target.value);
                            const sheeps = textelements;
                            sheeps[id] = {
                              ...sheeps[id],
                              backgroundColor: e.target.value
                            };
                            settextelements(textelements);
                          }}
                          placement="right"
                          autoAdjust="true"
                          style={{
                            margin: "auto",
                            visibility: "hidden",
                            position: "relative",
                            display: "flex",
                            height: "5px"
                          }}
                        />
                        <label htmlFor="BackgroundColor">
                          <div
                            style={{ marginTop: "10px" }}
                            className="RightSideBar2__Btn"
                          >
                            <FormatColorFillIcon className="RightSideBar2__Btn__icon" />
                            <h2 className="RightSideBar2__Btn__title">
                              &nbsp; Background Color{" "}
                            </h2>{" "}
                          </div>
                        </label>
                        <div style={{ display: "flex" }}>
                          <div
                            onClick={() => {
                              setShowText(false);
                              setisDisplay(!isdisplay);
                              const sheeps = textelements;
                              sheeps[id] = {
                                ...sheeps[id],
                                isdisplay: !sheeps[id].isdisplay
                              };
                              settextelements(textelements);
                              setId(-1);
                            }}
                            className="RightSideBar2__Btn"
                          >
                            <DeleteForever className="RightSideBar2__Btn__icon" />
                            <h2 className="RightSideBar2__Btn__title">
                              {" "}
                              &nbsp;Delete{" "}
                            </h2>{" "}
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel
                        value={RBar2value}
                        index={1}
                        dir={RBar2theme.direction}
                      >
                        {" "}
                        <p className="RightSideBar2__Text">
                          Image Border COLOR
                        </p>
                        <input
                          type="color"
                          id="ImgBorderColor"
                          initialValue="null"
                          value={color.hex}
                          onChange={(e) => {
                            setBordCol(e.target.value);
                            const goats = secImgElements;
                            goats[secImgEditId] = {
                              ...goats[secImgEditId],
                              bordCol: e.target.value
                            };
                            setSecImgElements(secImgElements);
                          }}
                          placement="right"
                          autoAdjust="true"
                          style={{
                            margin: "auto",
                            visibility: "hidden",
                            position: "relative",
                            display: "flex",
                            height: "5px"
                          }}
                        />
                        <label htmlFor="ImgBorderColor">
                          <div
                            style={{ marginTop: "10px" }}
                            className="RightSideBar2__Btn"
                          >
                            <FormatColorFillIcon className="RightSideBar2__Btn__icon" />
                            <h2 className="RightSideBar2__Btn__title">
                              &nbsp; Border Color{" "}
                            </h2>{" "}
                          </div>
                        </label>
                        <p className="RightSideBar2__Text">EFFECT</p>
                        <div style={{ display: "flex" }}>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">None </h2>
                          </div>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">
                              {" "}
                              Drop Shadow
                            </h2>
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div
                            onClick={() => {
                              setShowText(false);
                              setIsImgdisplay(!isImgdisplay);
                              const goats = secImgElements;
                              goats[secImgEditId] = {
                                ...goats[secImgEditId],
                                isImgdisplay: !goats[secImgEditId].isImgdisplay
                              };
                              setSecImgElements(secImgElements);
                              setSecImgEditId(-1);
                            }}
                            className="RightSideBar2__Btn"
                          >
                            <DeleteForever className="RightSideBar2__Btn__icon" />
                            <h2 className="RightSideBar2__Btn__title">
                              {" "}
                              &nbsp;Delete{" "}
                            </h2>{" "}
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel
                        value={RBar2value}
                        index={2}
                        dir={RBar2theme.direction}
                      >
                        <p className="RightSideBar2__Text">ANIMATION</p>
                        <div style={{ display: "flex" }}>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title"> None</h2>
                          </div>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">
                              {" "}
                              DropIn
                            </h2>
                          </div>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">
                              {" "}
                              Flicker
                            </h2>
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title"> Fade</h2>
                          </div>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">
                              {" "}
                              Vibrate
                            </h2>
                          </div>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">
                              Reveal
                            </h2>
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">Wipe </h2>
                          </div>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">
                              {" "}
                              SlideUp
                            </h2>
                          </div>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">
                              PopIn{" "}
                            </h2>
                          </div>
                        </div>
                        <p className="RightSideBar2__Text">ANIMATION SPEED</p>
                        <div style={{ display: "flex" }}>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">Slow </h2>
                          </div>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">
                              {" "}
                              Default
                            </h2>
                          </div>
                          <div className="RightSideBar2__Btn">
                            <h2 className="RightSideBar2__Btn__title">Fast </h2>
                          </div>
                        </div>
                      </TabPanel>
                    </SwipeableViews>
                  </div>
                </div>
              </div>
            ) : (
              <div className="RightSideBar1">
                {/* Aspect Ratio */}
                <p className="RightSideBar1__Text">OUTPUT SIZE</p>
                <div className="RightSideBar1Btns">
                  <Btn selected title="1:1" />
                  <Btn title="9:16" />
                  <Btn title="16:9" />
                  <Btn title="4:5" />
                  <Btn title="5:4" />
                </div>
                <div className="RightSideBar1Btns">
                  <Btn title="Custom Size" />
                </div>
                {/* Padding */}
                <p className="RightSideBar1__Text">EXPAND PADDING</p>
                <div className="RightSideBar1__Padding">
                  <HeaderBtn Icon={BorderTopIcon} title="Top" />
                  <HeaderBtn Icon={BorderBottomIcon} title="Bottom" />
                </div>
                <div className="RightSideBar1__Padding">
                  <HeaderBtn Icon={BorderLeftIcon} title="Left" />
                  <HeaderBtn Icon={BorderRightIcon} title="Right" />
                </div>
                <div className="RightSideBar1__Padding">
                  <HeaderBtn Icon={BorderClearIcon} title="Remove Padding" />
                </div>
                {/* Color */}
                <p className="RightSideBar1__Text">BACKGROUND COLOR</p>
                <div className="RightSideBar1__Color">
                  <HeaderBtn Icon={ColorizeIcon} title="Color" />
                </div>
              </div>
            )}
          </CustomScroll>
        </div>
      </div>
      <div style={{ backgroundColor: "#191e2b", height: "3.9vh" }}></div>
    </div>
  );
}
export default Header;
