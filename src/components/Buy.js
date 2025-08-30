import { useEffect, useState } from "react";
import Nav from "./Nav";
import {useParams } from "react-router-dom";
function Buy(){
    const {productid}=useParams();
    const [product,setdata]=useState([])
    const [quantity,setquantity]=useState(1)
    const [address,setaddress]=useState("")
    useEffect(()=>{
        fetch(`http://localhost:5000/fetch-poduct-to-buy/${productid}`)
        .then(res=>res.json())
        .then(data=>setdata(data))
        .catch(err=>console.log(err))
    },[productid])
    const handlesubmit=(e)=>{
        e.preventDefault()
        const order={
            productid:productid,
            productname:product.name,
            productprice:product.price,
            quantity,
            address,
            total:quantity*product.price
        }
        fetch("http://localhost:5000/place-order",{
            method:"post",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(order)
        })
        .then((res)=>res.json())
        .then((data)=>{
            alert("order placed successfully")
            console.log(data)
        })
        .catch((err)=>console.log(err))
    }

    return (
        <div>
            <Nav/>
            <div>{
                product.map((item)=>(
                    <div key={item.id}>
                        <h2>{item.product}</h2>
                        <h5>{item.description}</h5>
                        <h3>{item.price}</h3>
                    </div>
                ))}
                <form onSubmit={handlesubmit}>
                    <input type="number" value={quantity} min="1" placeholder="Enter quantity" onChange={(e)=>setquantity(e.target.value)}/>
                    <textarea value={address} placeholder="address" onChange={(e)=>setaddress(e.target.value)}/>
                    <button type="submit">place-order</button>
                </form>
            </div>
        </div>
    );
}
export default Buy