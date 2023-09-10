import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Left from "./Left";

function ProductsAdd() {
    const[name,setName] = useState('')
    const[desc,setDesc] = useState('')
    const[price,setPrice] = useState('')
    const navigate = useNavigate()

    function handleform(e){
        e.preventDefault()
        const formdata = {name,desc,price}
        fetch('/api/productsadd',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            if(data._id){
                navigate('/productsdashboard')
            }
        })
    }

    return ( 
        <section id="dashboard">
            <div id="to-click"><a href="#header"><i class="bi bi-arrow-up-square-fill"></i></a></div>
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-9">
                        <h2>Products Add Here</h2>
                        <form onSubmit={(e)=>{handleform(e)}}>
                            <label className="form-label fw-bold">Product Name</label>
                            <input type='text' className="form-control"
                            value={name} onChange={(e)=>{setName(e.target.value)}} />
                            <label className="form-label fw-bold">Product Description</label>
                            <textarea className="form-control" 
                            value={desc} onChange={(e)=>{setDesc(e.target.value)}} ></textarea>
                            <label className="form-label fw-bold">Product Price</label>
                            <input type='number' className="form-control"
                            value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                            <button className="form-control btn btn-success mt-2 mb-2 fw-bold">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default ProductsAdd;