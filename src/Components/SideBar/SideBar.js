import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faBriefcase,
//   faPaperPlane,
//   faQuestion,
//   faImage,
//   faCopy,
// } from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav, NavbarBrand } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
 
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3 text-white" expand='md'>
         
       
       <SubMenu title="Employer Profile" 
        // icon={faCopy}
         items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            {/* <FontAwesomeIcon
            //  icon={faBriefcase}
             className="mr-2" /> */}
           Onboard Your Vechicles
          </NavLink>
        </NavItem>
        <SubMenu title="Pages" 
        // icon={faCopy}
         items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            {/* <FontAwesomeIcon
            //  icon={faImage}
              className="mr-2" /> */}
            Search &#38; Hire Drivers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/inquery"}>
            {/* <FontAwesomeIcon 
            // icon={faQuestion} 
            className="mr-2" /> */}
            Inbox
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            {/* <FontAwesomeIcon 
            // icon={faPaperPlane} 
            className="mr-2" /> */}
            Recruitment
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            {/* <FontAwesomeIcon 
            // icon={faPaperPlane} 
            className="mr-2" /> */}
             My Organisations
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            {/* <FontAwesomeIcon 
            // icon={faPaperPlane} 
            className="mr-2" /> */}
             Rate A Driver
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            {/* <FontAwesomeIcon 
            // icon={faPaperPlane} 
            className="mr-2" /> */}
           My Subscription
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: " Employer Profile",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;