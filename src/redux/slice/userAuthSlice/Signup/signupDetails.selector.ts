import { createSelector } from "reselect";
import { RootState } from "../../../store";

//  create base selector for reducer
const selectSignUpDetailsStore = (state: RootState) => state.signupDetails;

export const selectsignupResponse = createSelector(
    [selectSignUpDetailsStore],
    (signupDetailsStore) => signupDetailsStore.response
)
export const selectsignupLoading = createSelector(
    [selectSignUpDetailsStore],
    (signupDetailsStore) => signupDetailsStore.isLoading
)