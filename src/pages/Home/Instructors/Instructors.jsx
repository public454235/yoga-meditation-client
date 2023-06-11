
import InstructorsTitles from "./InstructorsTitles";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useInstructors from "../../../hooks/useInstructors";


const Instructors = () => {

    const [instructors] = useInstructors()
    const IyengarYoga = instructors.filter(title=> title.category === 'Iyengar_yoga')

    
    return (
        <>
        <section>
            <SectionTitle
                heading={'Instructors Section'}
                subHeading={'We at KRIYA provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.'}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10 my-16">
                {
                    IyengarYoga.map(title => <InstructorsTitles
                     key={title._id}
                     title={title}
                    ></InstructorsTitles> )
                }
            </div>

        </section>
    </>
    );
};

export default Instructors;