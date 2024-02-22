
import api from '../../../../api';
import { createSlice, createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit';
// iniitial state
import { initialStateApi } from '../../../utils';
import { useDispatch } from 'react-redux';

type investeeResendDatatype = {
    user:[],
}


export const investeeResendInvite: AsyncThunk<any, investeeResendDatatype, {}> =
    createAsyncThunk(
        'investeeresenddetails',
        async ({user}, { rejectWithValue }) => {
            try {
                const response = await fetch(
                    api.config.resendinvite(),
                    api.http.post({users:user})
                )
                const result = await api.afterFetchHandlers.parseContent(response, api.http.post({users:user}))
                return result;
            }
            catch (error) {
                rejectWithValue(error)
                throw error
            }
        }
    )

const investeeResendDetailsSlice = createSlice({
    name: "investeedetails",
    initialState: initialStateApi,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(investeeResendInvite.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(investeeResendInvite.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
            })
            .addCase(investeeResendInvite.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorResponse = action.error;
            })
    },
});

export default investeeResendDetailsSlice.reducer;
