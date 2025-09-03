import { useState } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
function Login(){
    const navi=useNavigate();
    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })
    const handlechange= a =>{
        setformdata({...formdata,[a.target.name]:a.target.value})
    }
    const handlesubmit= async (e)=>{
        e.preventDefault()
        const res = await fetch("http://localhost:5000/login",{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formdata),
            mode:"cors"
        })
        const data =await res.json()
        if(data.message==="Login success"){
            localStorage.setItem("token",data.token)
            localStorage.setItem("userid",data.userid)
            localStorage.setItem("cartid",data.cart_id)
            navi("/")
        }
        else{
            alert(data.message)
        }

    }
    return(
        <div>
        <Nav/>
        <div className="container">
        <div className="signup">
        <form className="signup-form" onSubmit={handlesubmit}>
            <h1>Login</h1>
            <input type="email" name="email" onChange={handlechange}/>
            <input type ="password" name="password" onChange={handlechange}/>
            <button>submit</button>
        </form>
        </div></div>
        </div>
    );
}
export default Login;