import React, { useState } from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useLocation } from "react-router-dom";

export interface ISettingsProps {
}

export default function Settings(props: ISettingsProps) {
  const [open, setOpen] = useState<boolean>(true);
  let location = useLocation();

  React.useEffect(() => {
    setOpen(true);
  }, [location]);

  console.log("Settings render open: " + open)

  function close() {
    setOpen(false);
  }
  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={open}>
      <DialogTitle id="alert-dialog-title">Settings</DialogTitle>
      <DialogContent dividers sx={{ minWidth: 300 }}>
        <DialogContentText id="alert-dialog-description">Change Settings</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">Close</Button>
        <Button onClick={close} color="primary" autoFocus>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

