import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import yoga3 from "../../../assets/images/yoga3.jpg"
import yoga6 from "../../../assets/images/yoga6.jpg"
import yoga7 from "../../../assets/images/yoga7.jpg"
import yoga8 from "../../../assets/images/yoga8.jpg"

const Banner = () => {
    return (
        <AwesomeSlider>
            <div>
                <img src={yoga3} alt="" />
             
            </div>

            <div>
                <img src={yoga7} alt="" />

            </div>

            <div><img src={yoga8} alt="" /></div>
            <div><img src={yoga6} alt="" /></div>

        </AwesomeSlider>
    );
};

export default Banner;