import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';

function DepartmentBarChart() {
  const employees = useSelector((state) => state.employees.data);
  const filters = useSelector((state) => state.filters);

  const filteredEmployees = employees.filter((employee) => {
    const isWithinDateRange =
      (!filters.startDate || new Date(employee.performance[0].date) >= new Date(filters.startDate)) &&
      (!filters.endDate || new Date(employee.performance[employee.performance.length - 1].date) <= new Date(filters.endDate));
    const isDepartmentMatch = filters.department ? employee.department === filters.department : true;
    return isWithinDateRange && isDepartmentMatch;
  });

  const departmentPerformance = filteredEmployees.reduce((acc, employee) => {
    if (!acc[employee.department]) {
      acc[employee.department] = 0;
    }
    const totalPerformance = employee.performance.reduce((sum, record) => sum + record.metric, 0);
    acc[employee.department] += totalPerformance / employee.performance.length;
    return acc;
  }, {});

  const departments = Object.keys(departmentPerformance);
  const performanceMetrics = Object.values(departmentPerformance);

  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Average Department Performance',
    },
    xAxis: {
      categories: departments,
      title: {
        text: 'Departments',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Average Performance Metric',
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
    },
    series: [
      {
        name: 'Performance',
        data: performanceMetrics,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default DepartmentBarChart;
