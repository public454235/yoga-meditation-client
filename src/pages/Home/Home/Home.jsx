import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ClassesSection from "../ClassesSection/ClassesSection";
import Instructors from "../Instructors/Instructors";
import Parent from "../Parent/Parent";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Yoga || Home</title>
            </Helmet>
            <Banner></Banner>
            <Parent></Parent>
            <ClassesSection></ClassesSection>
            <Instructors></Instructors>

        </div>
    );
};

export default Home;