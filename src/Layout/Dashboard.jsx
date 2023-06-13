import {Outlet} from "react-router-dom"
import { Link } from "react-router-dom";
import { FaHome} from 'react-icons/fa';
import { FiLogOut} from 'react-icons/fi';



const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/'><FaHome></FaHome> Student Home</Link></li>
                        <li><Link>My Selected Classes</Link></li>
                        <li><Link>My Enrolled Classes</Link></li>
                        <li><Link><FiLogOut></FiLogOut> LogOut</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;