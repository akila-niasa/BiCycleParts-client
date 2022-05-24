import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
    fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
)
if (isLoading) {
    return <Loading />
}
    return (
        <div>
        <h3 className='text-xl'>All Users: <span className='text-secondary'>{users?.length}</span></h3>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user=><AdminRow key={user._id} user={user} refetch={refetch}></AdminRow>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MakeAdmin;