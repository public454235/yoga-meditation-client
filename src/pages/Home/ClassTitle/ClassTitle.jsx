import { Link } from "react-router-dom";

const ClassTitle = ({ title }) => {
    const { image, name, price, instructor, available } = title
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body flex flex-col">
                    <h2 className="card-title">Instructor Name: {instructor}</h2>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Price: {price}</p>
                    <p>Available: {available}</p>
                    <div className="card-actions">
                        <Link to='/classes'>
                            <button className="btn btn-outline btn-error bg-slate-100  border-0 border-b-4 mt-4">Add to Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassTitle;