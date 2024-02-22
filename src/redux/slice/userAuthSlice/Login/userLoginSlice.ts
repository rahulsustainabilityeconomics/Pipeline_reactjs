import api from "../../../../api";
import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
// iniitial state
import { initialStateApi } from "../../../utils";

//  payload type definition
type payloadType = {
  email?: string;
  password?: string;
};

export const insertLoginDetailsapi: AsyncThunk<any, payloadType, {}> =
  createAsyncThunk(
    "insertLoginDetailsapi",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await fetch(
          api.config.logindetails(),
          api.http.postNoAuth({ email, password })
        );
        const result = await api.afterFetchHandlers.parseContent(
          response,
          api.http.postNoAuth(email, password)
        );
        localStorage.setItem("idToken", result?.result?.data?.idToken);
        return result;
      } catch (error) {
        rejectWithValue(error);
        throw error;
      }
    }
  );

export const logoutDetails: AsyncThunk<any, null, {}> = createAsyncThunk(
  "logoutdetails",
  async () => {
    try {
      const response = await fetch(api.config.logoutdetails(), api.http.post());
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

// User Details
const userLoginSlice = createSlice({
  name: "userLoginDetails",
  initialState: initialStateApi,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(insertLoginDetailsapi.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(insertLoginDetailsapi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
      })
      .addCase(insertLoginDetailsapi.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorResponse = action.error;
      });
  },
});

export default userLoginSlice.reducer;
