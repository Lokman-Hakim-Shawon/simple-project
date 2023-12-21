import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";
import DashNavbar from "./DashNavbar";

const Dashboard = () => {
    return (
        <div>
            <DashNavbar></DashNavbar>            
             <Outlet></Outlet>
             <Footer></Footer>           
        </div>
    );
};

export default Dashboard;