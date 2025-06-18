import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/authActionTypes"

const initiialState = {
    user : {},
    errors : []
}


const AuthReducer =(state = initiialState, action)=>{
    switch (action.type) {
        case REGISTER :
            localStorage.setItem('token', action.payload.token)
            return {...state, user : action.payload.newUser, errors:[]}

        case LOGIN : 
        localStorage.setItem('token', action.payload.token)
        return {...state , user : action.payload.found, errors : []}

        case CURRENT : return {...state, user : action.payload}

        case FAIL : return {...state, errors : action.payload, user:{}} 

        case LOGOUT :
        localStorage.removeItem('token')
        return {...state, user : {}, errors : []}
        default: return state
    }
}

export default AuthReducer