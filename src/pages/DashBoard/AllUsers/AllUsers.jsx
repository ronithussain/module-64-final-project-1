import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users');
            return res.data;
        }
    })
    // console.log(users)

    // delete functionality
    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
            }
            // deleted cart item-------------
            axiosSecure.delete(`/users/${user._id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch(); // deleted jeno ui te update hoy sejonno refetch call kore holo
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
        });

    }

    // update admin functionality:
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
            <div className='flex justify-between my-6'>
                <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto mt-8 w-full">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="bg-green-300 border-4 border-green-400">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Role</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {user.name}
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    {/* user er role jodi admin hoy tahole admin dekhabo r role jodi admin na hoy tahole button ke dekhabo */}
                                     {
                                        user.role == 'admin' ? 'Admin' 
                                        : 
                                        <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-ghost text-lg bg-orange-400 text-white"><FaUser />
                                    </button>
                                     }
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(user)}
                                        className="btn btn-ghost text-lg bg-orange-400 text-white"><FaTrashAlt />
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;