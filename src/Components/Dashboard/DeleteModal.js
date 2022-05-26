import React from 'react';
import toast from 'react-hot-toast';

const DeleteModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { name, _id } = deletingProduct
    const handleDelete = () => {
       
            fetch(`https://fast-spire-01070.herokuapp.com/deleteservice/${_id}`, {
                method: "DELETE",
                headers: {

                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`${name} is deleted`)
                        setDeletingProduct(null);
                        refetch()
                    }

                })


    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg ">Are you sure you want to delete  this {name}!</h3>
                    <p className="py-4">when you sure about that click <span className='text-red-500'>DELETE</span> button</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label for="delete-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;