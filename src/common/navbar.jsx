import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'

const Nav = styled.nav`
    position:fixed;
    height: 65px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    cursor: pointer;
    background-color: white;
    align-items: center;
    z-index:100;
    top:0px;
    
    
    
    
    
    
`//border-bottom: 1px solid #00a2ff ;
const Logo=styled(Link)`
    color: #00a2ff;
    height: 100%;
    align-items: center;
    display: flex;
    padding: 0rem 1rem;
    text-decoration: none;
    font-weight: bold;
    
   
`
const ColoredLine = styled.hr`
            color:#00a2ff;
            background-color: #00a2ff;
            height: 1px;
            position: absolute;
            display: flex;
            width: 114rem;
            margin-top: 4.5rem;
            margin-left: 1rem;
            margin-right: 1rem;
            align-self: center;

`
const Title =styled.h1`
    size: 50px;
    color: #00a2ff;
    align-items: center;
    align-self: center;
    display: flex;
   

`
const NavMenu = styled.div`
    
    align-items: center;
    display: inline-block;
`
const Contacts = styled(Link)`
    text-decoration: none;
    display: flex;
    font-size: 20px;
    color: #00a2ff;
    padding: 2rem;
    display: inline-block;
    background-color: white;
    padding: 0.75rem;
    margin-right: 1px;
    :hover{
        
        background-color: #5ab9f0;
        color: white;
    }
`
const Admin = styled(Link)`
    background-color: #00a2ff;
    color: white;
    text-decoration: none;
    display: flex;
    font-size: 20px;
    display: inline-block;
    margin-right: 1rem;
    padding: 0.75rem;
    align-items: center;
    :hover{
        
        background-color: #0081cc;
    }
     
`

const NavBar = ()=>{
    return(
        <>
        <Nav>
            <Logo to="/"><img width="65px" height="auto" src={logo} alt="img"/>
            <Title>INFO NEWS</Title>
            </Logo>
            <NavMenu>
                <Contacts to="/contacts">Contact Us</Contacts>
                <Admin to='/admin'>Continue As Admin</Admin>
            </NavMenu>
            <ColoredLine/>
        </Nav>
        
        </>
        
        
      
    )
}
export default NavBar