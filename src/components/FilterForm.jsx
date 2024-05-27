// src/components/FilterForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../redux/slices/filtersSlice';

function FilterForm() {
  const dispatch = useDispatch();
  const [department, setDepartment] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateFilters({ department, startDate, endDate }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="p-2 border border-gray-300 rounded ml-2"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Apply Filters
      </button>
    </form>
  );
}

export default FilterForm;
