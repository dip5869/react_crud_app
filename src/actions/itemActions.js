import { ADD_ITEM, GET_ITEM, ITEM_LOADING } from './types'
import axios from 'axios'

export const setItemLoading = () => {
    return {
        type : ITEM_LOADING
    }
}

export const getItems = () => dispatch => {

    console.log('action here')

    dispatch(setItemLoading())
    axios
        .get('http://localhost:3000/getdata')
        .then(res => 
            dispatch({
                type : GET_ITEM,
                payload : res.data
            }))
}


// export const addItem = (todo) => dispatch => {
//     axios
//         .post('/postdata', todo)
//         .then(res => 
//                 dispatch({
//                     type : ADD_ITEM,
//                     payload : res.data
//                 })
//             )
// }


// export const deleteTodo = (id) => dispatch => {
//     axios
//         .delete(`/api/todo/${id}`)
//         .then(res => 
//                 dispatch({
//                     type : DELETE_TODO,
//                     payload : id
//                 })
//             )
// }