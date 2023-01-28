import axios from 'axios'
import {Helmet} from "react-helmet";
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Index.scss'

function Index() {
  let {id} = useParams()
  let [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/elements/${id}`).then((res)=>setData(res.data))
  },[])
  console.log(data);
  return (
    <div className='detailsPage'>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Details</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
      <div className="Main__container__cards__card">
                    <div className="Main__container__cards__card__img">
                        <img src={`${data.img}`} alt="" />
                    </div>
                    <p>{data.date}</p>
                    <h6>{data.name}</h6>
                    
                  
                    
                    
                </div>


<div className='btns'>
<button onClick={()=>{
  navigate('/')
}}>Go Back</button>
                <button onClick={()=>{
                  axios.delete(`http://localhost:8080/api/elements/${id}`).then((res)=>console.log('deleted'))
                  navigate('/')
                }}>Delete</button>
</div>
                
    </div>
  )
}

export default Index