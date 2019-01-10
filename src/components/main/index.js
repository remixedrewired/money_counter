import React from 'react'
import Dashboard from '../dashboard/Dashboard';
import CreateItem from '../transactions/CreateItem';

const MainContent = () => {
  return (
    <div className="container">
      <CreateItem />
      <Dashboard />
    </div>
  )
}

export default MainContent