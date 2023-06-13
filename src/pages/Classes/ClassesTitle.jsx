import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";





const ClassesTitle = ({ title }) => {
    const { image, name, price, instructor, available, _id } = title
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = title => {
        console.log(title)
        if (user && user.email) {
            const cartTitle = { classTitleId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(cartTitle)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login to yoga class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
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

                        <button onClick={() => handleAddToCart(title)} className="btn btn-outline btn-error bg-slate-100  border-0 border-b-4 mt-4">Add to Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesTitle;