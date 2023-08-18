import PropTypes from "prop-types";
import "../css/List.css";

List.propTypes = {
  state: PropTypes.object,
};

function List(props) {
  const { element, itemComplete, deletelist } = props;

  const compClickHandler = (e) => {
    alert("완료?");
    alert("응 수고 ㅇㅇ");
  };

  const deleteClickHandler = (e, id) => {
    alert("삭제?");
  };

  const state = props.state;
  return (
    <>
      <div className="list">
        <div className="delete" onClick={(e) => deleteClickHandler(e)}>
          &times;
        </div>
        <div className="content">{state.text}</div>
        <div className="complete" onClick={(e) => compClickHandler(e)}>
          &#x2713;
        </div>
      </div>
    </>
  );
}
export default List;
