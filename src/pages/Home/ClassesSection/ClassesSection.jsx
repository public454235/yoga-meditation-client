import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassTitle from "../ClassTitle/ClassTitle";


const ClassesSection = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data =>{ 
                const aerialYoga = data.filter(title=> title.category === 'Aerial_yoga')
                setClasses(aerialYoga)})
    }, [])
    return (
        <>
            <section>
                <SectionTitle
                    heading={'Classes Section'}
                    subHeading={'We at KRIYA provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.'}
                ></SectionTitle>
                <div className="grid md:grid-cols-3 gap-10 my-16">
                    {
                        classes.map(title => <ClassTitle
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