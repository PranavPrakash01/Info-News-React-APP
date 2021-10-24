import React from 'react'
import Info from '../common/info'
import styled from 'styled-components'
import Search from '../common/search'
import SinglePost from '../components/SinglePost'

const SingleTab=styled.div`
    align-items: center;
    align-self: center;
    display: inline-block;
    margin-left: 17rem;
`


const Single = ()=>{
    
    return(
        <SingleTab>
        <Search/>
        <SinglePost/>
        <Info/>
        </SingleTab>
    )
}
export default Single