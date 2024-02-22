
import api from '../../../../api';
import { createSlice, createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit';
import { initialStateApi } from '../../../utils';

type deleteEmployeeDatatype = {
    email: string
}


export const deleteEmployeeDetails: AsyncThunk<any, deleteEmployeeDatatype, {}> =
    createAsyncThunk(
        'employeedetails',
        async ({ email }, { rejectWithValue }) => {
            try {
                const response = await fetch(
                    api.config.deleteuser(),
                    api.http.post({email})
                )
                const result = await api.afterFetchHandlers.parseContent(response, api.http.post(email))
                return result;
            }
            catch (error) {
                rejectWithValue(error)
                throw error
            }
        }
    )


const employeeDeleteSlice = createSlice({
    name: "employeedelete",
    initialState: initialStateApi,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteEmployeeDetails.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(deleteEmployeeDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
            })
            .addCase(deleteEmployeeDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorResponse = action.error;
            })
    },
});

export default employeeDeleteSlice.reducer;
