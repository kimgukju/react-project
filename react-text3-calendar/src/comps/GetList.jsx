import React from "react";
import "../css/GetList.css";

function GetList(props) {
  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="추가할 내용을 적은 후에 Enter"
        onKeyUp={props.Addlist}
      />
    </div>
  );
}
export default GetList;
