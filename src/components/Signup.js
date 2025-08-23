import { useState } from "react";

function Signup() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="Enter name" onChange={handlechange} />
        <input type="email" name="email" placeholder="Enter email" onChange={handlechange} />
        <input type="password" name="password" placeholder="Enter password" onChange={handlechange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
