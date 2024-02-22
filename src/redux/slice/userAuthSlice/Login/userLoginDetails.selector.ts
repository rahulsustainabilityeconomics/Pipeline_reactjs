import { createSelector } from "reselect";
import { RootState } from "../../../store";

//  create base selector for reducer
const selectLoginDetailsStore = (state: RootState) => state.userLogin;

export const selectuserLoginResponse = createSelector(
    [selectLoginDetailsStore],
    (loginDetailsStore) => loginDetailsStore.response
)
export const selectuserLoginLoading = createSelector(
    [selectLoginDetailsStore],
    (loginDetailsStore) => loginDetailsStore.isLoading
)