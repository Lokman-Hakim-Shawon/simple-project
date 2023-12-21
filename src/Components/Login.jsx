
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
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