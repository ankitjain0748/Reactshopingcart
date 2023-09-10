import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDelete() {
    const{id} = useParams()
    const navigate = useNavigate()
    const[message,setMessage] = useState('')
        fetch(`/api/productdelete/${id}`,{
            method:'DELETE'
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            if(data.message==="Successfully Deleted"){
                navigate('/productsdashboard')
            }else{
                setMessage('Error occured')
            }
        })
   
    return ( 
        <>
        {message}
        <h2>Product Delete {id}</h2>
        </>
     );
}

export default ProductDelete;