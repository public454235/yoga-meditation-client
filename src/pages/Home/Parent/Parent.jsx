import yoga3 from "../../../assets/images/yoga3.jpg"


const Parent = () => {
    return (
        <div className="hero min-h-screen bg-base-200 lg:px-36 mb-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2">
                    <img src={yoga3} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold">Parent & Peanut</h1>
                    <p className="py-6">Come practice yoga with your baby in a supportive environiment. This is a wonderful way to get out of the house with your little one and enjoy some gentle exercise to take care of your body and connect with your baby
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Parent;