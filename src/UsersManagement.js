import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Left from "./Left";

function UsersManagement() {
    const [users,setUsers] = useState([])
    const[dataloading,setDataloading] = useState(true)
    useEffect(()=>{
        fetch('/api/usersfetch').then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            setDataloading(false)
            setUsers(data)
        })
    },[])

    return ( 
        <section id="dashboard">
            <div id="to-click"><a href="#header"><i class="bi bi-arrow-up-square-fill"></i></a></div>
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-9">
                        <h2 style={{textAlign:'center'}}>Users Management</h2>

                        {dataloading && <h2><img src="loader2.gif" alt="" style={{width:'200px', textAlign:'center'}}/></h2>}
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Users id</th>
                                    <th>Register Date</th>
                                    <th>Status</th>
                                    <th>Delete</th>

                                </tr>
                            </thead>

                            <tbody>
                            {users.map((result,key)=>(
                            <tr key={result._id}>
                                <td>{key+1}</td>
                                <td>{result.username}</td>
                                <td>{result.regdate}</td>
                                <td><button className="btn btn-success">{result.status}</button></td>
                                <td><Link to={`/userdelete/${result._id}`}><button className="btn btn-secondary"><i class="bi bi-trash-fill"></i></button></Link></td>
                            </tr>
                        ))}
                        </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default UsersManagement;