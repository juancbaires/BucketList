import React, { Component } from 'react';
import './App.css';
import { Navbar } from "react-bootstrap"
import { NavItem } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import CreateItem from "../createItem/CreateItem"
import { Jumbotron } from "react-bootstrap"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import ListItem from '../ListItem/ListItem';


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
                  <a href="/">React-BucketList</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    <Link to="/createitem" style={{ textDecoration: 'none', color: "darkgrey" }}>
                      Create Item
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/listItems">List</Link>
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
              <Route path="/listItems" Component={ListItem} />
            </Switch>
          </main>
        </div>
      </Router >
    );
  }
}

export default App;
