import React, { useEffect, useState } from 'react'
import {GetAll, DeleteId } from '../../api/request';
import { Link } from 'react-router-dom';

export default function Cards() {
  const [users, setUsers] = useState([])
 useEffect(()=>{
  GetAll().then((res)=>{
    setUsers(res)
  })
 },[])

  return (
    <>
    
      {
        users && users.map((data)=>{
          return  (<div key={data._id}>
                     <p>{data.name}</p>
                     <p>{data.age}</p>
                     <img src={data.image}/>
                     <button onClick={()=>{
                      DeleteId(data._id).then((res)=>{
                          setUsers(
                            users.filter((i)=> i._id !== data._id)
                        )
                      })
                     }}>Delete</button>
                     <button onClick={()=>{
                      
                     }} ><Link to={`/detail/${data._id}`}>Detail</Link></button>

            </div>)
          
          })
      }
    </>
  )
}