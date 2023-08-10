import Proptypes from 'prop-types'

List.propTypes = {
    state:Proptypes.object
}

function List(props) {
    const state = props.state;
    return (
        <div>
            {state.text}
        </div>
    )
}
export default List;