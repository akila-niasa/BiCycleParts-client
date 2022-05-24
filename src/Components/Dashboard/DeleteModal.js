import React from 'react';
import toast from 'react-hot-toast';

const DeleteModal = ({deletingProduct,refetch,setDeletingProduct}) => {
    const {name,_id}=deletingProduct
    const handleDelete=()=>{
        const processed = window.confirm("are you want to delete")
        if (processed) {
            fetch(`http://localhost:5000/deleteservice/${_id}`,{
                method:"DELETE",
                headers: {
               
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                                toast.success(`${name} is deleted`)
                                setDeletingProduct(null);
                                refetch()
                            }
                  
                })
        }
        
    }
    return (
        <div>
        <input type="checkbox" id="delete-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg ">Are you sure you want to delete  this {name}!</h3>
            <p class="py-4">when you sure about that click <span className='text-red-500'>DELETE</span> button</p>
            <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                                <label for="delete-modal" class="btn btn-xs">Cancel</label>
                            </div>
            </div>
          </div>
        </div>
    );
};

export default DeleteModal;