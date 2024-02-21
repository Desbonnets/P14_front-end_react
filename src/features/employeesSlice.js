import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        loading: false,
        employees: [],
        error: null,
    },
    reducers: {
        removeEmployees(state) {
            state.employees = [];
        },
        addEmployee(state, action) {
            state.employees.push(action.payload);
        },
    },
});

export const { removeEmployees, addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
