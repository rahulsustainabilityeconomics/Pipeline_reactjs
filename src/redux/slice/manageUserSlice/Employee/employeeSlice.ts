import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Module {
    moduleName:string,
    accessType:string
}

interface EmployeeDetails {
    fname: string,
    email: string,
    role: string,
    module_access: Module[]
}


interface Employee{
    employeeData : EmployeeDetails[]
}

const initialState: Employee ={
    employeeData: []
}
const employeeSlice =createSlice({
    name: "addEmployee",
    initialState,
    reducers:{
        addEmployee:(state, action: PayloadAction<EmployeeDetails>)=>{
            state.employeeData.push(action.payload)
        },
        updateEmployee:(state, action: PayloadAction<EmployeeDetails>)=>{
            state.employeeData = state.employeeData.filter(employee => employee.email !== action.payload.email)
            state.employeeData.push(action.payload);
        
        },
        removeEmployee:(state, action: PayloadAction<string>)=>{
            state.employeeData = state.employeeData.filter(employee => employee.email !== action.payload)
        },
        addListEmployee:(state,action:PayloadAction<EmployeeDetails[]>)=>{
            state.employeeData=[...state.employeeData, ...action.payload]
        },
    },
});

export const { addEmployee , removeEmployee, addListEmployee,updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;