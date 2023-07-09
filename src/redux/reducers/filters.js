const initialState ={
    sortBy : {
        type:'popular',
        order:'desc'
    },
    category :null
}
const filters = (state = initialState, action) =>{
    if (action.type === 'Set_sort_by'){
        return{
            ...state,
            sortBy:action.payload
        }
    }
    if (action.type === 'Set_category'){
        return{
            ...state,
            category:action.payload
        }
    }
    return state
}
export default filters