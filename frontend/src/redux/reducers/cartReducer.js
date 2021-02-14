import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../actions/cartActions'

const Items = [
  {
    title: 'T-Shirt',
    imageUrl: {
      front: '/assets/cctv-assets/front.jpg',
      back: '/assets/cctv-assets/back.jpg'
    },
    id: 0,
    price: 69
  },
  {
    title: 'T-Shirt',
    imageUrl: {
      front: '/assets/cctv-assets/front.jpg',
      back: '/assets/cctv-assets/back.jpg'
    },
    id: 1,
    price: 69
  },
  {
    title: 'T-Shirt',
    imageUrl: {
      front: '/assets/cctv-assets/front.jpg',
      back: '/assets/cctv-assets/back.jpg'
    },
    id: 2,
    price: 69
  },
  {
    title: 'T-Shirt',
    imageUrl: {
      front: '/assets/cctv-assets/front.jpg',
      back: '/assets/cctv-assets/back.jpg'
    },
    id: 3,
    price: 69
  },
  {
    title: 'T-Shirt',
    imageUrl: {
      front: '/assets/cctv-assets/front.jpg',
      back: '/assets/cctv-assets/back.jpg'
    },
    id: 4,
    price: 69
  },
  {
    title: 'T-Shirt',
    imageUrl: {
      front: '/assets/cctv-assets/front.jpg',
      back: '/assets/cctv-assets/back.jpg'
    },
    id: 5,
    price: 69
  }
]

const initState = {
  items: Items,
  addedItems: [],
  total: 0
}

const cartReducer = (state = initState, action) => {
  const addedItem = state.items[action.id];
  switch (action.type) {
    case ADD_TO_CART:

      const existed_item = state.addedItems.find(item => action.id === item.id)

      if (existed_item) {
        addedItem.quantity += 1
        return {
          ...state,
          total: state.total + addedItem.price
        }
      } else {
        addedItem.quantity = 1
        const newTotal = state.total + addedItem.price
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        }
      };

    case REMOVE_ITEM:
      const itemToRemove = state.addedItems.find(item => action.id === item.id)
      const new_items = state.addedItems.filter(item => action.id !== item.id)
      console.log('new_items', new_items)
      const newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
      addedItem.quantity = 0
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }

    case ADD_QUANTITY:
      addedItem.quantity += 1
      const newTotalAdd = state.total + addedItem.price
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: newTotalAdd
      }
    case SUB_QUANTITY:

      if (addedItem.quantity === 1) {
        const new_items = state.addedItems.filter(item => item.id !== action.id)
        const newTotal = state.total - addedItem.price
        return {
          ...state,
          addedItems: new_items,
          total: newTotal
        }
      } else {
        addedItem.quantity -= 1
        const newTotal = state.total - addedItem.price
        return {
          ...state,
          addedItems: [...state.addedItems],
          total: newTotal
        }
      }

    default:
      return state
  }
}

export default cartReducer