import { useNavigate } from "react-router-dom";
function Logout(){
    const navi=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("token")
        navi("/")
    }
    return(
        <p onClick={handleLogout}>
            logout
        </p>
    )
}
export default Logout;