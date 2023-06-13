import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import yoga3 from "../../../assets/images/yoga8.jpg"
import yoga6 from "../../../assets/images/yoga3.jpg"
import yoga7 from "../../../assets/images/yoga6.jpg"
import yoga8 from "../../../assets/images/yoga7.jpg"

const Banner = () => {
    return (
        <AwesomeSlider>
            <div className='relative'>
                <img src={yoga3} alt="" />
                <div>
                    <div className='z-10 bg-slate-950 bg-opacity-60 absolute inset-0 justify-center flex flex-col items-center text-white text-5xl uppercase font-bold h-full text-center px-16'>
                        <h1>Welcome to Queen Street Yoga</h1>
                    </div>
                    <div>
                        <p className='absolute inset-0 justify-center flex flex-col text-white items-center md:mt-20 mt-32'>A haven of yoga, meditation and creative arts.</p>
                    </div>
                </div>

            </div>

            <div className='relative'>
                <img src={yoga7} alt="" />
                <div>
                    <div className='z-10 bg-slate-950 bg-opacity-60 absolute inset-0 justify-center flex flex-col items-center text-white text-5xl uppercase font-bold h-full text-center px-16'>
                        <h1>Welcome to Queen Street Yoga</h1>
                    </div>
                    <div>
                        <p className='absolute inset-0 justify-center flex flex-col text-white items-center md:mt-20 mt-32'>A haven of yoga, meditation and creative arts.</p>
                    </div>
                </div>

            </div>

            <div className='relative'>
                <img src={yoga8} alt="" />
                <div>
                    <div className='z-10 bg-slate-950 bg-opacity-60 absolute inset-0 justify-center flex flex-col items-center text-white text-5xl uppercase font-bold h-full text-center px-16'>
                        <h1>Welcome to Queen Street Yoga</h1>
                    </div>
                    <div>
                        <p className='absolute inset-0 justify-center flex flex-col text-white items-center md:mt-20 mt-32'>A haven of yoga, meditation and creative arts.</p>
                    </div>
                </div>

            </div>
            <div className='relative'>
                <img src={yoga6} alt="" />
                <div>
                    <div className='z-10 bg-slate-950 bg-opacity-60 absolute inset-0 justify-center flex flex-col items-center text-white text-5xl uppercase font-bold h-full text-center px-16'>
                        <h1>Welcome to Queen Street Yoga</h1>
                    </div>
                    <div>
                        <p className='absolute inset-0 justify-center flex flex-col text-white items-center md:mt-20 mt-32'>A haven of yoga, meditation and creative arts.</p>
                    </div>
                </div>

            </div>

        </AwesomeSlider>
    );
};

export default Banner;