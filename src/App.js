import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Code from './components/Code';
import Event from './components/Event';
import Mypage from './components/Mypage';
import Order from './components/Order';
import Stamp from './components/Stamp'

import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      {/* navi var */}
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">희다방</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  희다방
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">스탬프</Nav.Link>
                  <Nav.Link href="#action2">쿠폰</Nav.Link>
                  <Nav.Link href="#action3">주문하기</Nav.Link>
                  <Nav.Link href="#action4">간편카드등록</Nav.Link>
                  <Nav.Link href="#action5">이벤트</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="불편 사항 있으신가요?"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Routes>
        <Route path="/" element=
          {
            <div>
              메인페이지임
            </div>
          } />
        <Route path="/code" element={<Code />} />
        <Route path="/stamp" element={<Stamp />} />
        <Route path="/order" element={<Order />} />
        <Route path="/event" element={<Event />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>

    </div>
  );
};

export default App;