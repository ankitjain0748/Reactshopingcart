import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Left from "./Left";

function ProductsManagement() {
    const[products,setProducts] = useState([])
    const[dataloading,setDataloading] = useState(true)
    useEffect(()=>{
        fetch('/api/allproductsshow').then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            setDataloading(false)
            setProducts(data)
        })
    },[])
    return ( 
        <section id="dashboard">
            <div id="to-click"><a href="#header"><i class="bi bi-arrow-up-square-fill"></i></a></div>
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-9">
                        <h2 style={{textAlign:'center'}}>Products Management</h2>
                        <Link to='/productsadd'><button className="form-control btn btn-outline-primary">Product Add Here</button></Link>
                        
                        {dataloading && <h2><img src="loader2.gif" alt="" style={{width:'200px', textAlign:'center'}}/></h2>}
                        
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Product Name</th>
                                    <th>Product Description</th>
                                    <th>Product Price</th>
                                    <th>Status</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {products.map((result,key)=>(
                                    <tr key={result._id}>
                                    <td>{key+1}</td>
                                    <td>{result.name}</td>
                                    <td>{result.desc}</td>
                                    <td>{result.price}</td>
                                    <td>{result.status}</td>
                                    <td><Link to={`/productupdate/${result._id}`}><button className="btn btn-success">Update</button></Link></td>
                                    <td><Link to={`/productdelete/${result._id}`}><button className="btn btn-secondary "><i class="bi bi-trash-fill"></i></button></Link></td>
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

export default ProductsManagement;