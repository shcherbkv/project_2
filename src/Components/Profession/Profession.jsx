import "./Profession.scss";
import React from "react";

export default function Profession(props) {
  return (
    <div className={`professionContainer profNumber-${props.profNumber}`} ><div className="text-container"><span className="spanText">{props.arr[(props.profNumber)-1].name}</span></div></div>
  );
}