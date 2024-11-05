import "./Competence.scss";
import React from "react";

export default function Competence(props) {
  return (
    <div className={`competenceContainer number-${props.number}`} ><div className="text-container">{props.arr[10].allSkills[(props.number)-1]}</div></div>
  );
}