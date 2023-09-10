import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Left from "./Left";

function ProductUpdate() {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [status, setStatus] = useState('')
    const { id } = useParams()
    const [message,setMessage] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{fetch(`/api/singleproductshow/${id}`).then((res) => { return res.json() }).then((data) => {
        console.log(data)
        setName(data.name)
        setDesc(data.desc)
        setPrice(data.price)
        setStatus(data.status)
    })},[id])
    

    function handleform(e) {
        e.preventDefault()
        const formdata = {name, desc, price, status}
        fetch(`/api/singleproductupdata/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            if(data.message==="Successfully Updated"){
                navigate('/productsdashboard')
            }else{
                setMessage('Error Occured')
            }
        })
    }
    return (
        <section id="dashboard">
            <div id="to-click"><a href="#header"><i class="bi bi-arrow-up-square-fill"></i></a></div>
            <div className="container">
                <div className="row">
                    <Left />
                    <div className="col-md-9">
                        <h2>Product Update Here</h2>
                        {message}
                        <form onSubmit={(e) => { handleform(e) }}>
                            <label className="form-label fw-bold">Product Name</label>
                            <input type='text' className="form-control"
                                value={name} onChange={(e) => { setName(e.target.value) }} />
                            <label className="form-label fw-bold">Product Description</label>
                            <textarea className="form-control"
                                value={desc} onChange={(e) => { setDesc(e.target.value) }} ></textarea>
                            <label className="form-label fw-bold">Product Price</label>
                            <input type='number' className="form-control"
                                value={price} onChange={(e) => { setPrice(e.target.value) }} />
                            <label className="form-label fw-bold">Product Status</label>
                            <select className="form-select" value={status} onChange={(e) => { setStatus(e.target.value) }}>
                                <option value='IN STOCK'>IN Stock</option>
                                <option value='OUT STOCK'>OUT Stock</option>
                            </select>
                            <button className="form-control btn btn-success mt-2 mb-2 fw-bold ">Update Here</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductUpdate;