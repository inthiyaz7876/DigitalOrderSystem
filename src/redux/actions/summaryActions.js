import axios from 'axios';
import * as C from '../constants/summaryConstants';

export const simpleAction = () => dispatch => {
    axios.get(`https://reqres.in/api/users?page=2`)
    .then(res => {
      const persons = res.data;
      dispatch({
        type: C.SIMPLE_ACTION,
        payload: persons
       })
    }) 
   }

   export const getItems = () => dispatch => {
    axios.get(`http://localhost:3002/posts`)
    .then(res => {
      const persons = res.data;
      dispatch({
        type: C.GET_ITEMS,
        payload: persons
       })
    }) 
   }

   export const getItemTypes = () => dispatch => {
  //   axios.get(`http://localhost:3002/itemType`)
  //   .then(res => {
  //     const persons = res.data;
  //     dispatch({
  //       type: C.GET_TYPE_ITEMS,
  //       payload: persons
  //      })
  //   }) 
   }

export const uploadFile = entries => {
  console.log("njsns", entries);
  return dispatch => {
    return axios.post('http://localhost:3002/posts', entries)
    .then(res => {
      alert("Item saved succefully..!");
    })
  }
}