import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClass from "../../hooks/useClass";
import ClassesTitle from "./ClassesTitle";


const Classes = () => {

    const [classes] = useClass()
    return (
        <>
            <SectionTitle
                heading={'All Class'}
            ></SectionTitle>
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