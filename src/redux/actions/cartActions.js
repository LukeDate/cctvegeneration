
//ACTIONS ARE HERE --> SHOULD GO IN THEIR OWN FILES
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const SUB_QUANTITY = 'SUB_QUANTITY'
export const ADD_QUANTITY = 'ADD_QUANTITY'


//ACTION CREATORS ARE HERE
export const addToCart = (id) =>{
    return{
        type: ADD_TO_CART,
        id 
    }
}

export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const addQuantity = id => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const subQuantity = id => {
    return {
        type: SUB_QUANTITY,
        id
    }
}