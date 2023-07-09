const initialState ={
    items : [],
    isLoaded:false,
};
const pizzas = (state = initialState, action) =>{
    switch (action.type) {
        case "Set_pizzas" :
            return{
            ...state,
            items:action.payload,
            isLoaded: true
        };
        case "Set_loaded" :
            return{
            ...state,
            isLoaded: action.payload
        };
        default:
            return state
    }
};
export default pizzas;