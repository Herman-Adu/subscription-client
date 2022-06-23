import { Link, useNavigate } from "react-router-dom";
import { Navbar, NavItem, NavLink } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar>
        <NavItem>
            <NavLink>
              <Link to="/" className="nav-link" >
                Home
              </Link>
            </NavLink>
        </NavItem>
    </Navbar>
  );
}

export default Nav;
