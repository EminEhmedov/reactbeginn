import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Detail(prop) {
  const[sabit,setSabit]=useState(false)
  const[sabit2,setSabit2]=useState([])

  useEffect(()=>{
    setSabit(true)
    axios.get(`https://jsonplaceholder.typicode.com/comments/100`).then(({data})=>{
     
      setSabit2(data)
    })
    
  },[sabit])
  return (
    <div className='navtop back'>
       <div className="container">
        <div className="row">
          <div className="col-8 my-5 offset-2">
        
<div  className="card text-center">
  
<h1 className='text-info'> Email:{sabit2.email}</h1>
<h2 className='text-danger'> Name:{sabit2.name}</h2>
                <p>Body: {sabit2.body}</p>  


          </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Detail