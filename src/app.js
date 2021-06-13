import React, { useState, useEffect } from 'react';
import getList from './services/customers';

import CustomersList from './components/CustomersList';

const App = () => {

  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    getList().then(res => {
      setCustomerList(res);
    })
  }, [])

  return(
    <div>
      <CustomersList customerList={customerList}/>
    </div>
  )
}

export default App;