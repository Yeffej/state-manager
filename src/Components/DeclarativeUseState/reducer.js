// Create Actions Types:
const actionsTypes = {
    ERROR: "error",
    LOADING: "loading",
    TYPING: "typing",
    UNCHECK: "uncheck",
    RESET: "reset",
    DELETE: "delete",
    CHECKED: "checked"
}

// Create a Reducer
const reducerObj = (state, payload) => ({
    [actionsTypes.ERROR]: {
        ...state,
        loading: false,
        error: true
    },
    [actionsTypes.LOADING]: {
        ...state,
        loading: true
    },
    [actionsTypes.TYPING]: {
        ...state,
        codeValue: payload
    },
    [actionsTypes.UNCHECK]: {
        ...state,
        checked: false
    },
    [actionsTypes.CHECKED]: {
        ...state,
        loading: false,
        error: false,
        checked: true
    },
    [actionsTypes.RESET]: {
        ...state,
        deleted: false
    },
    [actionsTypes.DELETE]: {
        ...state,
        deleted: true,
        checked: false,
        codeValue: ""
    }
})

function reducer(state, action) {
    const obj = reducerObj(state, action.payload)
    if(obj[action.type]) {
        return obj[action.type]
    }

    return state
}

export  { reducer, actionsTypes };
