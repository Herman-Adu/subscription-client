import { Link, useNavigate } from "react-router-dom";
import { Navbar, NavItem, NavLink } from "react-bootstrap";

const Nav = () => {
  return (    
    <Navbar>
      <NavItem>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </NavItem>
       {localStorage.getItem("token") && (
          <NavItem>
            <NavLink >Logout</NavLink>
          </NavItem>
      )}
    </Navbar>
  );
}

export default Nav;
