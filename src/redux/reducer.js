import { ADD_TODO,DELETE_TODO,COMPLETE_TODO, UNCOMPLETE_TODO } from "./constants";

initialState=[
    {
        currTime: 12321321,
        title: 'First Item',
        text: "abc",
        completed: false
    },
    {
        currTime: 12324321,
        title: 'Second Item',
        text: "def",
        completed: true
    },
    {
        currTime: 12321121,
        title: 'Third Item',
        text: "ghi",
        completed: false
    },
];

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