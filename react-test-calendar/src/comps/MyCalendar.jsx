import { useState } from "react";
import Calendar from "react-calendar";
import "../css/MyCalendar.css";
import moment from "moment";

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);

  const { data } = useQuery(
    ["logDate", month],
    async () => {
      const result = await axios.get(`/api/healthLogs?health_log_type=DIET`);
      return result.data;
    },
    {
      onSuccess: (data) => {
        setMark(data);
        // ["2022-02-02", "2022-02-02", "2022-02-10"] 형태로 가져옴
      },
    }
  );

  return (
    <div>
      <Calendar
        onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
        value={value}
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        navigationLabel={null}
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html = [];
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<div className="dot"></div>);
          }
          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">
                {html}
              </div>
            </>
          );
        }}
      />
      <div className="text-gray-500 mt-4">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div>
    </div>
  );
};

export default MyCalendar;
