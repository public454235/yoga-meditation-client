import useClass from "../../hooks/useClass";
import ClassesTitle from "./ClassesTitle";


const Classes = () => {

    const [classes] = useClass()
    return (
        <>
            <h1 className="text-4xl text-center text-slate-700 uppercase font-bold pt-28 pb-10">All Classes</h1>
            <div className="grid md:grid-cols-3 gap-10 mb-16">
                {
                    classes.map(title => <ClassesTitle
                        key={title._id}
                        title={title}
                    ></ClassesTitle>
                    )
                }
            </div>
        </>
    );
};

export default Classes;