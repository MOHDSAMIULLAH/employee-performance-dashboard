// src/redux/slices/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    department: '',
    startDate: '',
    endDate: '',
  },
  reducers: {
    updateFilters(state, action) {
      const { department, startDate, endDate } = action.payload;
      state.department = department;
      state.startDate = startDate;
      state.endDate = endDate;
    },
  },
});

export const { updateFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
