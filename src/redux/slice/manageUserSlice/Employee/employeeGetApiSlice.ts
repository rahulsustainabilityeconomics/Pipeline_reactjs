import api from "../../../../api";
import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
// iniitial state
import { initialStateApi } from "../../../utils";


export const getEmployeeDetails: AsyncThunk<any,null,{}> = 
createAsyncThunk('getemployeedetails', 
async () => {
    try {
        const response = await fetch(
            api.config.getuserdetails(),
            api.http.get()
        )
        const result = await api.afterFetchHandlers.parseContent(response, api.http.get())
        return result;
    }
    catch (error) {
        throw error
    }
}    
)

const getEmployeeDetailsSlice = createSlice({
  name: "getemployeedetails",
  initialState: initialStateApi,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeeDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getEmployeeDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
      })
      .addCase(getEmployeeDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorResponse = action.error;
      });
  },
});

export default getEmployeeDetailsSlice.reducer;
