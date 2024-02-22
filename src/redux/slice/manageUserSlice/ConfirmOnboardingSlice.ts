import api from '../../../api';
import { createSlice, createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit';
// iniitial state
import { initialStateApi } from '../../utils';

//  payload type definition
type FormData = {
    email: string;
    password: string;
    newPassword: string;
}

export const confirmemployeeonboarddetails: AsyncThunk<any, FormData, {}> =
    createAsyncThunk(
        'confirmemployeeonboarddetails',
        async ({ email,password,newPassword }, { rejectWithValue }) => {
                
            try {
                const response = await fetch(
                    api.config.confirmemployeeonboardingdetails(),
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
const employeeOnboardDetailsSlice = createSlice({
    name: "changePasswordDetails",
    initialState: initialStateApi,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(confirmemployeeonboarddetails.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(confirmemployeeonboarddetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
            })
            .addCase(confirmemployeeonboarddetails.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorResponse = action.error;
            })
    },
});

export default employeeOnboardDetailsSlice.reducer;


