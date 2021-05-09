import axios from "axios"

export const startFetching = () => {
    return {
        type: "START_FETCHING",
    }
}

export const getTasks = () => {
    return (dispatch) => {
        axios.get("/todos")
            .then(response => {
                dispatch({
                    type: "GET_TASKS",
                    payload: response.data
                })
            })
            .catch(err => alert(err))
    }
}

export const createTask = (description) => {
    return (dispatch, getState) => {
        const { tasks: { tasks } } = getState()
        const body = { text: description }
        axios.post("/todos/", body)
            .then(response => {
                dispatch({
                    type: "CREATE_TASK",
                    payload: [
                        ...tasks,
                        response.data
                    ]
                })
            })
            .catch(err => alert(err))
    }
}

export const updateTask = (description, id) => {
    return (dispatch, getState) => {
        const { tasks: { tasks } } = getState()
        const body = { text: description }
        axios.post(`/todos/${id}`, body)
            .then(({ data }) => {
                const updatedTasks = tasks.map(task => task.id === data.id ? data : task);
                dispatch({
                    type: "UPDATE_TASK",
                    payload: updatedTasks
                })
            })
            .catch(err => alert(err))
    }
}

export const deleteTask = (id) => {
    return (dispatch, getState) => {
        axios.delete(`/todos/${id}`).catch(err => alert(err));
        const { tasks: { tasks } } = getState()
        const updatedTasks = tasks.filter(task => task.id !== id)
        dispatch({
            type: "DELETE_TASK",
            payload: updatedTasks
        })
    }
}

export const changeTaskStatus = (id) => {
    return (dispatch, getState) => {
        const { tasks: { tasks } } = getState()
        const targetTaskIndex = tasks.findIndex(task => task.id === id)
        const statusUrl = tasks[targetTaskIndex].completed ? `/todos/${id}/incomplete` : `/todos/${id}/complete`
        axios.post(statusUrl).catch(err => alert(err))
        const updatedTasks = tasks.map(task => task.id === id ? {...task, completed: !task.completed } : task)
        dispatch({
            type: "CHANGE_TASK_STATUS",
            payload: updatedTasks
        })
    }
}