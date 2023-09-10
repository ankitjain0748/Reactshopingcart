import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const { setLoginname, setLoginstatus } = useContext(LoginContext)

    const navigate = useNavigate()
    function handleform(e) {
        e.preventDefault()
        const formdata = { username, password }
        fetch('/api/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata)
        }).then((res) => { return res.json() }).then((data) => {
            console.log(data)
            if (data._id) {
                localStorage.setItem('loginname', data.username)
                setLoginname(localStorage.getItem('loginname'))
                localStorage.setItem('loginstatus', 1)
                setLoginstatus(localStorage.getItem('loginstatus'))
                if (data.username === 'admin') {
                    navigate('/dashboard')
                } 
                else if (data.username !== 'admin') {

                    navigate('/products')
                }
            } else {
                setMessage("Wrong Credentials")
            }

        })
    }
    return (
        
        <section id="login">
            <div id="to-click"><a href="#header"><i class="bi bi-arrow-up-square-fill"></i></a></div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-12" id="loginmid">
                        <h2>Login Here</h2>
                        {message}
                        <form onSubmit={(e) => { handleform(e) }}>
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control"
                                value={username} onChange={(e) => { setUsername(e.target.value) }}
                            ></input>
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control"
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                            ></input>
                            <button type="submit" className="form-control btn btn-primary mt-2 mb-2">Login</button>
                        </form>
                        <Link to="/reg"><p>Don't have account? Please Register here</p></Link>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Login;