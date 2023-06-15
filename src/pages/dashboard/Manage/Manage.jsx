

const Manage = ({item}) => {
    const { name, image, price, available, instructor } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body flex flex-col">
                <h2 className="card-title">Instructor Name: {instructor}</h2>
                <h2 className="card-title">Class Name: {name}</h2>
                <p>Price: ${price}</p>
                <p>Available: {available}</p>
                
                <div className="flex justify-between">
                    <button className="btn btn-outline btn-neutral bg-slate-100   mt-4">Approve</button>
                    <button className="btn btn-outline btn-neutral bg-slate-100   mt-4">Deny</button>
                    <button className="btn btn-outline btn-neutral bg-slate-100    mt-4">send feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Manage;