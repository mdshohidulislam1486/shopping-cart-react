
import React from 'react'
import { Badge, Button, Container, Dropdown, DropdownButton, FormControl, InputGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
  return (
    <>
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand >
                        <Link to="/">Shopping cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{maximuWidht:'20em'}}
                    placeholder='Search a product'
                    className='m-auto'
                    />
                </Navbar.Text>
               
               <Nav>
                   <Dropdown  align={{ lg: 'start' }}>
                       <Dropdown.Toggle variant='success' >
                            <FaShoppingCart color='white' fontSize='25px'></FaShoppingCart>
                            <Badge bg='#fff'>{10}</Badge>
                       </Dropdown.Toggle>
                       <Dropdown.Menu style={{maxWidth:370}}>
                           <span style={{padding:10}}>Cart is empty</span>
                       </Dropdown.Menu>
                   </Dropdown>
               </Nav>
                </Container>
        </Navbar>
       
    </>
  )
}
