import api from '../../../../api';
import { createSlice, createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit';
// iniitial state
import { initialStateApi } from '../../../utils';

//  payload type definition
type FormData = {
    email: string;
    password: string;
    newPassword: string;
}

export const changePasswordapi: AsyncThunk<any, FormData, {}> =
    createAsyncThunk(
        'changepassworddetails',
        async ({ email,password,newPassword }, { rejectWithValue }) => {
            try {
                const response = await fetch(
                    api.config.changepassworddetails(),
                    api.http.postNoAuth({ email,password,newPassword })
                )
                const result = await api.afterFetchHandlers.parseContent(response, api.http.postNoAuth({email,password,newPassword}))
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
    name: "changePasswordDetails",
    initialState: initialStateApi,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(changePasswordapi.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(changePasswordapi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
            })
            .addCase(changePasswordapi.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorResponse = action.error;
            })
    },
});

export default userLoginSlice.reducer;


