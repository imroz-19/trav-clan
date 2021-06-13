import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Pagination = (props) => {
  const { listsPerPage, totalList} = props;
  const totalPage = Math.floor(totalList/listsPerPage);
  const pageNumbers = [];

  for(let i =1; i<=totalPage; i++){
    pageNumbers.push(i);
  }
  return(
    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
      {
        pageNumbers.map(page => {
        return  <Button onClick={() => props.onPageChange(page)}>{page}</Button>
        })
      }
    </ButtonGroup>
  )
}

export default Pagination;