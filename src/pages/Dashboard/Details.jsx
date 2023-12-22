import { Link, useLocation } from "react-router-dom";

const Details = () => {
    const location =useLocation()
    const data=location.state
    console.log(data,'location')
    return (
        <div className="">
           
            <div  className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={data.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.deadline}</p>
              <p>{data.des}</p>
              <div className="card-actions">
                <Link to='/submit'><button className="btn bg-blue-100">Submit Your Task</button></Link>
              </div>
            </div>
          </div>
                
        </div>
    );
};

export default Details;