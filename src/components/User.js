import "./User.css";

function User(props) {
  return (
    <div className="user">
      <strong>{`${props.username} (${props.age} years old)`}</strong>
    </div>
  );
}

export default User;
