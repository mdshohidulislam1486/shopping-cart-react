import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../context/Context'
import { Rating } from './Rating'

export const SingleProduct = ({product}) => {
 
const {
  state:{cart},
  dispatch,
} = CartState()

  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={product?.image} alt={product?.name}/>      
        <Card.Body>
            <Card.Title>
                {product?.name}
            </Card.Title>
            <Card.Subtitle style={{paddingBottom:10}}>
              <span>BDT {product?.price.split(".")[0]}</span>
              {product?.fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 4 days delivery</div>
              )}
              <Rating rating={product?.rating}/>
            </Card.Subtitle>
            {
              cart.some(p => p.id === product.id)?
              (
                <Button onClick={() =>{
                  dispatch({
                    type:'REMOVE_FROM_CART',
                    payload: product,
                  })
                }} 
                className='btn-sm' 
                variant='danger'
                >Remove from cart</Button>
              ) : (
                <Button
                onClick={() =>{
                  dispatch({
                    type:'ADD_TO_CART',
                    payload: product,
                  })
                }} 
                className='btn-sm' disabled={!product.inStock}>
                {!product.inStock ? 'Out of Stock' : 'Add to cart'}
               </Button>
              )
            }
           
            
        </Card.Body>
      </Card>

    </div>
  )
}
