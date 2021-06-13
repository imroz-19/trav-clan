import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const CustomerList = (props) => {
  const [toggleBid, setToggleBid] = useState(false);

  const { customerList } = props;
  
  if(!customerList.length){
    return <div>Loading....</div>
  }

  const getMaximumBid = (bid) => {

    if(!bid.length){
      return;
    }

    let maxBid = Number.NEGATIVE_INFINITY;
    for(let i = 0; i<bid.length; i++){
      if(maxBid < bid[i].amount){
        maxBid = bid[i].amount
      }
    }
    if(maxBid===Number.NEGATIVE_INFINITY){
      return 'None'
    }
    else{
      return maxBid
    }
  }


  const moveToDetails = (customer) => {
    props.history.push(`/customer/details/${customer.id}`, { customer })
  }

  const getMinimumBid = (bid) => {

    if(!bid.length){
      return;
    }

    let minBid = bid[0].amount;
    for(let i = 1; i<bid.length; i++){
      if(minBid > bid[i].amount){
        minBid = bid[i].amount
      }
    }
    if(minBid===Number.POSITIVE_INFINITY){
      return 'None'
    }
    else{
      return minBid
    }
  }

  const renderToggleText = () => {
    if(toggleBid){
      return 'Show Maximum';
    }
    return 'Show Minimum';
  }

  return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Premium</TableCell>
              <TableCell align="right">
                Max/Min bid
                <span>
                  <Button variant="outlined" color="primary" onClick={() => setToggleBid(!toggleBid)}>{renderToggleText()}</Button>
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerList.map((customer) => (
              <TableRow key={customer.id} onClick={() => moveToDetails(customer)} hover>
                <TableCell component="th" scope="row">
                  {`${customer.firstname} ${customer.lastname}`}
                </TableCell>
                <TableCell align="right">{customer.email}</TableCell>
                <TableCell align="right">{customer.phone}</TableCell>
                <TableCell align="right">{customer.hasPremium ? 'Yes' : 'No'}</TableCell>
                <TableCell align="right">
                   { toggleBid === false ? getMaximumBid(customer.bids) : getMinimumBid(customer.bids)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default CustomerList;