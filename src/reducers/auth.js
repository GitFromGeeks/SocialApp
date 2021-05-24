import {SET_USER,IS_AUTHENTICATED} from "../action/action.types"


const initialState={
    uesr:null,
    loading:true,
    isAuthenticated:false
}


export default (State=initialState,action)=>{
    switch (action.type) {
        case SET_USER:
            return {
                ...State,
                uesr:action.payload,
                loading:false,
            }
        case IS_AUTHENTICATED:
            return {
                ...State,
                isAuthenticated:action.payload,
                loading:false,
            }
        default:
            return State;
    }
}