import React from 'react'
import { ResponseContext } from '../context/ResponseContext'

export const Payment = () => {

  const {responsePayment} = React.useContext(ResponseContext)


    
  return (
    <div className='d-flex justify-content-around'>
    {
      responsePayment && 
        <iframe title='PagamentoPix' width='100%' height='900px' src={responsePayment.data.point_of_interaction.transaction_data.ticket_url}>
        </iframe>
    
    }
    </div>
  )
}
