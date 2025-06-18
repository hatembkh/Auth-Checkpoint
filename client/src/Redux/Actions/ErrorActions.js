import { CLEARERROR, HANDLEERROR } from "../ActionTypes/errorActionTypes"

export const handleError = (msg)=>async(dispatch)=>{

    const id = Math.random()
    
    dispatch(
        {
            type: HANDLEERROR,
            payload : {msg,id}
        }
    )
    setTimeout(() => {
        dispatch(
            {
                type : CLEARERROR,
                payload : id
            }
        )
    }, 6000);
}