import React, { createContext } from 'react'
import { faker } from '@faker-js/faker';

const Cart = createContext()
const Context = ({children}) => {

const products = [...Array(20)].map(() =>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 5, 3, 8, 9, 10, 23, 21, 43, 23, 3, 4]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5])
}))
console.log(products)
  return (
   <Cart.Provider>
       {children}
   </Cart.Provider>
  )
}

export default Context