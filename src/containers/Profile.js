import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export const Profile = (props) => {
  const logout = () => {
    Cookies.remove("token");
  };
  const user = props.user;
  // console.log(user);
  return (
    <>
      <div>
        <h1> Login Successful </h1>
        <h4>Name : {user.name}</h4>
        <h4>User Name : {user.user_name}</h4>
        <h4>email : {user.email}</h4>
        <h4>Phone No : {user.phone}</h4>
      </div>
      <Link to={process.env.PUBLIC_URL+"/"}>
        <button
          onClick={() => {
            logout();
          }}
        >
          Log out
        </button>
      </Link>
    </>
  );
};
