import React from 'react';
import FilterForm from './FilterForm';
import PerformanceChart from './PerformanceChart';
import DepartmentBarChart from './DepartmentBarChart';

function Dashboard() {
  return (
    <div className="p-4">
      <FilterForm />
      <div className="mt-6">
        <PerformanceChart />
      </div>
      <div className="mt-6">
        <DepartmentBarChart />
      </div>
    </div>
  );
}

export default Dashboard;
