import api from '../../../../api';
import { createSlice, createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit';
// iniitial state
import { initialStateApi } from '../../../utils';

//  payload type definition
type payloadType = {
    fname?: string
    lname?: string
    email?: string
    company_name?:string
    confirmPassword?: string
    password?: string
}


export const signupDetails: AsyncThunk<any, payloadType, {}> =
    createAsyncThunk(
        'signupDetails',
        async ({ fname, lname, email, company_name, confirmPassword, password }, { rejectWithValue }) => {
            try {
                const response = await fetch(
                    api.config.signupdetails(),
                    api.http.postNoAuth({ fname, lname, email,company_name, confirmPassword, password })
                )
                const result = await api.afterFetchHandlers.parseContent(response, api.http.post(fname, lname, email,company_name, confirmPassword, password))
                return result;
            } catch (error) {
                rejectWithValue(error);
                throw error;
            }
        }
    )


// User Details
const signupSlice = createSlice({
    name: "userSignupDetails",
    initialState: initialStateApi,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signupDetails.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(signupDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
            })
            .addCase(signupDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorResponse = action.error;
            })
    },
});

export default signupSlice.reducer;
