import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaUser, FaBirthdayCake, FaImage } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";

const ModalForm = ({
  isShowModal,
  changeShowModal,
  createUser,
  isUserToUpdate,
  updateUser,
  resetModalForm,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    if (!data.birthday) data.birthday = null;
    if (!data.image_url) data.image_url = null;
    const validate = validateUrl(data.image_url)
    if (data.image_url == "") {
      if (isUserToUpdate) {
        updateUser(data, reset);
      } else {
        createUser(data, reset);
      }
    } else {
      if (validate) {
        if (isUserToUpdate) {
          updateUser(data, reset);
        } else {
          createUser(data, reset);
        }
      } else {
        document.getElementById("messageForm").innerHTML = "Url no valido";
      }
    }
  };

  const validateUrl = (imageurl) => {
    try {
      new URL(imageurl);
      console.log(imageurl);
      return true;
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    if (isUserToUpdate) reset(isUserToUpdate);
  }, [isUserToUpdate]);

  const handleClickHiddenModal = () => {
    changeShowModal();
    resetModalForm(reset);
  };

  return (
    <div
      className={`w-screen z-10 fixed top-0 left-0 right-0 bg-gray-500/50 min-h-full flex justify-center items-center ${
        isShowModal ? "opacity-100 visible" : "invisible opacity-0"
      }  transition-opacity`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col bg-white p-5 gap-5 rounded-md w-[80%] max-w-lg px-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-[700] md:text-2xl">
            {isUserToUpdate ? "Editar Usuario" : "Nuevo Usuario"}
          </h3>
          <div className="">
            <AiFillCloseSquare
              className="h-7 w-7 text-violet-cl cursor-pointer md:h-8 md:w-8"
              onClick={handleClickHiddenModal}
            />
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-1 md:flex-nowrap">
          <label htmlFor="first_name" className="flex items-end">
            <FaUser className="md:text-2xl" />
            <span className="text-sm text-red-600">*</span>
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            placeholder="Nombres"
            className="flex outline-none border-[1px] border-gray-100 p-1 mt-1 w-full md:w-auto"
            {...register("first_name", {
              required: "Campo nombre requerido",
            })}
          />
          <input
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Apellidos"
            className="flex outline-none border-[1px] border-gray-100 p-1 mt-1 w-full md:w-auto"
            {...register("last_name", {
              required: "Campo apellidos requerido",
            })}
          />
        </div>
        <div className="flex justify-between items-center gap-1">
          <label htmlFor="email" className="flex items-end">
            <MdEmail className="md:text-2xl" />
            <span className="text-sm text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Correo electronico"
            className="outline-none border-[1px] border-gray-100 p-1 mt-1 flex w-[100%]"
            {...register("email", {
              required: "Campo email requerido",
              pattern: {
                value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                message: "Ingrese un correo valido",
              },
            })}
          />
        </div>
        <div className="flex justify-between items-center gap-1">
          <label htmlFor="password" className="flex items-end">
            <MdLock className="md:text-2xl" />
            <span className="text-sm text-red-600">*</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            className="outline-none border-[1px] border-gray-100 p-1 mt-1 w-[100%]"
            {...register("password", {
              required: "Campo contraseña requerido",
              minLength: {
                value: 8,
                message: "Contraseña minimo 8 caracteres",
              },
            })}
          />
        </div>
        <div className="flex justify-between items-center gap-1">
          <label htmlFor="birthday" className="flex items-end">
            <FaBirthdayCake className="md:text-2xl" />
          </label>
          <input
            id="birthday"
            name="birthday"
            type="date"
            className="outline-none border-[1px] border-gray-100 p-1 mt-1 w-[100%]"
            {...register("birthday")}
          />
        </div>
        <div className="flex justify-between items-center gap-1">
          <label htmlFor="birthday" className="flex items-end">
            <FaImage className="md:text-2xl" />
          </label>
          <input
            id="image_url"
            name="image_url"
            type="text"
            placeholder="Ingrese url de imagen"
            className="outline-none border-[1px] border-gray-100 p-1 mt-1 w-[100%]"
            {...register("image_url")}
          />
        </div>
        <button className="bg-violet-cl text-white p-2 mt-2 text-sm md:text-lg">
          {isUserToUpdate ? "Actualizar datos" : "Agregar nuevo usuario"}
        </button>
        <div className="text-red-400 font-bold" id="messageForm">
          {errors.first_name && <p>{errors.first_name.message}</p>}
          {errors.last_name && <p>{errors.last_name.message}</p>}
          {errors.email && <p>{errors.email.message}</p>}
          {errors.password && <p>{errors.password.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
