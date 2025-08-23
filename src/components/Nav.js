import {Link} from "react-router-dom"
function Nav(){
    return (
        <div>
            <nav className='nav-bar'>
                <h1>Online Shop</h1>
                <input type='text' placeholder='search'/>
                <div className='sub-nav'>
                    <Link to='/signup'>signup</Link>
                    <Link to='/login'>login</Link>
                </div>
            </nav>
        </div>
    )
}
export default Nav;