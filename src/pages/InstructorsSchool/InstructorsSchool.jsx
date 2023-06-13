import useInstructors from "../../hooks/useInstructors";
import InstructorsTitles from "../Home/Instructors/InstructorsTitles";


const InstructorsSchool = () => {
    const [instructors] = useInstructors()
    return (
        <>
            <h1 className="text-4xl text-center text-slate-700 uppercase font-bold pt-28 pb-10">All Instructors</h1>
            
            <div className="grid md:grid-cols-3 gap-10 mb-16">
                {
                    instructors.map(title => <InstructorsTitles
                        key={title._id}
                        title={title}
                    ></InstructorsTitles>)
                }
            </div>
        </>
    );
};

export default InstructorsSchool;