import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './product.css'
import { Link } from 'react-router-dom'

const Product=()=>{
const [user,setUser]=useState('')
const [user2,setUser2]=useState(true)
useEffect(()=>{
    
setUser(false)
axios.get('https://jsonplaceholder.typicode.com/comments').then(({data})=>{
       
    setUser(data)
 })
},[user2])



  return (
    <div className=" navtop back">
<div className="container">
    <div className="row">
        <div className="col-6 offset-5  ">
           
            </div>
        
        <div  className="col-12 ">
        
        {
            user&&
            user.map((item,index)=>{
                return(
              <div key={index} className="card d-inline-block m-2" style={{width: "18rem",}}> 
              <span className="badge bg-danger">{index+1}</span> 
              <div className="card-body">
<h5 className="card-title">{item.email}</h5>
<p className="card-text overflow-hidden" style={{height:'100px',}}>{item.body}</p>
<Link to={`/detail/:${item.email}`} className="btn btn-primary">Go User</Link>
</div>
</div>    
                )
            })
        }



    
        </div>
    </div>
</div>
    </div>
  )
}

export default Product