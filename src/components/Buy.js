import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import "../styles/buy.css"
import { useNavigate } from "react-router-dom";
function Buy(){
    const {productid}=useParams();
    const [product,setdata]=useState(null)
    const [quantity,setquantity]=useState(1)
    const [address,setaddress]=useState("")
    const [phone,setphone]=useState()
    useEffect(()=>{
        fetch(`http://localhost:5000/product/buy/${productid}`)
        .then(res=>res.json())
        .then(data=>setdata(data))
        .catch(err=>console.log(err))
    },[productid])
    const navi=useNavigate();
    const cartid =localStorage.getItem("cartid")
      const userid=localStorage.getItem("userid")
      if(!cartid|| !userid){
        alert("please login")
        navi("/")
        return
      }
    const handlesubmit=(e)=>{
        e.preventDefault()
        const order={
            productid:productid,
            productname:product.product,
            productprice:product.prize,
            phone,
            quantity,
            address,
            total:quantity*product.prize
        }
        fetch("http://localhost:5000/order/place",{
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
            <div className="buy-page">{
                product && (
          <div key={product.id} className="product">
            <h2>{product.product}</h2>
            <h5>{product.description}</h5>
            <h3>${product.prize}</h3>
          </div>
        )}
                <form onSubmit={handlesubmit} className="order-details">
                    <h3>Enter the details</h3>
                    <div className="sub-item">
                    <label>Enter quantity</label>
                    <input type="number" value={quantity} min="1" placeholder="Enter quantity" onChange={(e)=>setquantity(e.target.value)}/>
                    </div>
                    <div className="sub-item">
                        <label>Phone number</label>
                        <input type="number" value={phone} placeholder="9999988888" onChange={(e)=>setphone(e.target.value)}/>
                    </div>
                    <div className="sub-item">
                        <label>Enter your address</label>
                        <textarea value={address} placeholder="address" onChange={(e)=>setaddress(e.target.value)}/>

                    </div>

                    <button type="submit">place-order</button>
                </form>
            </div>
        </div>
    );
}
export default Buy