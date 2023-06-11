import useClass from "../../hooks/useClass";
import ClassTitle from "../Home/ClassTitle/ClassTitle";


const Classes = () => {

    const [classes]= useClass()
    return (
        <div className="grid md:grid-cols-3 gap-10 my-16">
            {
                classes.map(title=> <ClassTitle
                   key={title._id}
                   title={title}
                ></ClassTitle>)
            }
        </div>
    );
};

export default Classes;