
import {FETCH_DATA,DELETE_DATA} from "./../actions/types";

const initialState = {
    items:[],
    item:{}
};

export default (state = initialState, action) => {
    switch (action.type){
        case FETCH_DATA:
            return{
                ...state,
                items:action.payload
            };
        case DELETE_DATA:
            return state.items.data.filter((data,index) =>  {
                return index !== action.index
            });
        default:
            return state;
    }
}