import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILED, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILED } from "../constants/constants"
import axios from 'axios';

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get("/api/products");
        console.log(data);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch(error) {
        dispatch({type: PRODUCT_LIST_FAILED, payload: error.message });
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await axios.get("/api/products/" + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch(error) {
        dispatch({ type: PRODUCT_DETAILS_FAILED, payload: error.message });
    }
}

export { listProducts, detailsProduct }