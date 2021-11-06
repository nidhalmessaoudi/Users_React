import { Fragment } from "react";
import { useState } from "react";
import Modal from "./components/Modal";
import NewUser from "./components/NewUser";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  function newUserHandler(user) {
    setUsers((prevUsers) => [user, ...prevUsers]);
  }

  function closeModalHandler() {
    setError("");
  }

  function openModal(message) {
    setError(message);
  }

  return (
    <Fragment>
      {error ? <Modal message={error} onCloseModal={closeModalHandler} /> : ""}
      <NewUser onOpenModal={openModal} onNewUser={newUserHandler} />
      {users.length > 0 ? <Users users={users} /> : ""}
    </Fragment>
  );
}

export default App;
