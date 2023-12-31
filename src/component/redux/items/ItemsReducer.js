import { ADD_ITEM } from "./itemsType";

const initialState = {
    item:"",
    quantity:"",
    items: [],
    
}


 const addItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM :
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default:
            return state;
    }
}

export default addItemReducer