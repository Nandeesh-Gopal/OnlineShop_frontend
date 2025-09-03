import { useState,useEffect} from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import "../styles/home.css"
function Home(){
    const [product,setproduct]=useState([])
    const navi= useNavigate()
    useEffect(()=>{
      fetch("http://localhost:5000/products")
      .then((res)=>res.json())
      .then((data)=>setproduct(data))
      .catch((err)=>console.log("err in fetch",err))
    },[])
    const handleBuy =(productId)=>{
      navi(`/product-buy/${productId}`)
    }
    const handleAddCart=(productid)=>{
      const cartid =localStorage.getItem("cartid")
      const userid=localStorage.getItem("userid")
      if(!cartid|| !userid){
        alert("please login")
        navi("/")
        return
      }
      fetch("http://localhost:5000/add-to-cart",{
        method:"post",
        headers:{"content-Type":"application/json"},
        body: JSON.stringify({cartid,productid,quantity:1})
      })
      .then(res=>res.json())
      .then(data=>alert(data.message))
      .catch((err)=>{
        alert(err)
      })

    }
    return (
    <div>
      <Nav/>
      <div className="banner-slider">
        <div className="banner-slides">
          <img src="/assets/banner/banner1.webp" alt="banner1"/>
          <img src="/assets/banner/banner2.webp" alt="banner2"/>
        </div>
      </div>
      <div className="product-group">
        {
          product.map((item)=>(
            <div className="product" key={item.id}>
              <h2>{item.product}</h2>
              <h5>{item.description}</h5>
              <h3>{item.prize}</h3>
              <button onClick={()=>handleBuy(item.id)}>buy now</button>
              <button onClick={()=>handleAddCart(item.id)}>Add to cart</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
export default Home;