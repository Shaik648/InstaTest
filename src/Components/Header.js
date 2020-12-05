import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from "reactstrap";
import { Link } from "react-router-dom";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
      <div>
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3  bg-white rounded"
      expand="md"
    >


      <Button color="info" className='d-lg-none' onClick={toggleSidebar}>
        {/* <FontAwesomeIcon icon={faAlignLeft} /> */}
      </Button>

     <NavbarBrand href="/" className='ml-5 mb-0'>
       <h1 className='mb-0'>Instadriver</h1>
     
     </NavbarBrand>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="ml-auto header" navbar>
          <NavItem>
            <NavLink tag={Link} to={"/page-1"}>
     <Button>Jobs</Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-2"}>
              <Button>Get Social</Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-3"}>
            <Button>James Keem</Button>
            </NavLink>
          </NavItem>
        
        </Nav>
      </Collapse>
    </Navbar>
    <div className='header-bottom bg-dark'>

    </div>
    </div>
  );
};

export default Topbar;
