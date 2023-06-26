import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <div className="box">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="box">
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="box">
        <NavLink to="/information">Information</NavLink>
      </div>
      <div className="box">
        <NavLink to="/guide">Guide</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
