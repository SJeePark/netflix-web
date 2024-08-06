import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom'; //라우터 안 자손 갖고 오기

const AppLayout = () => {

  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const searchByKeyword=(event)=>{
    event.preventDefault()
    //url을 바꿔주기
    navigate(`/movies?q=${keyword}`)
    setKeyword("")
  }

  return (
    <div>
    <Navbar expand="lg" className="nav-bar">
      <Container fluid className="nav-bar">
        <Navbar.Brand className='logo' href="#"><img width={'200px'} src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{ color: 'white' }} href="/">Home</Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="/movies">Movies</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={searchByKeyword}>
            <Form.Control
              type="search"
              placeholder="검색"
              className="me-2 custom-placeholder"
              aria-label="Search"
              value={keyword}
              onChange={(event)=>setKeyword(event.target.value)}
              style={{ background:'#303030', borderColor:'#454545', color:'white'}}
            />
            <Button variant="outline-danger" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </div>
  );
}

export default AppLayout
