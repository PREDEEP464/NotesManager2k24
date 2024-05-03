import React from 'react';

const DeleteConfirmationDialog = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this note?</p>
            <div className="flex justify-end">
            <button onClick={onConfirm} className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md hover:bg-red-700">Delete</button>
            <button onClick={onCancel} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700">Cancel</button>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirmationDialog;
