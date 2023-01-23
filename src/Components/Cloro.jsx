import React from "react";

const ColorMessage = (props) => {
  const { color, children, text } = props;
  const contentText = {
    color,
    fontSize: "18px"
  };
  if (text == null) {
    return <p style={contentText}>{children}</p>;
  } else {
    return <p style={contentText}>{text}</p>;
  }
};

export default ColorMessage;
