import React, { useState } from "react";
import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";

const NavBar = ({ filterBySearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    filterBySearch(searchValue);
    setSearchValue("");
  };

  return (
    <Row>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="إبحث.."
                className="mx-2"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <button
                type="button"
                onClick={() => onSearch()}
                className="btn-search"
              >
                إبحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
