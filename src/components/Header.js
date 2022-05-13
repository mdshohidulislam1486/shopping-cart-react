
import React from 'react'
import { Badge, Button, Container, Dropdown, DropdownButton, FormControl, InputGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from '../context/Context';
import {AiFillDelete} from 'react-icons/ai'
import './Home.css'


export const Header = () => {
   const {state:{cart}, dispatch} = CartState()

  return (
    <>
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand >
                        <Link to="/">Shopping cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{maxWidht:'30em'}}
                    placeholder='Search a product'
                    className='m-auto'
                    />
                </Navbar.Text>
               
               <Nav >
                   <Dropdown  align={{ sm: 'end', }}>
                       <Dropdown.Toggle variant='success' >
                            <FaShoppingCart color='white' fontSize='25px'></FaShoppingCart>
                            <Badge bg='#fff'>{cart.length}</Badge>
                       </Dropdown.Toggle>
                       <Dropdown.Menu style={{maxWidth:500}}>
                           {cart.length > 0 ? (<>
                           {
                               cart.map((product) =>(
                              < span className='cartitem' key={product.id}>
                                    <img src={product.image} alt={product.name} className='cartItemImg' />
                                    <div className='carItemDetails'>
                                        <span style={{padding:2,}}>{product.name}</span>
                                        <span> BDT {product.price.split(".")[0]}</span>
                                    </div>
                                    <AiFillDelete
                                    fontSize='20px'
                                    style={{
                                        cursor:'pointer'
                                    }}
                                    onClick={
                               () => dispatch({
                                   type:"REMOVE_FROM_CART",
                                   payload:product,
                               })
                                    }
                                    />

                                  
                                </span>
                               ))
                           }
                           </>) : (<span style={{padding:10}}>Cart is empty</span>)}
                       </Dropdown.Menu>
                   </Dropdown>
               </Nav>
                </Container>
        </Navbar>
       
    </>
  )
}
