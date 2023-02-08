import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  FormPayment  from './FormPayment';

export default function CardBuy({item}) {

  const [amountBuy, setAmoutBuy] = React.useState(1)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const increaseBuy= () =>{

    setAmoutBuy(amountBuy + 1)

  }
  const decreaseBuy = () =>{
    if(amountBuy >= 2){
      setAmoutBuy(amountBuy - 1)

    }
  }




  return (
    <div>
    <FormPayment open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} amountBuy={amountBuy} item={item}/>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
      />
      <CardContent>
        <Typography sx={{textAlign: 'center'}} gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.desc}
        </Typography>
      </CardContent>
      <CardContent sx={{textAlign:'center'}} >
        {item.preco} R$
      </CardContent>
      <CardActions>
        <Button variant='outlined' onClick={increaseBuy} sx={{margin: 'auto',marginRight:1 ,fontSize: 25, borderRadius: 60, border: '1px solid black'}} size="small">+</Button>
        <Typography sx={{margin:"0 20px 0 20px"}}>{amountBuy}</Typography>
        <Button variant='outlined' onClick={decreaseBuy} sx={{margin: 'auto', fontSize: 25, borderRadius: 60, border: '1px solid black'}} size="small">-</Button>
      </CardActions>
      <CardActions>
      <Button onClick={handleClickOpen}  variant='contained' sx={{margin: 'auto'}} size='small'>Comprar</Button>
      </CardActions>
    </Card>
    </div>
  );
}