import api from '../../../../api';
import { createSlice, createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit';
// iniitial state
import { initialStateApi } from '../../../utils';

//  payload type definition
type FormData = {
    email?: string
    verificationCode?: string
    newPassword?:string
}

export const resetOtpapi: AsyncThunk<any, FormData, {}> =
    createAsyncThunk(
        'resetpasswordotpdetails',
        async ({ email, verificationCode,newPassword }, { rejectWithValue }) => {
            try {
                const response = await fetch(
                    api.config.resetotppassworddetails(),
                    api.http.postNoAuth({ email, verificationCode,newPassword })
                )
                const result = await api.afterFetchHandlers.parseContent(response, api.http.postNoAuth(email, verificationCode,newPassword))
                return result;
            }
            catch (error) {
                rejectWithValue(error)
                throw error
            }
        }
    )


// User Details
const resetOtpapiSlice = createSlice({
    name: "resetPasswordOtpDetails",
    initialState: initialStateApi,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resetOtpapi.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(resetOtpapi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
            })
            .addCase(resetOtpapi.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorResponse = action.error;
            })
    },
});

export default resetOtpapiSlice.reducer;


