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
    
    width: 60rem;
    border-style: solid;
    border-color: #c5c4c4;
    border-width: 1px;
    border-radius: 20px;
    margin:2rem;
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
const DeleteBtn = styled.button`
    background-color: red;
    font-size: 1rem;
    padding: 1rem;
    color: white;
    border-radius: 1rem;
    font-weight: bold;

`


const DeletePost= (props)=>{
    const username = props.user
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
            let payload = {
                username: username
            }

            console.log(id);
            console.log(username);
            console.log(payload);
            axios.delete(`http://localhost:5000/api/posts/${id}`,{ data : payload} )
            .then( res =>{
                   console.log(res.data);
                   if (res.data === "Post Deleted"){
                       alert(res.data )
                    window.location.reload();
                   }
            })
            .catch( err =>{
                console.log(err);
            })
        }

    return( 
    
        <FeedMain>
           
            <FeedContent>
              
                {feeds.reverse().map(e =>  
                    <FeedItem key={e._id} > 
                    <DeleteBtn onClick={()=>{handleClick(e._id)} }>Delete</DeleteBtn>
                        
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
export default DeletePost