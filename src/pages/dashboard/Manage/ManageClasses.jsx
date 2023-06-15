import { Helmet } from "react-helmet-async";
import Manage from "./Manage";
import useInstructors from "../../../hooks/useInstructors";


const ManageClasses = () => {
    const [instructors]= useInstructors()
    return (
        <>
            <Helmet>
                <title>Yoga | Manage Class</title>
            </Helmet>
            <div className='mt-10'>

                <h1 className='text-3xl text-center font-bold'>Total Classes:  {instructors.length}</h1>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10 mb-8'>
                    {
                        instructors.map(item => <Manage item={item} key={item._id}></Manage>)
                    }

                </div>
            </div></>
    );
};

export default ManageClasses;