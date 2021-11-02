export const reducer = (state, action) => {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                loading: action.payLoad
            }
        case "alerts":
            return {
                ...state,
                alerts: action.payLoad
            }
        case "loggedIn":
            return {
                ...state,
                loggedIn: action.payLoad
            }
        case "id":
            return {
                ...state,
                id: action.payLoad
            }
        case "name":
            return {
                ...state,
                name: action.payLoad
            }
        case "email":
            return {
                ...state,
                email: action.payLoad
            }
        case "notes":
            return {
                ...state,
                notes: action.payLoad
            }
        default: return state
    }
}