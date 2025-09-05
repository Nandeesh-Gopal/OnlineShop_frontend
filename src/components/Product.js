import { useState } from "react"
import Nav from "./Nav"
import "../styles/product.css"
function Product(){
    const [product,setproduct]=useState({
        product:"",
        description:"",
        prize:0
    })
    const handlechange= e=>{
        setproduct({...product,[e.target.name]:e.target.value})
    }
    const handlesubmit= async (e)=>{
        e.preventDefault();
        const res=await fetch("http://localhost:5000/product",{
            method:"post",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(product)
        })
        const data=await res.json()
        alert(data.message)
    }
    return(
        <div>
            <Nav/>
            <div className="container-product">
            <h1>Became a business partner</h1>
            <form onSubmit={handlesubmit} className="product-form">
                <label for="p-name">Product name:</label>
                <input type="text" name="product" onChange={handlechange}/>
                <label for="p-des">Description:</label>
                <input type="text" name="description" onChange={handlechange}/>
                <label for="p-price">Price</label>
                <input type="number" name="prize" onChange={handlechange}/>
                <button type="submit">submit</button>
            </form></div>
        </div>
    )
}
export default Product