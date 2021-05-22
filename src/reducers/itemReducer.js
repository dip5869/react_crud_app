import { ADD_ITEM, GET_ITEM, ITEM_LOADING } from '../actions/types'

const initialState = {
    items: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEM:
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEM_LOADING:
            return {
                ...state,
                loading: true
            }
        // case DELETE_TODO:
        //     return {
        //         ...state,
        //         items : state.items.filter(todo => todo._id != action.payload)
        //     }
        default:
            return state
    }
}