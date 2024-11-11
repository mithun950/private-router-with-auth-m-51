import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const Navbar = () => {

      const {user,signOutUser} = useContext(AuthContext);  // eibhabe ami auth context k useContext er maddhome share korte pari jei kono components e

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to="/register">Sign Up</NavLink></li>
    <li><NavLink to="/login" >Login</NavLink></li>

    {/* eta k private korar jonno use kora hoise ami jokhon signup korbo tokhon dhukte parbo ta chara dhukte parbo naa */}
   {
    user && <>
     <li><NavLink to="/order" >Orders</NavLink></li>
     <li><NavLink to="/profile" >Profile</NavLink></li>
     </>
   }
    
    
    </>

const handleSignOut = () => {
   signOutUser()
   .then((result) => {
    console.log('user sign out successfully',result)
   })
   .catch(error => {
    console.log('error ashece' , error)
   })
}


    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
           {
            user? <>
            
            
            
            <span>{user.email}</span>
            <a onClick={handleSignOut} className="btn">Log Out</a>
            
            </>
            
            : 
            <Link to="/login">Login</Link>
           }
        </div>
      </div>
    );
};

export default Navbar;