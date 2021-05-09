const filter = (state = "", { type, payload }) => {
    switch (type) {
        case "SET_FILTER_STATUS":
            return payload
        default:
            return state
    }
}

export default filter