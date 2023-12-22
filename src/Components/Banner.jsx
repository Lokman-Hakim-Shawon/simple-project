import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";
import img from '../assets/images/img1.webp'
const Banner = () => {
  const {user}=useContext(AuthContext)
    return (
        <div>
           <div className="hero max-h-screen" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-xl md:text-3xl lg:text-5xl font-bold">Hello {user?.displayName}</h1>
      <p className="mb-5 text-sm md:text-lg lg:text-xl">Welcome to this website. Here you will find more web development and all technologys task. we  think you like most those task</p>
      <Link to='/dashboard'><button  className="btn bg-blue-200">Go to Dashboard</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;