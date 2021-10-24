import React,{ useEffect, useState }  from 'react'
import styled from 'styled-components'

const InfoTab = styled.div`
    background-color: #f8f6f6;
    width: 20rem;
    border-color: #c0bcbc;
    border-width: 1px;
    border-radius: 20px;
    height: 50rem;
    margin-top: 5rem;
    position: fixed;
    align-items: center;
    display: inline-block;
    
`
const TimeTxt= styled.div`
    font-size: 40px;
    color: black;
    padding: 2rem;
`    

const DateTxt = styled.div`
    font-size: 20px;
    color: black;
    margin-left: 2rem;
`
const ColoredLine = styled.hr`
            color:#00a2ff;
            background-color: #00a2ff;
            height: 1px;
            display: flex;
            width: 16rem;
            align-self: center;
            margin-top: 1rem;

`
const Description = styled.div`
    font-size: 20px;
    color: black;
    margin-left: 2rem;
    padding: 1rem;

`


const Info= ()=>{
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    
  useEffect(() => {
    const d =new Date()
    var date = d.getDate(); 
    var month = d.getMonth() + 1; 
    var year = d.getFullYear(); 
    var hours = d.getHours(); 
    var min = d.getMinutes(); 
    var sec = d.getSeconds(); 
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' '
    );
    setCurrentTime(hours + ':' + min + ':' + sec)
  }, []);
    
    return(
        <InfoTab>
            <TimeTxt>{currentTime}</TimeTxt>
            <DateTxt>{currentDate}UTC</DateTxt>
            <ColoredLine/>
            <Description>
                Project by Pranav P For CSEA, NIT Calicut 
            </Description>
        </InfoTab>
    )
}
export default Info