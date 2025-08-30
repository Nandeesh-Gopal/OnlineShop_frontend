import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
function Cart(){
    const navi =useNavigate();
    const token=localStorage.getItem("token")
    if(!token){
        alert("please login first")
        navi("/login")
    }
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
            {
                product.map((item)=>(
                    <div key={item.id}>
                        <h2>{item.product}</h2>
                        <h5>{item.description}</h5>
                        <h3>{item.prize}</h3>
                    </div>
                ))
            }
        </div>
    )
}
export default Cart