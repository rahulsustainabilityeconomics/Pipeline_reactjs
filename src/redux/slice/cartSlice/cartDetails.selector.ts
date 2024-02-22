import { createSelector } from "reselect";
import { RootState } from "../../store";

//  create base selector for reducer
const selectCartDetailsStore = (state: RootState) => state.cartApi;

export const selectuserverifyResponse = createSelector(
    [selectCartDetailsStore],
    (cartDetailsStore) => cartDetailsStore.response
)

export const selectuserverifyLoading = createSelector(
    [selectCartDetailsStore],
    (cartDetailsStore) => cartDetailsStore.isLoading
)
