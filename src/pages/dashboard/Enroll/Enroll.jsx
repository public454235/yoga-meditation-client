// import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Enroll = ({ item }) => {
    const { name, image, email, } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            {/* <motion.div animate={{ y: 10 }} */}
            {/* transition={{ ease: "easeOut", duration: 2 }} className="card-body"> */}
            <div className="card-body flex flex-col">
                <h2 className="card-title">Instructor Name: {name}</h2>
                <h2 className="card-title">Email: {email}</h2>
                <div className="card-actions justify-end">
                </div>
                <Link className='w-full' > <button className="btn btn-outline btn-error bg-slate-100  border-0 border-b-4 mt-4">See classes</button></Link>
            </div>
            {/* </motion.div> */}
        </div >
    );
};


export default Enroll;