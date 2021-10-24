import React from 'react'
import Info from '../common/info'
import styled from 'styled-components'
import Search from '../common/search'
import Filtered from '../components/filtered'

const SingleTab=styled.div`
    align-items: center;
    align-self: center;
    display: inline-block;
    margin-left: 17rem;
`


const Category = ()=>{
    
    return(
        <SingleTab>
        <Search/>
        <Filtered/>
        <Info/>
        </SingleTab>
    )
}
export default Category 