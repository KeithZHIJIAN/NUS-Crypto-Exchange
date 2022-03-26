import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendAndReceiveLabTabs from './SendAndReceiveLabTabs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function SendAndReceiveContent() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button variant="contained" color="secondary" onClick={handleOpen}>Send / Receive</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <SendAndReceiveLabTabs />
            </Box>
        </Modal>
        </div>
    );
}

export default class BuyAndSell extends React.Component {
    render() {
      return (
        <React.Fragment>
          <SendAndReceiveContent />
        </React.Fragment>
      )
    }
}