import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from "../authentication/AuthProvider";
import axios from "axios";
const Register = () => {
    const {creatuser,google,updateprofile}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const file=form.file.files[0]
        const imgbb_key='ceccd7f28cf74921bd1fb98402d6032f'
        const email=form.email.value
        const password=form.password.value
        console.log(name,email,password,file)
        const formData=new FormData()
       formData.append('image',file)
       axios.post(`https://api.imgbb.com/1/upload?key=${imgbb_key}`,formData)
       .then(result=>{
        const img=result.data.data.url
        console.log(result.data.data.url,'photo')
           creatuser(email,password)
           .then(result=>{
               console.log(result)
               updateprofile(name,img)
                .then(result=>console.log(result,'updatename'))
                .catch(error=>console.log(error))
            })
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
            <span className="label-text">Profile Picture</span>
          </label>
          <input type="file" name='file' className="input input-bordered" required />
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