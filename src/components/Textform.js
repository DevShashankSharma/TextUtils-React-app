import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase","success")
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success")
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed","success")
  };

  const handleOnChange = (event) => {
    // console.log("button clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // text = "hello" //Wrong way to change a state
  // setText("hello"); //Right way to change a state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={{
              background: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          {" "}
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          {" "}
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          {" "}
          Clear text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          {" "}
          Copy text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          {" "}
          Handle Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words,{text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to Preview it here"}</p>
      </div>
    </>
  );
}
