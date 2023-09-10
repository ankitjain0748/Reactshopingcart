import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./LoginContext";

function Productstr(props) {
    const{cart,setCart} = useContext(LoginContext)
    const{product} = props
    function handlecart(e,product){
        console.log(product)
        let _cart = {...cart}
        if(!_cart.items){
            _cart.items = {}
        }
        if(!_cart.items[product._id]){
            _cart.items[product._id] = 1
        }else{
            _cart.items[product._id] += 1
        }
        if(!_cart.totalitems){
            _cart.totalitems = 1
        }else{
            _cart.totalitems += 1
        }

        setCart(_cart)
        console.log(cart)
    }
    return (
        <div className="container m-2">
            <div className="row">
                <div className="col-md-12">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="cart1.png" style={{width:'150px'}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.desc}</p>
                            <p className="card-text">{product.price}</p>
                            <button className="btn btn-danger me-2" onClick={(e)=>{handlecart(e,product)}}>Add Cart</button>
                            <Link to={`/productsmoredetails/${product._id}`} className="btn btn-primary">More Details</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Productstr;