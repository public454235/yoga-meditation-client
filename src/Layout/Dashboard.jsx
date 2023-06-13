import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { SiGoogleclassroom } from 'react-icons/si';
import { GiClassicalKnowledge } from 'react-icons/gi';



const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-orange-400">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">

                        <li><NavLink to='/'><FaHome></FaHome> Student Home</NavLink></li>
                        <li><NavLink to='/dashboard/myClass'><SiGoogleclassroom></SiGoogleclassroom> My Selected Classes</NavLink></li>
                        <li><NavLink to='/dashboard/enrolled'><GiClassicalKnowledge></GiClassicalKnowledge> My Enrolled Classes</NavLink></li>
                        <li><NavLink><FiLogOut></FiLogOut> LogOut</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;