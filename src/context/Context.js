import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';

const Cart = createContext()
// faker.seed(99)
const Context = ({children}) => {
const products = [...Array(20)].map(() =>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([4, 5, 2, 7, 23, 1, 9, 0, 0]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5])
}))


const [state, dispatch] = useReducer(cartReducer, {
  products:products,
  cart:[]
});
 

  return (
   <Cart.Provider value={{state, dispatch}}>
       {children}
   </Cart.Provider>
  )
}

export default Context

export const CartState = () =>{
  return useContext(Cart)
}