import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
    const [task,settask]=useState([])
    console.log(task)
    useEffect(()=>{
        axios.get('https://sample-project-server.vercel.app/task')
        .then(result=>settask(result.data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
            task.map(data=><div key={data._id} className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={data.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.deadline}</p>
              <p>{data.des}</p>
              <div className="card-actions">
                <Link to='/details' state={data}><button className="btn bg-blue-100">Details</button></Link>
                <Link to='/draganddrop' state={data}><button className="btn bg-blue-100">Submit Task</button></Link>
              </div>
            </div>
          </div>)
           }     
        </div>
    );
};

export default DashboardHome;