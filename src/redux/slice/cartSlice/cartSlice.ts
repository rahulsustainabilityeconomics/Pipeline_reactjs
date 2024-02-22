import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Module {
  moduleName: string;
  modulePlan: string;
}
interface Cart {
  sector: string;
  items: Module[];
}
interface CartState {
  sectorcart: Cart[];
}
interface RemoveFromCartData {
  sector:string;
  moduleNames:string[];
}
const initialState: CartState = {
  sectorcart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      const existingSectorIndex = state.sectorcart.findIndex(
        (cart) => cart.sector === action.payload.sector
      );

      if (existingSectorIndex !== -1) {
        const mergedArray = action.payload.items.map(newItem => {
          const existingItem = state.sectorcart[existingSectorIndex].items.find(item => item.moduleName === newItem.moduleName);
        
          if (existingItem) {
            return { ...existingItem, modulePlan: newItem.modulePlan };
          } else {
            return newItem;
          }
        });
        state.sectorcart[existingSectorIndex].items.push(...mergedArray);
      } else {
        state.sectorcart.push(action.payload);
      }
    },
    addPlan: (state, action: PayloadAction<Cart>) => {
      // state.sectorcart = state.addedcart.filter((item)=>item.module!==action.payload.module)
      // state.addedcart.push(action.payload)
      //   state.items = state.items.filter(
      //     (item) => item.moduleName !== action.payload.items[0].moduleName
      //   );
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCartData>) => {
      const targetIndex = state.sectorcart.findIndex((cart) => cart.sector === action.payload.sector);
      if (targetIndex !== -1) {
        // Remove the specified module from the 'items' array within the object
        state.sectorcart[targetIndex].items = state.sectorcart[targetIndex].items.filter((item:Module) => item.moduleName !== action.payload.moduleNames[0]);
      }
    },
    updateCart: (state, action: PayloadAction<any>) => {
      state.sectorcart=action.payload
    },
  },
});

export const { addToCart, addPlan, removeFromCart, updateCart } =
  cartSlice.actions;
export default cartSlice.reducer;
