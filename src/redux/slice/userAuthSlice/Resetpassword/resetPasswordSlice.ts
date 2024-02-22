import api from '../../../../api';
import { createSlice, createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit';
// iniitial state
import { initialStateApi } from '../../../utils';

//  payload type definition
type OtpData = {
    email?: string
}

export const resetPasswordapi: AsyncThunk<any, OtpData, {}> =
    createAsyncThunk(
        'resetpassworddetails',
        async ({ email }, { rejectWithValue }) => {
            try {
                const response = await fetch(
                    api.config.resetpassworddetails(),
                    api.http.postNoAuth({ email })
                )
                const result = await api.afterFetchHandlers.parseContent(response, api.http.postNoAuth(email))
                return result;
            }
            catch (error) {
                rejectWithValue(error)
                throw error
            }
        }
    )


// User Details
const userLoginSlice = createSlice({
    name: "resetPasswordDetails",
    initialState: initialStateApi,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resetPasswordapi.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(resetPasswordapi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
            })
            .addCase(resetPasswordapi.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorResponse = action.error;
            })
    },
});

export default userLoginSlice.reducer;


