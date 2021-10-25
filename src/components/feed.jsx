import React,{useState ,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FeedMain =styled.div`
    font-size: 20px;
    color: black;
    padding: 1rem;
    display: inline-block;
    padding: 3rem;
`
const FeedContent=styled.div`
  
    display: inline-block;
    
  
    
`
const FeedItem = styled.div`
    
    width: 50rem;
    border-style: solid;
    border-color: #c5c4c4;
    border-width: 1px;
    border-radius: 20px;
    margin:1rem;
    margin-left: -2rem;
    margin-right: -2rem;
    margin-top: 2rem;
    padding: 3rem;
    height:20rem ;
    overflow: hidden;
    
       
    :hover{
        background-color: #e8f3fa;
        
    }
`
const Title = styled.h1`
    font-size: 3rem;
    color: black;
    font-weight: bold;
    font-family: sans-serif;
    

`
const Content = styled.p`
    color: black;
    
  
    
`
const Image= styled.img`
    max-width: 7.8rem;
    min-width: 7.8rem;
    max-height: 7.5rem;
    border-radius: 1rem;

`
const PF = "http://localhost:5000/images/"
const Feed= ()=>{

    const [feeds,setFeeds] =useState([])
    
    useEffect(async ()=>{
        axios.get('http://localhost:5000/api/posts/allpost')
            .then( res =>{
                //console.log(res);
                setFeeds(res.data);
               
            })
            .catch( err =>{
                console.log(err);
            })
    }, [])

        const handleClick=(id)=>{
            window.open(`/single/${id}`,"_self");
        }

    
   

    return( 
    
        <FeedMain>
           
            <FeedContent>
              
                {feeds.reverse().map(e =>  
                    <FeedItem key={e._id} onClick={()=>{handleClick(e._id)} }> 
                     <Image src={PF + e.photo}  alt=""></Image>
                     <Title>
                        {e.title}
                     </Title>
                     <Content>
                        {e.description}
                     </Content> 
                 
                    </FeedItem>
                )}
                                    
            </FeedContent>
          
        
           
        </FeedMain>
        
    )
}
export default Feed