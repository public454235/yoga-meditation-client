
import { Helmet } from 'react-helmet-async';
import Enroll from '../Enroll/Enroll';
import useInstructors from '../../../hooks/useInstructors';

const MyEnrollClass = () => {
    const [instructors] = useInstructors()
    return (
        <>
            <Helmet>
                <title>Yoga || My Class</title>
            </Helmet>
            <div className='mt-10'>

                <h1 className='text-4xl text-center bg-slate-900 text-slate-600 uppercase font-bold py-8'>My All Class </h1>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10 mb-8'>
                    {
                        instructors.map(item => <Enroll
                            item={item}
                            key={item._id}
                        ></Enroll>)
                    }

                </div>
            </div></>
    );
};

export default MyEnrollClass;