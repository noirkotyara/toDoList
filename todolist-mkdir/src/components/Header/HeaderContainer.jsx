import { connect } from "react-redux"
import Header from "./Header"

const mapStateToProps = (state) => {
    return{
        isFetching: state.toDoPage.isFetching
    }
}

export default connect(mapStateToProps, {

})
(Header);