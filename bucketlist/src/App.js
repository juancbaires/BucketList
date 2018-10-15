import React, { Component } from 'react';
import './App.css';
import { Navbar } from "react-bootstrap"
import { NavItem } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">React-BucketList</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Create Item
      </NavItem>
                <NavItem eventKey={2} href="#">
                  Link Right
      </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default App;
