

const InstructorsTitles = ({title}) => {

    const { image, name, email } = title
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body flex flex-col">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Price: {email}</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCart(title)} className="btn btn-outline btn-error bg-slate-100  border-0 border-b-4 mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorsTitles;