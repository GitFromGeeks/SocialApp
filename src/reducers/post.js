import {SET_POST,ERROR_POST} from "../action/action.types"


const initialState={
    posts:null,
    loading:true,
    error:false,
}

export default (State=initialState,action)=>{
    switch (action.type) {
        case SET_POST:
            return {
                ...State,
                posts:action.payload,
                loading:false,
                error:false,
            }
        case ERROR_POST:
            return {
                ...State,
                error:true,
            }
        default:
            return State;
    }
}