import { useState } from 'react';
import {Link} from 'react-router-dom'
function Reg() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[message,setMessage]=useState('')
    function handleform(e){
        e.preventDefault()
        const formdata = {username,password}
console.log(formdata)
        fetch('/api/reg',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((res)=>{return res.json()}).then((data)=>{
            //console.log(data)
            if(data._id){
                setMessage("Successfully Registered")
            }else{
                setMessage("Username Already Taken")
            }
        })
    
    }
    return (
        <section id="reg">
            <div id="to-click"><a href="#header"><i class="bi bi-arrow-up-square-fill"></i></a></div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-12" id="regmid">
                        <h2>Registration Here</h2>
                        {message}
                        <form onSubmit={(e)=>{handleform(e)}}>
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control"
                            value={username} onChange={(e)=>{setUsername(e.target.value)}}
                            ></input>
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control"
                            value={password} onChange={(e)=>{setPassword(e.target.value)}}
                            ></input>
                            <button type="submit" className="form-control btn btn-primary mt-2 mb-2">Register</button>
                        </form>
                        <Link to='/login'><p>Already have account? Click here</p></Link>     
                    </div>
                    
                </div>
            </div>

        </section>
    );
}

export default Reg;