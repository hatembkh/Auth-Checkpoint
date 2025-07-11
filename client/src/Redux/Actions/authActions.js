import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/authActionTypes"
import axios from "axios"
import { handleError } from "./ErrorActions"

export const register = (regUser, navigate) => async (dispatch) => {
    try {
        const res = await axios.post('/auth/Register', regUser)

        dispatch(
            {
                type: REGISTER,
                payload: res.data
            }
        )

        navigate('/Profil')
    } catch (error) {
        // dispatch(
        //     {
        //         type: FAIL,
        //         payload: error.response?.data.errors
        //     }
        // )
        error.response.data.errors.forEach(element => {
            dispatch( handleError(element.msg))
        });
    }
}

export const login = (logUser,navigate) => async (dispatch) => {
    try {
        const res = await axios.post('/auth/SignIn', logUser)

        dispatch(
            {
                type: LOGIN,
                payload: res.data
            }
        )

        navigate('/Profil')
    } catch (error) {
        dispatch(
            {
                type: FAIL,
                payload: error.response.data.errors
            }
        )
    }
}

export const current =()=>async(dispatch)=>{
    try {
        const config = {
            headers : {
                Authorized : localStorage.getItem('token')
            }
        }
        const res = await axios.get('/auth/currentUser',config )
        dispatch(
            {
                type: CURRENT,
                payload: res.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type: FAIL,
                payload: error.response.data.errors
            }
        )
    }
}

export const logout =()=>{
    return(
        {
            type: LOGOUT
        }
    )
}