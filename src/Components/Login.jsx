
import { Link,useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../authentication/AuthProvider';

const Login = () => {
    const {login,google}=useContext(AuthContext)
    const Navigate= useNavigate()
    const handleLogin=e=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)
        login(email,password)
        .then(result=>{
            console.log(result)
            Navigate('/')
        })
        .catch(error=>console.log(error))
    }
    const handlegoogle=()=>{
        google()
        .then(result=>{
            console.log(result)
            Navigate('/')
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
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
          <button className="btn bg-blue-200">Login</button>
          <button onClick={handlegoogle} className="btn "><FcGoogle className='text-2xl'/> Login with Google</button>
        </div>
        <label className="label">
            <p>Are you new user? <span className="text-green-500 underline"><Link to='/register'>Register</Link></span></p>
          </label>
      </form>
    </div>
</div>            
        </div>
    );
};

export default Login;