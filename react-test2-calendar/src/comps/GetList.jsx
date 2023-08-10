import React from "react";

function GetList(props) {
    return (
        <div>
            <input type="text" placeholder="뭐필요하니?" onKeyUp={props.Addlist}/>
            <button>추가?</button>
        </div>
    )
}
export default GetList