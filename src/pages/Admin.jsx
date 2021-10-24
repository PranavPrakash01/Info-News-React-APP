import React,{useState}  from 'react'
import styled from 'styled-components'
import '../styles/admin.css'
import axios from 'axios'
import Select from 'react-select'
import DeletePost from '../components/deletePost'

const AdminLog = styled.div`
    display: flex;
    background-color: white;
    margin-top: 5rem;
    align-self: center;
    align-content: center;
    align-items: center;
    width: 20rem;
    border-radius: 2rem;
    height:30rem;
    padding: 3rem;
    display: inline-block;
    border-style: solid;
    border-color: #00a2ff;
    margin-left: 42.5rem;
    
`
const ColoredLine = styled.hr`
            color:#00a2ff;
            background-color: #00a2ff;
            height: 1px;
            display: flex;
            width: 16rem;
            align-self: center;
            margin-top: 0.5rem;
            margin-right: 3rem;

`
const ColoredLine1 = styled.hr`
            color:#00a2ff;
            background-color: #00a2ff;
            height: 1px;
            display: flex;
            width: 100rem;
            align-self: center;
            margin-top: 0.5rem;
            margin-right: 3rem;

`
const AdminPanel=styled.div`
    
   
    background-color: white;
    margin-top: 5rem;
    align-self: center;
    align-content: center;
    align-items: center;
    width: 105rem;
    border-radius: 1rem;
    height: auto;
    padding: 2rem;
    display: inline-block;
    border-style: solid;
    border-color: #00a2ff;
    margin-left: 2rem;
    
`
const DeleteTab=styled.div`
     width: 70rem;
     align-items: center;
     display: inline-block;
     overflow: scroll;
     height: 35rem;
     display: inline;
     margin-left: 15rem;
`

const Admin= ()=>{
    //admin login----------------------------------------

    const [username,setUsername] =useState([])
    const [password,setPassword] =useState([])
    const [message,setMessage] =useState([''])
    const [isAdmin,setIsAdmin] =useState(false)
    
  

    const handleUsernameChange=(event)=>{
        
        setUsername(event.target.value)
    }
    const handlePasswordChange=(event)=>{
        setPassword(event.target.value)
    }
    const handleSubmit=(event)=>{
       
        var payload = { 
            username: username,
            password: password
        }
        axios.post(`http://localhost:5000/api/auth/admin`,payload)
        .then(res => {
         console.log(res.status);
         setMessage("Login Verified")
         setIsAdmin(true)
         
         alert("Login Verified")
        

          
       }).catch((err)=> {
        
           setMessage("Unauthorised login")
           console.log(err)
        })
   }
        
   //New post---------------------------------------------
   const options = [
       { value: 'Tech', label: 'Tech' },
       { value: 'Education', label: 'Education' },
       { value: 'Economy', label: 'Economy' },
       { value: 'Sports', label: 'Sports' },
       { value: 'Other', label: 'Other' },
    ]
     
   

   const [title,setTitle] =useState([])
   const [content,setContent] =useState([])
   const [selectedOption,setSelectedOption] =useState([])
   const [file,setFile] =useState([])

   const handleTitleChange=(event)=>{
        setTitle(event.target.value)
   }
   const handleContentChange=(event)=>{
    setContent(event.target.value)
   }
   const handleDropDownChange = (event) =>{
    setSelectedOption(event.value)
    console.log(event.value);
   }

   const handlefileSelected =(event)=>{
    setFile(event.target.files[0])
    console.log(event.target.files[0]);
   }

   const handleNewSubmit=()=>{
        console.log(title,content);
        
        

       //Image upload-----------------------------------------------------
       const fd = new FormData()
       const filename = Date.now()+file.name
       fd.append('name',filename)
       fd.append('file',file)

       console.log(file.name);
       
       if (file){
           try{
            axios.post(`http://localhost:5000/api/upload`,fd)
            .then(res => {
             console.log(res.data);

                setFile('')

           }).catch((err)=> {console.log(err)})
           
           }catch(err){

           }
        }
            var payload = { 
                title: title,
                description: content,
                category: selectedOption,
                username:username,
                photo:filename
            }
            axios.post(`http://localhost:5000/api/posts/newpost`,payload)
            .then(res => {
                console.log(res.data);
                alert("Posted")
                setTitle('')
                setContent('')
                setSelectedOption('')

            }).catch((err)=> {console.log(err)})
            
   }
    if (isAdmin==false){
        return(
            <AdminLog> 
                 <h1>Login As Admin</h1>
                 <ColoredLine/>
                 
                 <input 
                       type="text" 
                       placeholder="Name"
                       value={username} 
                       onChange={handleUsernameChange}/>
                <input 
                       type="text" 
                       placeholder="Password"
                       value={password} 
                       onChange={handlePasswordChange}/>
    
                <button id="loginBtn" type="submit" onClick={handleSubmit}>Login</button>
                <p>{message}</p>
            </AdminLog>
          
        )
    }else{
        
        return(
            < AdminPanel>
                <h2>Admin Panel</h2>
                <ColoredLine1/>
                <h2 >New Post</h2>
                <newPost>
                    <input
                        id="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitleChange}
                    ></input>
                    <label>Upload Image</label>
                    <input
                        id="imagePicker"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        multiple="false"
                        onChange={handlefileSelected}
                     ></input>


                    <input
                        id="content"
                        type="text"
                        placeholder="Content"
                        value={content}
                        onChange={handleContentChange}
                    ></input>

                     <h5 id="selectCat">Select Category </h5>
                     <Select
                        id="dropDown"
                        value={selectedOption}
                        onChange={handleDropDownChange}
                        options={options}
                        placeholder={selectedOption}
                    />
                    
                    <button id="newBtn" type="submit" onClick={handleNewSubmit}>POST</button>
                </newPost>
                
                <DeleteTab>
                 <h3>Click To Delete Below Post</h3>
                 <DeletePost user={username}/>
                </DeleteTab>
                
                
            </AdminPanel>
           
        )
    }
    
}
export default Admin