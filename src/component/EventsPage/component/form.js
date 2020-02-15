import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog({open,toggle}) {
 

  return (
    <div>
      
      <Dialog open={open} onClose={toggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Register to AndroMaster</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          /> <TextField
          margin="dense"
          id="name"
          label="Email"
          type="email"
          fullWidth
        /> <TextField
        margin="dense"
        id="name"
        label="Number"
        type="email"
        fullWidth
      /> <TextField
      margin="dense"
      id="name"
      label="Name"
      type="email"
      fullWidth
    />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggle} color="primary">
            Cancel
          </Button>
          <Button onClick={toggle} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}