import { createSelector } from "reselect";
import { RootState } from "../../../store";

//  create base selector for reducer
const selectEmployeeDetailsStore = (state: RootState) => state.userLogin;

export const selectEmployeeResponse = createSelector(
    [selectEmployeeDetailsStore],
    (employeeDetailsStore) => employeeDetailsStore.response
)
export const selectEmployeeLoading = createSelector(
    [selectEmployeeDetailsStore],
    (employeeDetailsStore) => employeeDetailsStore.isLoading
)