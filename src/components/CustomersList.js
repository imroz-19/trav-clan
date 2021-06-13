import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomerList = (props) => {
  const { customerList } = props;
  
  if(!customerList.length){
    return <div>Loading....</div>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {customerList.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell component="th" scope="row">
                  {customer.firstname}
                </TableCell>
                <TableCell align="right">{customer.email}</TableCell>
                <TableCell align="right">{customer.phone}</TableCell>
                <TableCell align="right">{customer.hasPremium ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default CustomerList;