import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEmployees } from './redux/slices/employeeSlice';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
