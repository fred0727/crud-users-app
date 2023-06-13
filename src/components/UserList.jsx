import React from "react";
import User from "./User";

const UserList = ({
  users,
  changeShowModalDelete,
  setIsUserDelete,
  changeShowModal,
  setIsUserToUpdate
}) => {
  return (
    <section className="grid gap-7 mt-4 p-3 grid-cols-[repeat(auto-fill,minmax(275px,500px))] md:grid-cols-[repeat(auto-fill,minmax(300px,350px))] justify-center">
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          changeShowModalDelete={changeShowModalDelete}
          setIsUserDelete={setIsUserDelete}
          changeShowModal={changeShowModal}
          setIsUserToUpdate={setIsUserToUpdate}
        />
      ))}
    </section>
  );
};

export default UserList;
