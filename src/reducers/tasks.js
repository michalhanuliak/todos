const DEFAULT_STATE = {
    isLoading: true,
    tasks: []
}

const tasks = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case "START_FETCHING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_TASKS":
            return {
                isLoading: false,
                tasks: payload
            }
        case "CREATE_TASK":
            return {
                isLoading: false,
                tasks: payload
            }
        case "UPDATE_TASK":
            return {
                ...state,
                tasks: payload
            }
        case "DELETE_TASK":
            return {
                ...state,
                tasks: payload
            }
        case "CHANGE_TASK_STATUS":
            return {
                ...state,
                tasks: payload
            }
        default:
            return state
    }
}

export default tasks