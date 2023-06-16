import { useKeenSlider } from "keen-slider/react"
import img1 from '../../../assets/images/yoga12.jpg'
import img2 from '../../../assets/images/yoga11.jpg'
import img3 from '../../../assets/images/yoga10.jpg'
import img4 from '../../../assets/images/yoga9.jpg'
import img5 from '../../../assets/images/yoga4.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import ReactImageZoom from 'react-image-zoom';


const Gallery = () => {

    const props = {width: 400, height: 250, zoomWidth: 500, img: "1.jpg"};

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 15,
        },
    })
    return (
        <>
        <SectionTitle
        heading={'Gallery'}
        
        ></SectionTitle>
            <div ref={sliderRef} className="keen-slider mb-8">
                <div className="keen-slider__slide number-slide1"><img src={img1} alt="" /></div>
                <div className="keen-slider__slide number-slide2"><img src={img2} alt="" /></div>
                <div className="keen-slider__slide number-slide3"><img src={img3} alt="" /></div>
                <div className="keen-slider__slide number-slide4"><img src={img4} alt="" /></div>
                <div className="keen-slider__slide number-slide5"><img src={img5} alt="" /></div>
                <div className="keen-slider__slide number-slide6"><img src={img1} alt="" /></div>
            </div>
        </>
    );
};

export default Gallery;