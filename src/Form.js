import React ,{useState} from 'react'

function Form({yeni}) {
  const [inp,setInp]=useState('')

  function gonderinp() {
    yeni(inp)
  }
  return (
    <div>
        <form action="#" onSubmit={gonderinp} className='d-flex'>
            <input onInput={(e)=>{
setInp(e.target.value)
            }} type="text" className='form-control' />
            <button className='btn btn-lg btn-danger'>Search</button>
        </form>
    </div>
  )
}

export default Form