import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSigIn = () => {
        googleSignIn()
        .then(result=>{
            const loggedUser=result.loggedUser
            console.log(loggedUser)
            navigate(from, {replace: true});
        })
    }
    return (
        <div>
            <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                <button className="flex justify-center items-center space-x-2" onClick={handleGoogleSigIn}><FcGoogle  size={32} /><p>Continue with Google</p></button>

                    
            </div>
            
        </div>
    );
};

export default SocialLogin;