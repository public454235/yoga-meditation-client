import { Helmet } from "react-helmet-async";
import Manage from "./Manage";
import useClass from "../../../hooks/useClass";



const ManageClasses = () => {
    const [classes] = useClass()
    
    return (
        <>
            <Helmet>
                <title>Yoga | Manage Class</title>
            </Helmet>
            <div className="w-full">
                <h1 className="text-4xl text-center bg-slate-900 text-slate-600 uppercase font-bold pt-10 pb-10">Total Classes:  {classes.length}</h1>
                </div>
            <div>  
                <div className="grid md:grid-cols-2 gap-10 mb-16 mt-4">
                    {
                        classes.map(item => <Manage item={item} key={item._id}></Manage>)
                    }

                </div>
            </div></>
    );
};

export default ManageClasses;