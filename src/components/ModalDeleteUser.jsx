import React from "react";
import { TiWarning } from "react-icons/ti";

const ModalDeleteUser = ({ isUserDelete, deleteUser, setIsUserDelete }) => {
  const handleDeleteUser = () => {
    deleteUser(isUserDelete.id);
  };

  const handleCancelDelete = () => {
    setIsUserDelete(null);
  };

  return (
    <div
      className={`w-screen z-10 fixed top-0 left-0 right-0 bg-gray-500/50 min-h-full flex justify-center items-center ${
        isUserDelete ? "opacity-100 visible" : "invisible opacity-0"
      }  transition-opacity`}
    >
      <div className="bg-white py-5 px-3 md:px-6 md:py-8 w-[80%] max-w-lg flex items-center flex-col gap-3 md:gap-5 rounded-md">
        <TiWarning className="text-8xl text-yellow-400 md:text-[150px]" />
        <span className="text-center text-[15px] md:text-lg">
          Esta seguro de eliminar el usuario&nbsp;
          <span className="font-bold">
            {isUserDelete?.first_name} {isUserDelete?.last_name}{" "}
          </span>{" "}
          ?
        </span>
        <div className="flex gap-3">
          <button
            className="bg-red-primary rounded-md py-2 px-4 text-white md:text-xl"
            onClick={handleDeleteUser}
          >
            Eliminar
          </button>
          <button
            className="bg-gray-400 rounded-md py-2 px-4 text-white md:text-xl"
            onClick={handleCancelDelete}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteUser;
