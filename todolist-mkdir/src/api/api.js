import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    headers: { 'API-KEY': 'ebd28442-c10f-47c7-b19b-27d6fc3e2b96' }
});


export const authAPI = {
    isAuthMe() {
        return instance.get(`/auth/me`)
            .then(response => response.data);
    },
    logIn(email, password, rememberMe) {

        return instance.post(`/auth/login`, { email, password, rememberMe })
            .then(response => response.data);
    },
    logOut() {
        return instance.delete(`/auth/login`)
            .then(response => response.data);
    }
}

export const toDoAPI = {
    getToDoLists(){
        return instance.get(`/todo-lists`)
            .then(response => response.data);
    },
    postToDoLists(title){
        return instance.post(`/todo-lists`, {title})
            .then(response => response.data);
            //resultCode messages[]
            // data -> item:{id title addedDate order}
    },
    renameToDoList(todolistId, title){
        return instance.put(`/todo-lists/${todolistId}`, {title})
            .then(response => response.data);
            //check response
    },
    deleteToDoList(todolistId){
        return instance.delete(`/todo-lists/${todolistId}`)
            .then(response => response.data);
            //resultCode messages[] data{}
    },
    reorderToDoList(todolistId, putAfterItemId){
        //putAfterItemId: 'string'
        return instance.put(`/todo-lists/${todolistId}/reorder`, {putAfterItemId: putAfterItemId})
            .then(response => response.data);
            //resultCode messages[] data{}
    }
}