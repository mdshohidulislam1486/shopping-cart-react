import React from 'react'
import { CartState } from '../context/Context'
import { SingleProduct } from './SingleProduct'
import './Home.css'
import { Filters } from './Filters'

const Home = () => {

  const {state:{products}} = CartState()

  return (
    <div className='home'>
      
       <Filters/>
        <div className='productContainer'>
           {
             products.map((product) =>{
               return <SingleProduct product={product} key={product.id}></SingleProduct>
             })
           }
        </div>
      
    </div>
  )
}

export default Home