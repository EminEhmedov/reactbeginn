import React ,{useState} from 'react'
import Form from './Form'
import axios from 'axios'
import Sekil from './Sekil'
function Search() {
const [sekil1,setSekil1]=useState('https://avatars.mds.yandex.net/i?id=3ee42bb8d09be7d575596b50d58d8753-4240956-images-thumbs&n=13')
  function datal(params) {
    setSekil1('https://forumupload.ru/uploads/0019/3c/8c/2/282858.gif')
    axios.get(`https://source.unsplash.com/random/900×700/?${params}`).then(({request})=>{
    
      
      setSekil1(request.responseURL)
    })
  }
  return (
    <div className='navtop back'>

        <div className="container">
            <div className="row">
                <div className="col-9 offset-2 my-3">
<Form yeni={datal}/>
<Sekil yolla={sekil1} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search