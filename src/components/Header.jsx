import React from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";

const Header = ({ changeShowModal }) => {
  const handleClickShowModal = () => {
    changeShowModal();
  };

  return (
    <nav className="flex justify-between items-center px-6 py-2">
      <h2 className="font-bold text-xl md:text-3xl">Usuarios</h2>
      <button
        onClick={handleClickShowModal}
        className="flex gap-2 items-center bg-violet-cl text-white px-4 py-2 rounded-[4px]"
      >
        <BsFillPersonPlusFill />{" "}
        <span className="hidden md:flex text-lg">Crear nuevo usuario</span>
      </button>
    </nav>
  );
};

export default Header;
