import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAIL,
  } from './productActionsTypes';

  import {fetchMockProduct} from '../utils/fetchMockHelper';
  
  export const fetchProduct = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_PRODUCT_REQUEST });
      try {
        const data = fetchMockProduct();
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_PRODUCT_FAIL, payload: error.message });
      }
    };
  };