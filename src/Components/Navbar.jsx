import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../authentication/AuthProvider';
const Navbar = () => {
    const{user,logout}=useContext(AuthContext)
    const name=user?.displayName
    console.log(name,'displayname')
    const handleLogout=()=>{
        logout()
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    }
    const navlink=<>
      <Link><li className='px-5'>Home</li></Link>     
      <Link><li className='px-5'>About</li></Link>     
      <Link><li className='px-5'>Contact</li></Link>     
      <Link to='/register'><li className='px-5'>Register</li></Link>     
    </>
    return (
        <div>
           <div className="navbar bg-base-100 lg:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-5 text-xl ">
      {navlink}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user?
        <button onClick={handleLogout} className='btn'>{name} Log out</button>
        :
        <Link to='/login'><button className='btn'> Login</button></Link>
    }
  </div>
</div>            
        </div>
    );
};

export default Navbar;