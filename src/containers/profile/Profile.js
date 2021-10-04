import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export const Profile = (props) => {
  const logout = () => {
    Cookies.remove("token");
    window.location.reload()
  };
  const user = props.user;
  return (
    <div className="min-h-screen text-primary-101">
      <div className="mt-16">
        <h1>Hii... {user.name}</h1>
        <h4>Name : {user.name}</h4>
        <h4>User Name : {user.user_name}</h4>
        <h4>email : {user.email}</h4>
        <h4>Phone No : {user.phone}</h4>
      </div>
      <Link to={process.env.PUBLIC_URL+"/"}>
        <button className="bg-background-401 hover:bg-background-501"
          onClick={() => {
            logout();
          }}
        >
          Log out
        </button>
      </Link>
    </div>
  );
};
