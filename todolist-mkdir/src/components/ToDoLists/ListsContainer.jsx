import { connect } from "react-redux";
import { getLists, postList, deleteListThunk, renameTitleThunk } from "../../redux/todo-reducer";
import Lists from "./Lists";

const mapStateToProps = (state) => {
    return{
        lists: state.toDoPage.lists,
        isFetching: state.toDoPage.isFetching
    }
}
 
export default connect(mapStateToProps, {
    getLists,
    postList,
    deleteList: deleteListThunk,
    renameTitle: renameTitleThunk
}) (Lists);