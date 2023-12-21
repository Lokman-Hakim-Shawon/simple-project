import axios from "axios";
import { useEffect, useState } from "react";

const DashboardHome = () => {
    const [task,settask]=useState([])
    console.log(task)
    useEffect(()=>{
        axios.get('http://localhost:5000/task')
        .then(result=>settask(result.data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div className="grid grid-cols-3 gap-5">
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
                <button className="btn bg-blue-100">Details</button>
              </div>
            </div>
          </div>)
           }     
        </div>
    );
};

export default DashboardHome;