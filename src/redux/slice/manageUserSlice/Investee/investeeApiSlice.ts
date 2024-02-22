
import api from '../../../../api';
import { createSlice, createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit';
// iniitial state
import { initialStateApi } from '../../../utils';
import { useDispatch } from 'react-redux';

type addToCartDatatype = {
    fname: string,
    email: string,
    company_name: string,
    isin:string,
}

export const updateInvesteeDetails: AsyncThunk<any, addToCartDatatype, {}> =
  createAsyncThunk(
    "updateinvesteedetails",
    async ({ fname, email, company_name, isin }, { rejectWithValue }) => {
      try {
        const response = await fetch(
          api.config.updateinvestee(),
          api.http.post({ fname, email, company_name, isin })
        );
        const result = await api.afterFetchHandlers.parseContent(
          response,
          api.http.post(fname, email, company_name, isin)
        );
        return result;
      } catch (error) {
        rejectWithValue(error);
        throw error;
      }
    }
  );


export const insertInvesteeDetails: AsyncThunk<any, addToCartDatatype, {}> =
    createAsyncThunk(
        'investeedetails',
        async ({ fname,email,company_name,isin}, { rejectWithValue }) => {
            try {
                const response = await fetch(
                    api.config.addinvestee(),
                    api.http.post({ fname,email,company_name,isin })
                )
                const result = await api.afterFetchHandlers.parseContent(response, api.http.post(fname,email,company_name,isin))
                return result;
            }
            catch (error) {
                rejectWithValue(error)
                throw error
            }
        }
    )




const investeeDetailsSlice = createSlice({
    name: "investeedetails",
    initialState: initialStateApi,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(insertInvesteeDetails.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(insertInvesteeDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
            })
            .addCase(insertInvesteeDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorResponse = action.error;
            })
    },
});

export default investeeDetailsSlice.reducer;
