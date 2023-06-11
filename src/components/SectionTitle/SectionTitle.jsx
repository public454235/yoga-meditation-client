import logos from '../../assets/images/QSY logo final May 7 centered.png'


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-4xl uppercase font-bold py-4">{heading}</h3>
            <div className="divider "><img className='h-[50px]' src={logos} alt="" /></div>
            <p className="text-yellow-600 mb-2">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;