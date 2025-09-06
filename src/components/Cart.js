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
    const handlebuy=(productid)=>{
        navi(`/product-buy/${productid}`);
    }
    useEffect(()=>{
        const cartid=localStorage.getItem("cartid")
        fetch(`http://localhost:5000/cart/fetch?cartid=${cartid}`)
        .then((res)=>res.json())
        .then((data)=>setproduct(data))
        .catch((err)=>console.log("err in fetch",err))
    })
    return(
        <div>
            <Nav/>
            <h1>My Cart</h1>
            <div className="product-group">
            {
                product.map((item)=>(
                    <div key={item.id} className="product">
                        <h2>{item.product}</h2>
                        <h5>{item.description}</h5>
                        <h3>{item.prize}</h3>
                        <button onClick={()=>handlebuy(item.id)}>buy now</button>
                    </div>
                ))
            }</div>
        </div>
    )
}
export default Cart