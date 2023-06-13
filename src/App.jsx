import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import UserList from "./components/UserList";
import axios from "axios";
import PopUp from "./components/Popup";
import ModalDeleteUser from "./components/ModalDeleteUser";

const BASE_URL = "https://users-crud.academlo.tech";
const DEFAULT_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
  image_url: "",
};

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowMessage, setIsShowMessage] = useState(null);
  const [isUserDelete, setIsUserDelete] = useState(null);
  const [isUserToUpdate, setIsUserToUpdate] = useState(null);
  const [users, setUsers] = useState([]);

  const changeShowModal = () => setIsShowModal(!isShowModal);
  // const changeShowModalDelete = () => setIsShowModalDelete(!isShowModalDelete);

  const createUser = (data, reset) => {
    const url = BASE_URL + `/users/`;
    axios
      .post(url, data)
      .then(() => {
        getAllUsers();
        resetModalForm(reset);
        closePopUp("create");
      })
      .catch((err) => {
        resetModalForm(reset);
        closePopUp("error")
        console.log(err)
      });
  };

  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}`;
    axios
      .delete(url)
      .then(() => {
        setIsUserDelete(null);
        getAllUsers();
        closePopUp("delete");
      })
      .catch((err) => {
        resetModalForm(reset);
        closePopUp("error");
        console.log(err)
      });
  };

  const updateUser = (data, reset) => {
    const url = BASE_URL + `/users/${isUserToUpdate.id}/`;
    axios
      .put(url, data)
      .then(() => {
        getAllUsers();
        resetModalForm(reset);
        closePopUp("update");
      })
      .catch((err) => {
        resetModalForm(reset);
        closePopUp("error");
        console.log(err)
      });
  };

  const getAllUsers = () => {
    const url = BASE_URL + `/users/`;
    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const resetModalForm = (reset) => {
    setIsShowModal(false);
    reset(DEFAULT_VALUES);
    setIsUserToUpdate(null);
  };

  const closePopUp = (action) => {
    setIsShowMessage(action);
    setTimeout(() => {
      setIsShowMessage(null);
    }, 3000);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="font-font-rob p-2">
      <Header changeShowModal={changeShowModal} />
      <ModalForm
        changeShowModal={changeShowModal}
        isShowModal={isShowModal}
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        resetModalForm={resetModalForm}
      />
      <ModalDeleteUser
        isUserDelete={isUserDelete}
        deleteUser={deleteUser}
        setIsUserDelete={setIsUserDelete}
      />
      <UserList
        users={users}
        setIsUserDelete={setIsUserDelete}
        changeShowModal={changeShowModal}
        setIsUserToUpdate={setIsUserToUpdate}
      />
      <PopUp isShowMessage={isShowMessage} />
    </main>
  );
}

export default App;
