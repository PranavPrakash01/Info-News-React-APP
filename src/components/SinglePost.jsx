import React,{useState ,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useParams } from "react-router-dom";


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
    
    width: 45rem;
    
    border-width: 1px;
    border-radius: 20px;
    margin:1rem;
    margin-left: -2rem;
    padding: 3rem;
    height:auto ;
   
`
const Title = styled.h1`
    font-size: 3rem;
    color: black;
    font-weight: bold;
    font-family: sans-serif;
    

`
const Content = styled.p`
    color: black;
    margin-top: 5rem;
`
const Image= styled.img`
    max-width: 50rem;
    min-width: 30rem;
    max-height: 35rem;
    min-height: 30rem;
    border-radius: 1rem;

`

const PF = "http://localhost:5000/images/"
const SinglePost= ()=>{
    
    var {id} = useParams()
    
    const [singlePost,setSinglePost] =useState([])
    
    useEffect(async ()=>{
        axios.get(`http://localhost:5000/api/posts/${id}`)
            .then( res =>{
                //console.log(res);
                setSinglePost(res.data);
               
            })
            .catch( err =>{
                console.log(err);
            })
    }, [])
    return( 
    
        <FeedMain>
           
            <FeedContent>
              
                
                    <FeedItem> 
                     <Image src={PF + singlePost.photo} alt=""></Image>
                     <Title>
                       {singlePost.title}
                     </Title>
                     <Content>
                       {singlePost.description}
                     </Content> 
                 
                    </FeedItem>
            
                                    
            </FeedContent>
          
        
           
        </FeedMain>
        
    )
}
export default SinglePost