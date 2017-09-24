/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return(
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Home</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={2} href="/hero">Heroes</NavItem>
                    <NavItem eventKey={2} href="/item">Items</NavItem>
                    <NavItem eventKey={2} href="/match">Matches</NavItem>
                </Nav>
            </Navbar>
        </div>
        );
    }
}
