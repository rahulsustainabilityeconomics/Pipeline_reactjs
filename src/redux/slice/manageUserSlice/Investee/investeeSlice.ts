import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InvesteeDetails {
    name: string,
    email: string,
    company: string,
    isin:string
}


interface Investee{
    investeeData : InvesteeDetails[]
}

const initialState: Investee ={
    investeeData: []
}
const investeeSlice =createSlice({
    name: "addInvestee",
    initialState,
    reducers:{
        addInvestee:(state, action: PayloadAction<InvesteeDetails>)=>{
            state.investeeData.push(action.payload)
        },
        removeInvestee:(state, action: PayloadAction<string>)=>{
            state.investeeData = state.investeeData.filter(investee => investee.email !== action.payload)
        },
        updateInvestee:(state, action: PayloadAction<InvesteeDetails>)=>{
            state.investeeData = state.investeeData.filter(investee => investee.email !== action.payload.email)
            state.investeeData.push(action.payload);
        },
    },
});

export const { addInvestee , removeInvestee, updateInvestee } = investeeSlice.actions;
export default investeeSlice.reducer;