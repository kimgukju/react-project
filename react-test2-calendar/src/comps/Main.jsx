import GetList from "../comps/GetList";
import { useState } from "react";
import List from "./List";

function Main(props) {
  const days = props.Days;
  const Month = props.Month;

  const [ListDatas, SetListDatas] = useState([
    { id: 0, text: "HI", clear: false, show: true, day: "8/10" },
    { id: 1, text: "빈둥빈둥", clear: false, show: true, day: "8/10" },
  ]);

  const list = ListDatas.map((info) => (
    <List key={info.id} state={info} deletelist={deletelist} />
  ));
  let id = 2;

  function Addlist(event) {
    var value = event.target.value;
    if (event.keyCode != 13 || value == "") return;

    event.target.value = "";
    const date = new Date();
    const day = date.getMonth() + 1 + "/" + date.getDate();
    SetListDatas(
      ListDatas.concat({
        id: id++,
        text: value + "//" + Month + "월" + days + "일", // 일단은 셀렉한 값 월,일 불러보려고
        // text: value,
        clear: false,
        month: Month,
        day: days,
        show: true,
        day: day,
      })
    );
  }

  function deletelist(id) {
    SetListDatas(
      ListDatas.filter((element) => {
        return element.id !== id;
      })
    );
    //id값이 같으면 제거
  }

  return (
    <div>
      <GetList Addlist={Addlist} />
      <div>{list}</div>
      {/* <List /> */}
    </div>
  );
}
export default Main;
