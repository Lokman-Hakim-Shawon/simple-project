import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from "../authentication/AuthProvider";
const Register = () => {
    const {creatuser,google,updateprofile}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        console.log(name,email,password)
        creatuser(email,password)
        .then(result=>{
            console.log(result)
            updateprofile(name)
            .then(result=>console.log(result,'updatename'))
            .catch(error=>console.log(error))
        })
        .catch(error=>console.log(error))
    }
    const handlegoogle=()=>{
        google()
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6 space-y-5">
          <button className="btn btn-primary">Register</button>
          <button onClick={handlegoogle} className="btn "><FcGoogle className='text-2xl'/>Register with Google</button>
        </div>
        <label className="label">
            <p>Have an account? <span className="text-green-500 underline"><Link to='/login'>Login</Link></span></p>
          </label>
      </form>
    </div>
</div>            
        </div>
    );
};

export default Register;