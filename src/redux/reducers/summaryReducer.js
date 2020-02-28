import {  SIMPLE_ACTION, GET_ITEMS } from '../constants/summaryConstants';

const initialState = {
    products: {"id": 1, "name": "shaik"},
    errors: {},
    result: [],
    availableItems : []
  };

   const summaryReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case SIMPLE_ACTION:
        return {
          ...state,
          result: payload
        }
      case GET_ITEMS:
        return {
          ...state,
          availableItems: payload
        }
      default:
        return state;
    }
  };

  export default summaryReducer;
