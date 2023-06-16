import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://meditation-server-assignment12.vercel.app/users')
        return res.json()
    })

    const handleMakeAdmin = user => {
        fetch(`https://meditation-server-assignment12.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(`https://meditation-server-assignment12.vercel.app/users/instructors/${user._id}`, {
            method: 'PATCH'

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.name} is an instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    return (
        <div className='w-full'>
            <div className="uppercase font-semibold items-center flex justify-evenly h-[60px]">
            <h1 className='text-3xl font-bold'>Total User: {users.length}</h1>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    { }
                    <thead>
                        <tr className="text-center bg-slate-950 bg-opacity-80 text-white">
                            <th>#</th>
                            <th>User Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td className="text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">{user.name}</td>
                                <td className="text-center">{user.email}</td>
                                <td className="text-center">{user.role}</td>


                                <td className="text-center">
                                    {
                                        user.role === "admin" ?
                                            <button className="btn btn-secondary btn-xs " disabled> Admin</button>

                                            :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-secondary btn-xs"> Admin</button>
                                    }
                                </td>
                                <td className="text-center">
                                    {
                                        user.role === 'instructors' ?
                                            <>
                                                <button className="btn btn-primary btn-xs " disabled> Instructor</button>
                                            </> :
                                            <> <button onClick={() => handleMakeInstructor(user)} className="btn btn-primary btn-xs"> Instructor</button>
                                            </>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;