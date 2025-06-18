import { CLEARERROR, HANDLEERROR } from "../ActionTypes/errorActionTypes"

const initiialState = []

const ErrorReducer = (state = initiialState, action)=>{
    switch (action.type) {
        case HANDLEERROR : return [...state , action.payload]
        case CLEARERROR : return state.filter((el)=> el.id != action.payload)
        default: return state
    }
}

export default ErrorReducer