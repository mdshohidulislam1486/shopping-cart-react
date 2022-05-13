import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Home.css'
import { Rating } from './Rating'

export const Filters = () => {
    const [rate, setRate] = useState(3)


  return (
    <div className='filters'>
        <span className='title'> Filter Products</span>
        <span>
            <Form.Check
            inline
            label="Ascending"
            name='group1'
            type='radio'
            id={`inline-1`}
            >
            </Form.Check>
        </span>
        <span>
            <Form.Check
            inline
            label="Descending"
            name='group1'
            type='radio'
            id={`inline-2`}
            >
            </Form.Check>
        </span>
        <span>
            <Form.Check
            inline
            label="Include Out of Stock"
            name='group1'
            type='checkbox'
            id={`inline-3`}
            >
            </Form.Check>
        </span>
        <span>
            <Form.Check
            inline
            label="Fast Delivery only"
            name='groupl1'
            type='checkbox'
            id={`inline-4`}
            >
            </Form.Check>
        </span>
        <span><label style={{paddingRight:10}}>Rating:</label>
        <Rating 
        rating={rate}
         onClick={(i)=>setRate(i)}
        style={{cursor:'pointer'}}> </Rating>
        
        </span>
        <Button variant='light'> Clear Filter</Button>
        

    </div>
  )
}
