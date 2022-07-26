import React , {useState} from 'react'
import './common.css'
import axios from 'axios'

function Sign() {
const [sign1,setSign1]=useState('')
const [sign2,setSign2]=useState('')
const [sign3,setSign3]=useState('')
function sendsign() {
  setSign3({
    email:sign1,
    password:sign2,
    returnSecureToken: true
  })
  axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0k3uC7Xmrj0rL8IBgDqBO2O-NSwAkeY4',sign3).then(
    ({data})=>{
      console.log(data.idToken);
      localStorage.setItem('qeydiyyat',data.idToken)
    }
  )
}
  return (
    <div className='navtop back pb-3'>
<div className="container">
    <div className="row">
        <div className="col-8 offset-2 flex-column text-center">
       <a href="#" >
       <i className="fa-solid fa-arrow-right-to-bracket" ></i>
       </a>
<h1>Sign In</h1>
<form action="#" onSubmit={sendsign} className='d-flex flex-column'>
    <input className='form-control mt-3 py-3 is-valid' onInput={(e)=>{
      setSign1(e.target.value)
    }} type="text" placeholder='Your Email or Number' />
    <input onInput={(e)=>{
      setSign2(e.target.value)
    }} className='form-control py-3 my-3' type="password"  placeholder='Your Password'/>
    <button className='btn btn-lg btn-danger'> Sign in</button>
</form>
        </div>
    </div>
</div>


    </div>
  )
}

export default Sign