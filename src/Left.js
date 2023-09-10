import { Link } from "react-router-dom";

function Left() {
    return ( 
        <>
        <div className="col-md-3">
            <Link to='/productsdashboard'><button className="form-control btn btn-secondary mt-2 mb-2">Products Management</button></Link>
            <Link to='/usersdashboard'><button className="form-control btn btn-secondary mb-2">User's Management</button></Link>
        </div>
        </>
     );
}

export default Left;