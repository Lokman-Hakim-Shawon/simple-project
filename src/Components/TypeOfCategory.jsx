import { Link } from "react-router-dom";

const TypeOfCategory = () => {
    return (
        <div className=" my-10">
            <h1 className="text-3xl font-bold underline text-center mb-5">Web Development</h1>
            <div className="grid grid-cols-2 gap-5 p-10 bg-blue-100">
            <div className="card bg-blue-200">
  <div className="card-body">
    <h2 className="card-title">HTML</h2>
    <p>You can find all HTML task here and you can post task.</p>
    <div className="card-actions justify-end">
      <Link to='/dashboard'><button className="btn">Watch All Task</button></Link>
    </div>
  </div>
</div>
{/* 2nd card */}
<div className="card bg-blue-200">
  <div className="card-body">
    <h2 className="card-title">CSS</h2>
    <p>You can find all CSS task here and you can post any CSS task.</p>
    <div className="card-actions justify-end">
    <Link to='/dashboard'><button className="btn">Watch All Task</button></Link>
    </div>
  </div>
</div>
{/* 3rd card */}
<div className="card bg-blue-200">
  <div className="card-body">
    <h2 className="card-title">TAILWIND</h2>
    <p>You can find all TAILWIND CSS here and you can post any TAILWIND CSS task.</p>
    <div className="card-actions justify-end">
    <Link to='/dashboard'><button className="btn">Watch All Task</button></Link>
    </div>
  </div>
</div>
{/* 4th card */}
<div className="card bg-blue-200">
  <div className="card-body">
    <h2 className="card-title">JAVASCRIPT</h2>
    <p>You can find all JAVASCRIPT task here and you can post any JAVASCRIPT task.</p>
    <div className="card-actions justify-end">
    <Link to='/dashboard'><button className="btn">Watch All Task</button></Link>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default TypeOfCategory;