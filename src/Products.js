import { useEffect, useState } from "react";
import Productstr from "./Productstr";

function Products() {
    const[products,setProducts] = useState([])
    useEffect(()=>{
        fetch('/api/productshow').then((res)=>{return res.json()}).then((data)=>{
            //console.log(data)
            setProducts(data)
        })
    },[])
    return ( 
        <>
        <h2 style={{textAlign:'center'}}>Products </h2>
        <section id="productstr">
        <div id="to-click"><a href="#header"><i class="bi bi-arrow-up-square-fill"></i></a></div>
        {products.map((result)=>(
            <Productstr key={result._id} product={result}/>
        ))}
        </section>
</>
     );
}

export default Products;