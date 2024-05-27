import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employeeSlice';
import filtersReducer from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    filters: filtersReducer,
  },
});
