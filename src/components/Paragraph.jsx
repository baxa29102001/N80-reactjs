import {memo} from "react";

function Paragraph(props) {
  console.log("Title running");
  return <div>{props.title}</div>;
}

export default memo(Paragraph);
