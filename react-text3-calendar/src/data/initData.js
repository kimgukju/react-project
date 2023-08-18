import moment from "moment";

const initData = () => {
  return {
    id: null,
    sdate: moment().format("YYYY[-]MM[-]DD"),
    stime: moment().format("HH:ss:mm"),
    content: "",
    compelte: false,
  };
};

const func1 = () => {};
const func2 = () => {};
const func3 = () => {};

export { initData, func1, func2, func3 };