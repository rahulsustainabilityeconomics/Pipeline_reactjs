import api from "../../../../api";
import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
// iniitial state
import { initialStateApi } from "../../../utils";

//  payload type definition
type payloadType = {
  email: string;
};

export const resendcode: AsyncThunk<any, payloadType, {}> = createAsyncThunk(
  "resendcode",
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch(
        api.config.resendcode(),
        api.http.post({ email })
      );
      const result = await api.afterFetchHandlers.parseContent(
        response,
        api.http.post(email)
      );
      return result;
    } catch (error) {
      rejectWithValue(error);
      throw error;
    }
  }
);

// User Details

const resendCodeSlice = createSlice({
  name: "resendCode",
  initialState: initialStateApi,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resendcode.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(resendcode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
      })
      .addCase(resendcode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorResponse = action.error;
      });
  },
});

export default resendCodeSlice.reducer;
