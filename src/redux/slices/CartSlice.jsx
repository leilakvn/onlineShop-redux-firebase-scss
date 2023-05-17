import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0, //gheymate kole kharidha
  totalQuantity: 0, //tedad kole ajnas
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl, //nabayad esmash image bezari
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),0
      );
      console.log(state.totalAmount);
      console.log(newItem);
      console.log("****", state.cartItems);
    },
    deleteItem: (state, action) => {
      const { id } = action.payload;
      console.log("id", id);
      const existingItem = state.cartItems.find((item) => item.id === id);
      console.log("existing", existingItem);
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );
      }
    },
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;
