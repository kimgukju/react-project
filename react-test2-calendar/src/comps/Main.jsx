import Calendar from "react-calendar"
import GetList from "../comps/GetList"
import Fotter from "../comps/Fotter"
import { useState } from "react"
import List from "./List";

function Main(props) {

    const [ListDatas,SetListDatas] = useState([
        {id:0,
         text:"과제하기 싫다",
         clear:false,
         show:true,
         day:"8/10"
        },
        {id:1,
         text:"빈둥대고 싶다",
          clear:false,
          show:true,
          day:"8/10"
        }
    ]);
    
    var list;
    list = ListDatas.map((info)=>(<List key={info.id} state={info}></List>));
    let id=2;

    function Addlist(event){
        var value=event.target.value;//value가져오기
        if(event.keyCode!=13 || value=="") //enter키를 입력했을 때에 list추가
            return;

        event.target.value="";//input창 비우기
        var date=new Date();//날짜 설정
        var day=date.getMonth()+1+"/"+date.getDate(); //월은 1월이 0으로 나오기때문에 +1이 필요함
        SetListDatas(ListDatas.concat({id:id++,text:value,clear:false,show:true,day:day}));
        //id값을 증가시켜주면서 해야 key값의 오류 제거
        //clear여부는 나중에 추가할예정
    }

    return(
        <div>
            <Calendar />
            <GetList Addlist={Addlist}/>
            <div>
                {list}
            </div>
            <Fotter />

        </div>
    )

}
export default Main