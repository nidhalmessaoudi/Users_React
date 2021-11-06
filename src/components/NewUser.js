import { useRef } from "react";

import Card from "./Card";

import "./NewUser.css";

function NewUser(props) {
  const usernameInput = useRef();
  const ageInput = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const user = {
      id: Math.random().toString(),
      username: usernameInput.current.value,
      age: ageInput.current.value,
    };

    usernameInput.current.value = "";
    ageInput.current.value = "";
    usernameInput.current.blur();
    ageInput.current.blur();

    if (!user.username || !user.age) {
      props.onOpenModal("Please fill all fields.");
      return;
    }

    if (user.age <= 0) {
      props.onOpenModal("Age must be great than 0.");
      return;
    }

    props.onNewUser(user);
  }

  return (
    <Card className="new-user">
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input ref={usernameInput} type="text" />
        <label>Age (Years)</label>
        <input ref={ageInput} type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default NewUser;
