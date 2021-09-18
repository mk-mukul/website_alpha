import { NavLink } from "react-router-dom";

export const Header = (props) => {
  // console.log(props)
  return (
    <>
      <header>
        <nav>
          <div>
            <h1 className="title">Website Alpha</h1>
          </div>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="nav-checkbtn">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label>
          <div className="nav-link">
            <NavLink to="/">
              <h3>Home</h3>
            </NavLink>
            <NavLink to="/inbox" params={{ data: props.user_name }}>
              <h3>Inbox</h3>
            </NavLink>
            <NavLink to="/profile">
              <h3>{props.user_name}</h3>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};
