import * as types from "./actionType.user";

const initialState = {
    users: [],
    isLoading: false,
    isError: false
}

const usersReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        // adding user
        case types.ADD_USER_REQUEST: {
            return { ...state, isLoading: true, isError: false };
        }
        case types.ADD_USER_SUCCESS: {
            return { ...state, isLoading: false, isError: false, users: [...state.users, payload] }
        }
        case types.ADD_USER_FAILURE: {
            return { ...state, isLoading: true, isError: true }
        }

        // getting all Users
        case types.GET_USER_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }

        case types.GET_USER_SUCCESS: {
            return { ...state, isLoading: false, isError: false, users: payload }
        }

        case types.GET_USER_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }

        // update the user
        case types.UPDATE_USER_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }

        case types.UPDATE_USER_SUCCESS: {
            let newData = state.users.map((item) => {
                return item._id === payload._id ? payload : item;
            })
            return { ...state, isLoading: false, isError: false, users: newData }
        }

        case types.UPDATE_USER_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }

        // deleting a user
        case types.DELETE_USER_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }

        case types.DELETE_USER_SUCCESS: {
            const filterUser = state.users.filter((item) => item._id !== payload)
            return { ...state, isLoading: false, isError: false, users: filterUser }
        }

        case types.DELETE_USER_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }

        // if none of the cases match 
        default: {
            return state;
        }
    }
}


export default usersReducer