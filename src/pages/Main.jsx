import React from 'react'
import Feed from '../components/feed'
import Info from '../common/info'
import styled from 'styled-components'
import Search from '../common/search'

const MainTab=styled.div`
    align-items: center;
    align-self: center;
    display: inline-block;
    margin-left: 17rem;
`


const Main = ()=>{
    return(
        <MainTab>
        <Search/>
        <Feed/>
        <Info/>
        </MainTab>
    )
}
export default Main