import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { TiWarning } from "react-icons/ti";

const actions = {
  create: "Usuario creado correctamente",
  delete: "Usuario eliminado correctamente",
  update: "Usuario actualizado correctamente",
};

const PopUp = ({ isShowMessage }) => {
  return (
    <div
      className={`w-screen z-10 fixed top-0 left-0 right-0 bg-gray-500/50 min-h-full flex justify-center items-center ${
        isShowMessage ? "opacity-100 visible" : "invisible opacity-0"
      }  transition-opacity`}
    >
      {isShowMessage !== "error" && (
        <div className="bg-white p-5 w-[80%] max-w-lg flex items-center flex-col gap-3 md:gap-5 md:py-8 rounded-md">
          <BsCheckCircle className="text-8xl text-green-500 md:text-[150px]" />
          <h4 className="md:text-3xl">Exito!</h4>
          <span className="text-center text-sm md:text-xl">{actions[isShowMessage]}</span>
        </div>
      )}
      {isShowMessage === "error" && (
        <div className="bg-white p-5 w-[80%] max-w-lg flex items-center flex-col gap-3 rounded-md">
        <TiWarning className="text-8xl text-red-500 md:text-[150px]" />
        <h4 className="md:text-3xl">Error!</h4>
        <span className="text-center text-sm md:text-xl">Ha ocurrido un problema.</span>
      </div>
      )}
    </div>
  );
};

export default PopUp;
