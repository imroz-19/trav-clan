import React, { useState, useEffect } from 'react';
import getList from './services/customers';

import CustomersList from './components/CustomersList';
import Pagination from './components/Pagination';

const App = () => {
  const [customerList, setCustomerList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage] = useState(4);

  useEffect(() => {
    getList().then(res => {
      setCustomerList(res);
    })
  }, [])

  const listLastIdx = currentPage * listPerPage;
  const listFirstIdx = listLastIdx - listPerPage;

  const currentLists = customerList.slice(listFirstIdx, listLastIdx);

  const handlePagination = (page) => {
    setCurrentPage(page)
  }

  return(
    <div>
      <CustomersList customerList={currentLists}/>
      <Pagination  
        listsPerPage={listPerPage} 
        totalList={customerList.length}
        onPageChange={handlePagination}
      />
    </div>
  )
}

export default App;