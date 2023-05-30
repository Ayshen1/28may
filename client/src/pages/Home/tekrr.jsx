// import { useEffect, useState } from "react"
// import { GetAll } from "../../api/request"


// export default function Cards() {
// const [users,setUsers] = useState([])
// useEffect(()=>{
//     GetAll().then((res)=>{
//         setUsers(res)
//     })
// },[])

//   return (
//     <div>
//         {
//             users && users.map((data)=>{
//                 return(<div key={data._id}>
//                     <p>{data.name}</p>
//                     <p>{data.age}</p>
//                     <image src={data.image}/>

//                     </div>)
//             })
//         }
   
//     </div>
//   )
// }
