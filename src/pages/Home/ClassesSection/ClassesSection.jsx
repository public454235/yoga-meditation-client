
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClass from "../../../hooks/useClass";
import ClassTitle from "../ClassTitle/ClassTitle";


const ClassesSection = () => {
    const [classes] = useClass()
    const AerialYoga = classes.filter(title=> title.category === 'Aerial_yoga')
   
   
    
    return (
        <>
            <section>
                <SectionTitle
                    heading={'Classes Section'}
                    subHeading={'We at KRIYA provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.'}
                ></SectionTitle>
                <div className="grid md:grid-cols-3 gap-10 my-16">
                    {
                        AerialYoga.map(title => <ClassTitle
                            key={title._id}
                            title={title}
                        ></ClassTitle>)
                    }
                </div>

            </section>
        </>
    );
};

export default ClassesSection;