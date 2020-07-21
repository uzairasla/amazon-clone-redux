import { data } from "../data/data";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "../actions/actionTypes";

const initialCart = {
  cartItems: data,
  addedItems: [],
  total: 0,
};
const checkoutReducer = (state = initialCart, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.cartItems.find((item) => item.id === action.id);
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      console.log("item added to cart");
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      console.log(addedItem);

      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    newTotal = parseFloat(newTotal.toFixed(2));
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.cartItems.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    newTotal = parseFloat(newTotal.toFixed(2));
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.cartItems.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      newTotal = parseFloat(newTotal.toFixed(2));
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      newTotal = parseFloat(newTotal.toFixed(2));
      return {
        ...state,
        total: newTotal,
      };
    }
  } else {
    return state;
  }
};
export default checkoutReducer;
