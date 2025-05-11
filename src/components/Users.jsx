import React from 'react'
import { toast } from 'react-toastify';

const Users = (props) => {
    const { users, setusers } = props;

    const deleteHandler = (id) =>{
        const filteredusers = users.filter(
            (user) => (user.id != id)
        )

        setusers(filteredusers);

       toast.success('user deleted succesfully')

    }

    const userlist = users.map((user) => {
        return (
            <li  key={user.id}
                className="pt-1 pb-1 pl-4 pr-4 w-[100%] bg-gray-600 flex items-center justify-between">
                <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>

                <p className='text-red-600'
                    onClick={() => deleteHandler(user.id)}>
                    delete
                </p>
            </li>
        )
    })

    return (
        <div>
            <ul className='flex flex-col gap-4' >
                {users.length !== 0 ? userlist : (
                    <h1 className='text-red-500'>Data is not available</h1>
                )}
            </ul>
        </div>
    )
}

export default Users