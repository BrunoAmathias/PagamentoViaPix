import * as React from 'react';
import axios from 'axios';
import '../App.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { ResponseContext } from '../context/ResponseContext';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const api = axios.create({
  baseURL: "https://api.mercadopago.com"
})

api.interceptors.request.use(async config => {
  const token = "TEST-5772897466729919-020209-52ad23d74174fadef6a5940981fa85eb-191873833"
  config.headers.Authorization = `Bearer ${token}`
  console.log(token);

  return config
})



const formReducer = (state, e) =>{
  return{
    ...state,
    [e.name] : e.value
  }
}

export default function DataPayments({setOpenDataPayments, OpenDataPayments, totalCompra, nameProduto}) {


const [FormData, setFormData] = React.useReducer(formReducer, {})
const {responsePayment, setResponsePayment} = React.useContext(ResponseContext)

console.log(FormData.Email)
console.log(FormData.CPF)
console.log(FormData.Nome)
console.log(totalCompra)


const ApiPaymentPix = (e) =>{
  e.preventDefault()

  const body ={
    "transaction_amount" :totalCompra,
    "description" : nameProduto,
    "payment_method_id" : "pix",
    "payer" :{
      "email" : FormData.Email,
      "first_name": FormData.Nome,
      "last_name" : "",
      "identification": {
        "type": "CPF",
        "number":FormData.CPF
      }
    },
    "notification_url": "https://eosto8zmqgf0f4e.m.pipedream.net"
  }
  
  api.post("v1/payments", body).then(response =>{

    setResponsePayment(response)
    console.log(responsePayment)

  }).catch(err=>{
    alert(err)
  })
}

  const handleClose = () => {
    setOpenDataPayments(false);
  };

  const handleChange = (e) =>{
    setFormData({
      name: e.target.name,
      value: e.target.value
    })
  }



  return (
    <div>
      <Dialog
        open={OpenDataPayments}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Formulário de pagamento"}</DialogTitle>
        <DialogContent>
          <DialogContentText display='flex' flexDirection='column' mt={1} gap={4} id="alert-dialog-slide-description">
              <TextField onChange={handleChange} required name='Email' id="outlined-basic" label="Email" type='email' variant="outlined" />
              <TextField onChange={handleChange} required name='Nome' id="outlined-basic" label="Nome e sobrenome" variant="outlined" />
              <TextField onChange={handleChange} required name='CPF' id="outlined-basic" label="CPF" type='number' variant="outlined" />
              <div onClick={ApiPaymentPix}>
              <Link to='/pagamento' className='LinkFormPayment'>
                <Button sx={{width:"100%"}} variant="outlined">Pagar</Button>
              </Link> 
              </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}