import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BuyAndSellLabTabs from './BuyAndSellLabTabs';

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

function BuyAndSellContent() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button variant="contained" color="primary" onClick={handleOpen}>Buy / Sell</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <BuyAndSellLabTabs />
            </Box>
        </Modal>
        </div>
    );
}

export default class BuyAndSell extends React.Component {
    render() {
      return (
        <React.Fragment>
          <BuyAndSellContent />
        </React.Fragment>
      )
    }
}