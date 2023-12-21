import {Outlet} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
const Routes = () => {
    return (
        <div>
             <Navbar></Navbar>            
               <Outlet/>             
             <Footer></Footer>
        </div>
    );
};

export default Routes;