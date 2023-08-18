import { useState } from "react";
import Calendar from "react-calendar";
import "../css/MyCalendar.css";
import moment from "moment";

const MyCalendar = (props) => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} onClickDay={props.setDays} />
      <div className="text date">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div>
    </div>
  );
};

export default MyCalendar;
