
import api from '../../../../api';
import { createSlice, createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit';
// iniitial state
import { initialStateApi } from '../../../utils';

//  payload type definition
type payloadType = {
    email?: string
    code?: string
}

export const insertverifydetails: AsyncThunk<any, payloadType, {}> =
    createAsyncThunk(
        'verifydetails',
        async ({ email, code }, { rejectWithValue }) => {
            try {
                const response = await fetch(
                    api.config.userverifydetails(),
                    api.http.post({ email, code })
                )
                const result = await api.afterFetchHandlers.parseContent(response, api.http.post(email, code))
                
                return result;
            }
            catch (error) {
                rejectWithValue(error)
                throw error
            }
        }
    )


// User Details

const userVericationSlice = createSlice({
    name: "userVerify",
    initialState: initialStateApi,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(insertverifydetails.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(insertverifydetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
            })
            .addCase(insertverifydetails.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorResponse = action.error;
            })
    },
});

export default userVericationSlice.reducer;
