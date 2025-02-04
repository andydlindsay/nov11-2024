import { NavLink } from "react-router";

const Nav = () => {
  return (
    <div>
      <h2>Navigation component</h2>

      <NavLink to="/home">Home </NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/cars">Cars </NavLink>
    </div>
  );
};

export default Nav;
