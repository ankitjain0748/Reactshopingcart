
import { useNavigate, useParams } from "react-router-dom";

function UserDelete() {
   
    const navigate = useNavigate()
    const{id}=useParams()

    fetch(`/api/userdelete/${id}`,{
        method:'DELETE'
    }).then((res)=>{ return res.json()}).then((data)=>{ 
        console.log(data)
        if(data.message==='Successfully Deleted'){
            navigate('/usersdashboard')
        }
    
    })
    return ( 
        <>
        
        <h2> UserDelete{id}</h2>
        </>
     );
}

export default UserDelete;