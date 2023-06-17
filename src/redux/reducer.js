import { ADD_TODO,DELETE_TODO,COMPLETE_TODO, UNCOMPLETE_TODO } from "./constants";

initialState=[];

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return [...state.filter((item) => item.currTime!== action.payload)];


        case COMPLETE_TODO:

            return [...state.map((item) => {
                temp={...item};
                if (item.currTime === action.payload) {
                    temp.completed= true;
                }
                return temp;
            })];
        

        case UNCOMPLETE_TODO:
            return [...state.map((item) => {
                temp={...item};
                if (item.currTime === action.payload) {
                    temp.completed= false;
                }
                return temp;
            })];

        default:
            return state;
    }
}



// const tempunc = (arr,action) => {
//     const tempArr = [...arr.map((item) => {
//         if(item.currTime === action.paylod){
//             item.completed = true
//         }
//         return item;
//     })]
//     return tempArr;
// }