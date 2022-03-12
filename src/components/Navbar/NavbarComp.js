import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Upcoming from "../Upcoming/Upcoming";

const NavbarComp = () => {
  return (
    <Router basename="/myApp">
      <div>
        <Navbar bg="primary" variant={"dark"} expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Compo Friend</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/home"} >
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/upcoming"}>
                  Upcoming
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>
                  Contact
                </Nav.Link>
                <a href= "https://khabarflashback.blogspot.com/" className="anchorClass">
                  Blog
                </a>
                {/* <Nav.Link href="#action2">Upcoming</Nav.Link> */}
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-danger">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/upcoming">
            <Upcoming />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavbarComp;
