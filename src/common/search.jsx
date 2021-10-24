import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SearchTab = styled.div`
    background-color: white;
    width: 12.5rem;
    border-color: #c0bcbc;
    border-width: 1px; 
    height: 50rem;
    margin-top: 5rem;
    margin-left: -18rem;
    position: fixed;
    border-right: #00a2ff;
    border-left: transparent;
    border-style: solid;
    border-bottom:transparent;
    border-top:transparent;
    padding: 2rem;
    display: flex;
    
`
const ColoredLine = styled.hr`
            color:#00a2ff;
            background-color: #00a2ff;
            height: 1px;
            display: flex;
            width: 10rem;
            align-self: center;
            margin-right: 7.5px;


`
const Title = styled.h1`
    font-size: 1.5rem;
    margin-left: 2rem;
    padding: -1rem;
    

`
const Category = styled.div`
    background-color: white;
    max-height: 20rem;
    margin-top: -2.5rem;
    margin-left: -1rem;

`
const CatList = styled.div`
    background-color: white;
    height:17.5rem;
    padding: 1rem;  
    width: 10rem;
    align-items: center;
`
const CatItemBtn = styled.button`
    font-size: 1rem;
    width:12.5rem;
    height:2.5rem;
    padding: 0.5rem;
    margin:0.25rem;
    background-color: #00a2ff;
    color: white;
    border: transparent;
    :hover{
        background-color: #0081cc;
    }
`
const handleClick=(link)=>{
    window.open(`/category/${link}`,"_self");
    
}
const Search= ()=>{
    return(
        <SearchTab>
            <Category>
                 
                <Title>Categories</Title>
                <ColoredLine/>
                <CatList>
                    <CatItemBtn onClick={()=>handleClick("Education")}> Education</CatItemBtn >
                    <CatItemBtn onClick={()=>handleClick("Tech")}> Tech</CatItemBtn >
                    <CatItemBtn onClick={()=>handleClick("Economy")}> Economy</CatItemBtn >
                    <CatItemBtn onClick={()=>handleClick("Sports")}> Sports</CatItemBtn >
                    <CatItemBtn onClick={()=>handleClick("Other")}> Other</CatItemBtn >
                </CatList>
            </Category>
            
        </SearchTab>
    )
}
export default Search