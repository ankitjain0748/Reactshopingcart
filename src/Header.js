import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";
import pic from './cart.png'

function Header() {
  const { loginname, setLoginname, loginstatus, setLoginstatus, cart } = useContext(LoginContext)
  const navigate = useNavigate()
  function handlelogout(e) {
    localStorage.setItem('loginname', '')
    setLoginname(localStorage.getItem('loginname'))
    localStorage.removeItem('loginstatus')
    setLoginstatus(localStorage.getItem('loginstatus'))
    navigate('/login')
  }
  return (
    <section id="header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="#"><img src={pic} alt="" /></Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
       
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {loginstatus ?
                <>
                   
                  <li className="nav-item">
                    <Link className="nav-link fw-bold text-white" to="#">Welcome {loginname}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active fw-bold text-white" aria-current="page" to="/products">Products</Link>
                  </li> 
                  
                  <Link to='/cart'> <i className="bi bi-cart4 me-2" style={{color:'white', fontSize:'25px'}}>{cart.totalitems ? cart.totalitems : 0}</i></Link>
                  <li className="nav-item">
                    <button onClick={(e) => { handlelogout(e) }} className="btn btn-danger">Logout</button>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link fw-bold text-white" to="/reg">Registration</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-bold text-white" to="/login">Login</Link>
                  </li>
                </>
              }

            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;