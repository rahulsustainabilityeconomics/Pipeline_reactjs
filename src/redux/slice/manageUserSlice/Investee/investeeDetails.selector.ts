import { createSelector } from "reselect";
import { RootState } from "../../../store";

//  create base selector for reducer
const selectInvesteeDetailsStore = (state: RootState) => state.userLogin;

export const selectInvesteeResponse = createSelector(
    [selectInvesteeDetailsStore],
    (investeeDetailsStore) => investeeDetailsStore.response
)
export const selectInvesteeLoading = createSelector(
    [selectInvesteeDetailsStore],
    (investeeDetailsStore) => investeeDetailsStore.isLoading
)