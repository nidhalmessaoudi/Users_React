import Card from "./Card";
import User from "./User";

function Users(props) {
  return (
    <Card>
      {props.users.map((user) => (
        <User key={user.id} username={user.username} age={user.age} />
      ))}
    </Card>
  );
}

export default Users;
