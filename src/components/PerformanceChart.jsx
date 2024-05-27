// src/components/PerformanceChart.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';

function PerformanceChart() {
  const employees = useSelector((state) => state.employees.data);
  const filters = useSelector((state) => state.filters);
    console.log("filters", filters);

  const filteredEmployees = employees.filter((employee) => {
    const isWithinDateRange =
      ((!filters.startDate || new Date(employee.performance[0].date) >= new Date(filters.startDate)) &&
      (!filters.endDate || new Date(employee.performance[0].date) <= new Date(filters.endDate))) || 
      ((!filters.startDate || new Date(employee.performance[0].date) <= new Date(filters.startDate)) &&
      (!filters.endDate || new Date(employee.performance[2].date) >= new Date(filters.endDate))) ||
      ((!filters.startDate || new Date(employee.performance[2].date) >= new Date(filters.startDate)) &&
      (!filters.endDate || new Date(employee.performance[2].date) <= new Date(filters.endDate)));
    const isDepartmentMatch = filters.department ? employee.department === filters.department : true;

    console.log(((!filters.startDate || new Date(employee.performance[0].date) >= new Date(filters.startDate)) &&
    (!filters.endDate || new Date(employee.performance[0].date) <= new Date(filters.endDate))),"condn1");
    console.log(((!filters.startDate || new Date(employee.performance[0].date) >= new Date(filters.startDate)) &&
    (!filters.endDate || new Date(employee.performance[2].date) >= new Date(filters.endDate))),"condn2 ");
    console.log(((!filters.startDate || new Date(employee.performance[2].date) >= new Date(filters.startDate)) &&
    (!filters.endDate || new Date(employee.performance[2].date) <= new Date(filters.endDate))),"condn 3")
    
    
    return isWithinDateRange && isDepartmentMatch;
});
console.log(filteredEmployees,"filteredEmployees")


  const options = {
    title: {
      text: 'Employee Performance Over Time',
    },
    series: filteredEmployees.map((employee) => ({
      name: employee.name,
      data: employee.performance.map((metric) => metric.metric),
    })),
    xAxis: {
      categories: filteredEmployees[0] ? filteredEmployees[0].performance.map((metric) => metric.date) : [],
    },
    yAxis: {
      title: {
        text: 'Performance Metric',
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default PerformanceChart;
