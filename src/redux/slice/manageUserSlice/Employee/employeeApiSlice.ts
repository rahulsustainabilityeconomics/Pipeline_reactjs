import api from "../../../../api";
import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { initialStateApi } from "../../../utils";

interface Module {
  moduleName: string;
  accessType: string;
}

type addToCartDatatype = {
  fname: string;
  email: string;
  role: string;
  module_access: Module[];
};

type uploadEmployeeDetails = {
  file: File;
};

export const insertEmployeeDetails: AsyncThunk<any, addToCartDatatype, {}> =
  createAsyncThunk(
    "employeedetails",
    async ({ fname, email, role, module_access }, { rejectWithValue }) => {
      try {
        const response = await fetch(
          api.config.addemployee(),
          api.http.post({ fname, email, role, module_access })
        );
        const result = await api.afterFetchHandlers.parseContent(
          response,
          api.http.post(fname, email, role, module_access)
        );
        return result;
      } catch (error) {
        rejectWithValue(error);
        throw error;
      }
    }
  );

  export const updateEmployeeDetails: AsyncThunk<any, addToCartDatatype, {}> =
  createAsyncThunk(
    "updateemployeedetails",
    async ({ fname, email, role, module_access }, { rejectWithValue }) => {
      try {
        const response = await fetch(
          api.config.updateemployee(),
          api.http.post({ fname, email, role, module_access })
        );
        const result = await api.afterFetchHandlers.parseContent(
          response,
          api.http.post(fname, email, role, module_access)
        );
        return result;
      } catch (error) {
        rejectWithValue(error);
        throw error;
      }
    }
  );



  export const uploadEmployeeDetails: AsyncThunk<any, uploadEmployeeDetails, {}> =
  createAsyncThunk(
    "uploademployeedetails",
    async ({ file }, { rejectWithValue }) => {
      // let formdata = file;

      let form_data = new FormData();
      form_data.append("csv", file);

      try {
        const response = await fetch(
          api.config.uploademployee(),
          api.http.postForm(form_data)
        );
        const result = await api.afterFetchHandlers.parseContent(
          response,
          api.http.postForm(form_data)
        );
        return result;
      } catch (error) {
        rejectWithValue(error);
        throw error;
      }
    }
  );

const employeeDetailsSlice = createSlice({
  name: "employeedetails",
  initialState: initialStateApi,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(insertEmployeeDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(insertEmployeeDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
      })
      .addCase(insertEmployeeDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorResponse = action.error;
      });
  },
});

export default employeeDetailsSlice.reducer;
