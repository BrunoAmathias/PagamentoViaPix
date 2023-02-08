import React from 'react'
import CardBuy from '../Components/CardBuy'
import { itens } from '../data/Data'

export const Home = () => {
  return (
    <main className='mt-5 ms-4 me-4 d-flex justify-content-around'>
      {
        itens
        .map(
          (item)=> (<CardBuy key={item.id} item={item}/>)
        )
      }       

      </main>
  )
}
