import { useEffect, useState } from "react";
import Nav from "./Nav";
import { data } from "react-router-dom";
function Cart(){
    const [product,setproduct]=useState([])
    useEffect(()=>{
        const cartid=localStorage.getItem("cartid")
        fetch(`http://localhost:5000/fetch-cart?cartid=${cartid}`)
        .then((res)=>res.json())
        .then((data)=>setproduct(data))
        .catch((err)=>console.log("err in fetch",err))
    })
    return(
        <div>
            <Nav/>

        </div>
    )
}
export default Cart