import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const CustomerBidDetails = (props) => {
  const bids = props.history.location.state.customer.bids;

  return(
    <>
      <h3>List Of Available Bids</h3>
      <List dense>
        {
          bids.map(bid => {
            return(
              <ListItem key={bid.id}>
                <ListItemText>{bid.carTitle}</ListItemText>
                <ListItemSecondaryAction>
                  <ListItemText>{bid.amount}</ListItemText>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })
        }
      </List>
    </>
  )
}

export default CustomerBidDetails;