import React from "react";
import {
  FaBirthdayCake,
  FaUserEdit,
  FaUserMinus,
  FaUserCircle,
} from "react-icons/fa";

const User = ({
  user,
  setIsUserDelete,
  changeShowModal,
  setIsUserToUpdate,
}) => {
  const handleDeleteUser = () => {
    setIsUserDelete(user);
  };

  const handleUpdateUser = () => {
    changeShowModal();
    setIsUserToUpdate(user);
  };

  return (
    <div className="flex flex-col justify-between p-4 gap-2 border-[1px] rounded-sm border-gray-200 shadow-sm hover:shadow-md md:p-6">
      <div className="flex items-center gap-5 mb-2">
        <div className="min-w-[70px] min-h-[70px] md:min-w-[100px] md:min-h-[100px]">
          {
            !user.image_url && (
              <FaUserCircle className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full object-cover object-center text-gray-500" />
            )
          }
          {
            user.image_url && (
              <img
                src={user.image_url}
                alt=""
                className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full object-cover object-center hover:scale-110 transition-transform"
              />
            )
          }
        </div>
        <h3 className="font-bold text-xl">{`${user.first_name} ${user.last_name}`}</h3>
      </div>
      <div>
        <h4 className="text-gray-500">CORREO</h4>
        <span>{user.email}</span>
      </div>
      <div>
        <h4 className="flex text-gray-500">CUMPLEAÑOS</h4>
        <span className="flex items-center gap-1">
          <FaBirthdayCake className="text-violet-cl text-lg" />{" "}
          {user.birthday ? user.birthday : "No ingresado"}
        </span>
      </div>
      <div className="flex justify-end gap-2">
        <button
          className="bg-red-primary hover:bg-red-hover text-white text-lg p-2 rounded-[4px]"
          onClick={handleDeleteUser}
        >
          <FaUserMinus />
        </button>
        <button
          className="bg-gray-50 hover:bg-gray-100 text-gray-500 border-[1px] text-lg p-2 rounded-[4px]"
          onClick={handleUpdateUser}
        >
          <FaUserEdit />
        </button>
      </div>
    </div>
  );
};

export default User;
