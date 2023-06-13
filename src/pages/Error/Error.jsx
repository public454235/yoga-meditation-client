import { Link } from "react-router-dom";
import error from '../../assets/error/error.jpg'


const Error = () => {
    return (
        <div>
            <img className="mx-auto h-[400px]" src={error} alt="" />
            <div className="text-center">
                <Link to='/'><button className="btn btn-primary">Go To Home</button></Link>
            </div>
        </div>
    );
};

export default Error;