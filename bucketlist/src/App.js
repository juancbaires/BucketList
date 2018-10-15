import React, { Component } from 'react';
import './App.css';
import { Navbar } from "react-bootstrap"
import { NavItem } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import CreateItem from "./CreateItem"
import { Jumbotron } from "react-bootstrap"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'


class App extends Component {
  state = {
    title: this.title,
    url: this.url,
    discription: this.discription
  }

  render() {
    return (
      <Router>
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
                    <Link to="/createitem">
                      Create Item
                    </Link>
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    Link Right
      </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>
          <Jumbotron>
            <h1>Bucket List!</h1>
            <p>
              This is a simple hero application where you can keep track of your bucket list progress :)
  </p>
            <p>
            </p>
          </Jumbotron>
          <section className="form">
          </section>
          <main>
            <Switch>
              <Route path="/createitem" render={props => <CreateItem {...this.state} {...props} stocks={this.props.stocks} />} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
