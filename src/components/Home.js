import React, { useState,useEffect} from "react";
import Nav from "./Nav";
function Home(){
    const [product,setproduct]=useState([])
    useEffect(()=>{
      fetch("http://localhost:5000/products")
      .then((res)=>res.json())
      .then((data)=>setproduct(data))
      .catch((err)=>console.log("err in fetch",err))
    },[])
    return (
    <div>
      <Nav/>
      <div className="product-group">
        {
          product.map((item)=>(
            <div className="product" key={item.id}>
              <h2>{item.product}</h2>
              <h5>{item.description}</h5>
              <h3>{item.prize}</h3>
              <button>buy now</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
export default Home;