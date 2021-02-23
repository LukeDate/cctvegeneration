import { PRODUCT_DETAILS_FAILED, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/constants";

const productListReducer = (state= { products: [], loading: true }, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload.products }
        case PRODUCT_LIST_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
const productDetailsReducer = (state= { product: { product: {}}, loading: true, error: {} }, action) => {

    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, product: {} }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { productListReducer, productDetailsReducer }