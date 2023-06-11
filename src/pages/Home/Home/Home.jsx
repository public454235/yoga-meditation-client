import Banner from "../Banner/Banner";
import ClassesSection from "../ClassesSection/ClassesSection";
import Instructors from "../Instructors/Instructors";
import Parent from "../Parent/Parent";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parent></Parent>
            <ClassesSection></ClassesSection>
            <Instructors></Instructors>
            
        </div>
    );
};

export default Home;