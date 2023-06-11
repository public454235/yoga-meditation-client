import { Link } from "react-router-dom";
import logo from '../../../assets/images/QSY logo final May 7 centered.png'
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }

    const navBarOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signUp'>Sign Up</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 fixed z-10 bg-block bg-opacity-30 lg:text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navBarOption}
                    </ul>
                </div>
                <img className="h-[50px]" src={logo} alt="" />
                <a className="btn btn-ghost normal-case text-xl">YOGA SCHOOL</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navBarOption}
                </ul>
            </div>
            <div className="text-blue-950 navbar-end space-x-3 font-bold text-2xl">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full ">
                            {user ?
                                <img title={user?.displayName} src={user?.photoURL} />
                                : <FaUserCircle size={30} className="mt-2 "></FaUserCircle>
                            }
                        </div>
                    </div>
                    {user?.email ?
                        <>
                            <button onClick={handleLogOut} className="btn btn-warning bg-opacity-80 py-0  text-white"><Link to='/login'>LogOut</Link></button>
                        </>
                        : <button className="btn btn-warning bg-opacity-80 py-0  text-white"><Link  to='/login'>Login</Link></button>
                    }

                </div>
        </div>
    );
};

export default NavBar;