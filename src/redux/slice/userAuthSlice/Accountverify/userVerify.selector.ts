import { createSelector } from "reselect";
import { RootState } from "../../../store";

//  create base selector for reducer
const selectVerifyDetailsStore = (state: RootState) => state.userLogin;

export const selectuserverifyResponse = createSelector(
    [selectVerifyDetailsStore],
    (verifyDetailsStore) => verifyDetailsStore.response
)

export const selectuserverifyLoading = createSelector(
    [selectVerifyDetailsStore],
    (verifyDetailsStore) => verifyDetailsStore.isLoading
)
