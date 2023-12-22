
const Info = () => {
    return (
        <div className="bg-blue-100 p-10 my-10">
            <h1 className="text-center text-2xl md:text-4xl lg:text-5xl  font-bold underline">Contact us</h1>
          <div className="lg:flex justify-between  text-xl">
          <div className="">
            <div className="text-lg lg:text-3xl font-bold underline text-center pb-5">Social</div>
             <h1 className="text-xs">Phone Number : +8801404142439</h1>
             <h1 className="text-xs">Whats App : 01404142439</h1>
             <h1 className="text-xs">Facebook : facebook.com/Lokman Hakim Shawon</h1>
             <h1 className="text-xs">Github : github.com/Lokman-hakim-shawon</h1>
          </div>  
          <div>
            <div className="text-lg lg:text-3xl  font-bold underline text-center pb-5">Local</div>
            <div className="flex flex-col text-xs  space-y-5 justify-center ">
              <h1>Gazipura Sataish</h1>
              <h1>Tongi, Gazipur</h1>
            </div>
          </div>
          </div>
        </div>
    );
};

export default Info;