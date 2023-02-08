import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Pix } from '@mui/icons-material';
import { Box } from '@mui/material';
import DataPayments from './DataPayments'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({open, setOpen, item, amountBuy }) {
  const [OpenDataPayments, setOpenDataPayments] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
  };

  const PaymentsData = () =>{
    setOpenDataPayments(true)
    setOpen(false)
  }
  var totalCompra  =parseFloat((item.preco*amountBuy).toFixed(2))
  var nameProduto = item.name

  console.log(totalCompra)
  

  return (
    <div>
      <DataPayments PaymentsData={PaymentsData} OpenDataPayments={OpenDataPayments} setOpenDataPayments={setOpenDataPayments} totalCompra={totalCompra} nameProduto={nameProduto}/>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Forma de Pagamento"}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{textDecoration:'none'}}  id="alert-dialog-slide-description">
              <Button onClick={PaymentsData}>
                <Pix/>
            <Box component='span'>Pix</Box> 
            </Button>
          </DialogContentText>
          <hr />
        </DialogContent>
        <DialogContent>
         Total : {totalCompra}
        </DialogContent>
      </Dialog>
    </div>
  );
}