import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import firebase from '../../config/firebaseConfig';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { Button } from '@material-ui/core';

const NavBarVirtual = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const close = () =>{
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  return (
    <div >
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" navbar-nav ml-auto" navbar>
            <NavItem>
              <Button onClick={close}>
                <NavLink to="/">Log Out</NavLink>
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarVirtual;