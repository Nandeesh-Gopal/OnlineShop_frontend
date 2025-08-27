import { useNavigate } from "react-router-dom";
function Logout(){
    const navi=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("userid");
        localStorage.removeItem("cartid"); 
        navi("/")
    }
    return(
        <p onClick={handleLogout}>
            logout
        </p>
    )
}
export default Logout;