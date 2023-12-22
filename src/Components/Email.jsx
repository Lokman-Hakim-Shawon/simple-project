import { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6dsk12g', 'template_kbmikq8', form.current, 'GzJCnzv2qNGyYuwaT')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "E-mail sending successfull ! ",
              showConfirmButton: false,
              timer: 1500
            });
        }, (error) => {
            console.log(error.text);
        });
    };
  
      return (
          <div>
             <h1 className="text-center underline text-4xl py-10">Your Feedback </h1>
             <div className="hero">
      <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
        <form className="card-body" ref={form} onSubmit={sendEmail}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="user_name" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="user_email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
            <textarea name="message" className="textarea textarea-bordered h-40" placeholder="Your message ....."></textarea>
           
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Send Feedback</button>
          </div>
        </form>
      </div>
  </div>            
          </div>
      );
  };
export default Email;