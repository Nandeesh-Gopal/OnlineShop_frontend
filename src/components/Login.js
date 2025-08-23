import { useState } from "react";
import Nav from "./Nav";
function Login(){
    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })
    const handlechange= e =>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const handlesubmit= async (e)=>{
        e.preventDefault()
        const res = await fetch("http://localhost:5000/login",{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formdata)
        })
        const data =await res.json()
        alert(data.message)

    }
    return(
        <div>
        <Nav/>
        <div className="signup">
        <form className="signup-form" onSubmit={handlesubmit}>
            <h1>Login</h1>
            <input type="email" name="email" onChange={handlechange}/>
            <input type ="password" name="password" onChange={handlechange}/>
            <button>submit</button>
        </form>
        </div>
        </div>
    );
}
export default Login;