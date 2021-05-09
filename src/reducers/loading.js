const loading = (state = true, { type }) => {
    switch (type) {
        case "SET_LOADING":
            return true
        case "DISABLE_LOADING":
            return false
        default:
            return state
    }
}

export default loading