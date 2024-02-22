import api from "../../../api";
import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
// iniitial state
import { initialStateApi } from "../../utils";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
//  payload type definition
interface Module {
  moduleName: string;
  modulePlan: string;
}
type addToCartDatatype = {
  sector: string;
  items: Module[];
};
type removeFromCartDataType = {
  sector: string;
  moduleNames: string[];
};

type getCartDetails = {
  item?: object;
};

type CheckoutDataType = {
  email: string;
  name: string;
  cart?: object;
};

export const insertCartDetails: AsyncThunk<any, addToCartDatatype, {}> =
  createAsyncThunk(
    "cartdetails",
    async ({ sector, items }, { rejectWithValue }) => {
      try {
        const response = await fetch(
          api.config.addtocart(),
          api.http.post({ sector, items })
        );
        const result = await api.afterFetchHandlers.parseContent(
          response,
          api.http.post({ sector, items })
        );
        return result;
      } catch (error) {
        rejectWithValue(error);
        throw error;
      }
    }
  );
export const getCartDetails: AsyncThunk<any, null, {}> = createAsyncThunk(
  "getcartdetails",
  async () => {
    try {
      const response = await fetch(api.config.cartdetails(), api.http.get());
      const result = await api.afterFetchHandlers.parseContent(
        response,
        api.http.get()
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
);

export const getModuleDetails: AsyncThunk<any, null, {}> = createAsyncThunk(
  "getmoduledetails",
  async () => {
    try {
      const response = await fetch(api.config.moduledetails(), api.http.get());
      const result = await api.afterFetchHandlers.parseContent(
        response,
        api.http.get()
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
);

export const removeCartDetails: AsyncThunk<any, removeFromCartDataType, {}> =
  createAsyncThunk(
    "removefromcart",
    async ({ sector, moduleNames }, { rejectWithValue }) => {
      try {
        const response = await fetch(
          api.config.removefromcart(),
          api.http.post({ sector, moduleNames })
        );
        const result = await api.afterFetchHandlers.parseContent(
          response,
          api.http.post({ sector, moduleNames })
        );
        return result;
      } catch (error) {
        rejectWithValue(error);
        throw error;
      }
    }
  );

export const CheckoutCartDetails: AsyncThunk<any, null, {}> = createAsyncThunk(
  "checkoutcart",
  async () => {
    try {
      const response = await fetch(api.config.checkout(), api.http.post());
      const result = await api.afterFetchHandlers.parseContent(
        response,
        api.http.post()
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
);

const cartDetailsSlice = createSlice({
  name: "cartdetails",
  initialState: initialStateApi,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(insertCartDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(insertCartDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
      })
      .addCase(insertCartDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorResponse = action.error;
      });
  },
});

export default cartDetailsSlice.reducer;
