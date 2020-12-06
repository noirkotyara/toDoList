import { connect } from "react-redux";
import { getLists, postList, deleteListThunk, renameTitleThunk, changeOrderThunk } from "../../redux/todo-reducer";
import { getTasksThunk, postTasksThunk, deleteTaskThunk, updateTaskThunk, reoderTaskThunk } from "../../redux/todoTasks-reducer";
import Lists from "./Lists";

const mapStateToProps = (state) => {
    return{
        lists: state.toDoPage.lists,
        isFetching: state.toDoPage.isFetching,
        tasks: state.toDoTasksPage.tasks
    }
}


export default connect(mapStateToProps, {
    getLists,
    postList,
    deleteList: deleteListThunk,
    renameTitle: renameTitleThunk,
    getTasks: getTasksThunk,
    changeOrder: changeOrderThunk,
    postTasks: postTasksThunk,
    deleteTask: deleteTaskThunk,
    updateTask: updateTaskThunk,
    reoderTask: reoderTaskThunk
})(Lists);