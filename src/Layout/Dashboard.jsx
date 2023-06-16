import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { SiGoogleclassroom } from 'react-icons/si';
import { GiClassicalKnowledge } from 'react-icons/gi';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";



const Dashboard = () => {
    const { logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const [adminRole] = useAdmin()
    console.log(adminRole)
    // const isAdmin = true;
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
                        

                        {
                            adminRole === 'admin' ?
                                <>
                                    <li><NavLink to='/'><FaHome></FaHome> Admin Home</NavLink></li>
                                    <li><NavLink to='/dashboard/manageUsers'><SiGoogleclassroom></SiGoogleclassroom> Manage Users</NavLink></li>
                                    <li><NavLink to='/dashboard/manageClass'><GiClassicalKnowledge></GiClassicalKnowledge> Manage Classes</NavLink></li>
                                    <li><button onClick={handleLogOut}><NavLink className="flex justify-center items-center "><FiLogOut></FiLogOut> LogOut</NavLink></button></li>
                                </>
                                :

                                <>
                                    {
                                        adminRole === 'instructors' ?
                                            <>
                                                <li><NavLink to='/'><FaHome></FaHome> Instructor Home</NavLink></li>
                                                <li><NavLink to='/dashboard/addClass'><SiGoogleclassroom></SiGoogleclassroom> Add a Class</NavLink></li>
                                                <li><NavLink to='/dashboard/enrolled'><GiClassicalKnowledge></GiClassicalKnowledge> My Classes</NavLink></li>
                                                <li><button onClick={handleLogOut}><NavLink className="flex justify-center items-center "><FiLogOut ></FiLogOut> LogOut</NavLink></button></li>
                                            </>


                                            :

                                            <>
                                                {adminRole === 'student' ?

                                                    <>
                                                        <li><NavLink to='/'><FaHome></FaHome> Student Home</NavLink></li>
                                                        <li><NavLink to='/dashboard/myClass'><SiGoogleclassroom></SiGoogleclassroom> My Selected Classes</NavLink></li>
                                                        <li><NavLink to='/dashboard/enrolled'><GiClassicalKnowledge></GiClassicalKnowledge> My Enrolled Classes</NavLink></li>
                                                        <li><button onClick={handleLogOut}><NavLink className="flex justify-center items-center "><FiLogOut></FiLogOut> LogOut</NavLink></button></li>
                                                    </>
                                                    :
                                                    <>
                                                       
                                                        <li><NavLink to='/'><FaHome></FaHome> Student Home</NavLink></li>
                                                        <li><NavLink to='/dashboard/myClass'><SiGoogleclassroom></SiGoogleclassroom> My Selected Classes</NavLink></li>
                                                        <li><NavLink to='/dashboard/enrolled'><GiClassicalKnowledge></GiClassicalKnowledge> My Enrolled Classes</NavLink></li>
                                                        <li><button onClick={handleLogOut}><NavLink className="flex justify-center items-center "><FiLogOut></FiLogOut> LogOut</NavLink></button></li>
                                                    </>
                                                }
                                            </>

                                    }
                                </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;