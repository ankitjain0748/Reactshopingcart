import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import pic from './cart1.png'


function ProductsMoreDetails() {
    const {id} = useParams()
    const[product,setProduct] = useState([])
    useEffect(()=>{
        fetch(`/api/singleproductshow/${id}`).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            setProduct(data)
        })
    },[])
    
    return (         
        <section>
            <div id="to-click"><a href="#header"><i class="bi bi-arrow-up-square-fill"></i></a></div>
            <div className="container">
                <div className="row">
                    <Link to='/products' ><button className="btn btn-warning" style={{width:'100px'}}>Back</button></Link>

                    <div className="col-md-4">
                     <img src={pic} alt="..." style={{width:'150px'}}/>
                    </div>
               
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.desc}</td>
                                    <td>{product.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default ProductsMoreDetails;