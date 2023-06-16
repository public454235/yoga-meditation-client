import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyClass = () => {
    const [cart, refetch] = useCart()
    console.log(cart)
    const total = cart.reduce((sum, item) => item.price + sum, 0)


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://meditation-server-assignment12.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Yoga || My Class</title>
            </Helmet>
            <div className="uppercase font-semibold items-center flex justify-evenly h-[60px]">
                <h2 className="text-3xl font-bold">Total Class: {cart.length}</h2>
                <h2 className="text-3xl font-bold">Total price: {total}</h2>
            </div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-center bg-slate-950 bg-opacity-80 text-white">
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Pay Button</th>
                            <th>delete Button</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    <div className="text-center">
                                        {index + 1}
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-center">
                                        {item.name}
                                    </div>
                                </td>
                                <td className="text-center"><Link to='/dashboard/payment'><button className="btn btn-success btn-sm">pay</button></Link></td>
                                <td>
                                    <div className="text-center">
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-400 text-white"><FaTrashAlt></FaTrashAlt></button>
                                    </div>

                                </td>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyClass;