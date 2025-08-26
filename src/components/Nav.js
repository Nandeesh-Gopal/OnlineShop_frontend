import {Link} from "react-router-dom"
import Logout from "./Logout";
function Nav(){
    const token = localStorage.getItem("token")
    return (
        <div>
            <nav className='nav-bar'>
                <h1>Online Shop</h1>
                <input type='text' placeholder='search'/>
                <div className='sub-nav'>
{
                token ?(
                <>
                    <Link to="/">home</Link>
                    <Link to="/partner">business partner</Link>
                    <Link to="/cart">cart</Link>
                    <Logout/>
                </>
                ):(
                <>
                    <Link to="/">home</Link>    
                    <Link to='/signup'>signup</Link>
                    <Link to='/login'>login</Link>
                </>
                )}
                    
                    
                </div>
            </nav>
        </div>
    )
}
export default Nav;