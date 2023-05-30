import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { GetID } from '../../api/request'

const Detail = () => {
    const {id} = useParams();
    const [user, setUser] = useState([])

    useEffect(()=>{
        GetID(id).then((res)=>{
            setUser(res)
        })
    },[])
    
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <image src={user.image} />
    </div>
  )
}

export default Detail
