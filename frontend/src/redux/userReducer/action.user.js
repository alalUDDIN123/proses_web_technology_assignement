import axios from "axios";
import * as types from "./actionType.user";

const baseURL = "https://shy-sheath-dress-bat.cyclic.app/users"

const addUser = (payload) => async (dispatch) => {
    dispatch({ type: types.ADD_USER_REQUEST });
    try {
        const response = await axios.post(`${baseURL}/create`, payload)
        dispatch({ type: types.ADD_USER_SUCCESS, payload: response.data });
        return response.status
    } catch (error) {
        dispatch({ type: types.ADD_USER_FAILURE, payload: error })
    }
}


const getUsers = () => async (dispatch) => {
    dispatch({ type: types.GET_USER_SUCCESS });
    try {
        const response = await axios.get(`${baseURL}/get`);
        dispatch({ type: types.GET_USER_SUCCESS, payload: response.data })
        return response.status
    } catch (error) {
        dispatch({ type: types.GET_USER_FAILURE, payload: error })
    }
}

const updateUser = (id, payload) => async (dispatch) => {
    dispatch({ type: types.UPDATE_USER_REQUEST });
    try {
        const response = await axios.put(`${baseURL}/update/${id}`, payload)
        dispatch({ type: types.UPDATE_USER_SUCCESS, payload: response.data });
        return response.status
    } catch (error) {
        dispatch({ type: types.UPDATE_USER_FAILURE, payload: error })
    }
}


const deleteUser = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_USER_REQUEST });
    try {
        const response = await axios.delete(`${baseURL}/delete/${id}`);
        dispatch({ type: types.DELETE_USER_SUCCESS, payload: id });
        return response.status
    } catch (error) {
        dispatch({ type: types.DELETE_USER_FAILURE, payload: error })
    }
}

export { addUser, getUsers, updateUser, deleteUser }