// import React from 'react'
// import Button from './Common/Button'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div className='flex justify-evenly items-center flex-wrap p-6 bg-[white]'>
//       <div>
//         <h1 className='text-xl'><span className='bg-[#39DB4A] pl-2 pr-2 rounded text-white'>F</span> OODI</h1>
//       </div>
//       <div>
//         <ul className='flex items-center flex-wrap gap-4 mt-4 mb-4'>
//             <li>Home</li>
//            <select className='bg-none rounded ' name="" id="">
//             <option value=""> <li>Menu</li></option>
//             <option value="">Chicken</option>
//             <option value="">Chicken</option>
//             <option value="">Chicken</option>
//            </select>
//             <li>Service</li>
//             <li>Offer</li>
//         </ul>
//       </div>

//       <div className='flex items-center gap-[5px]'>
//      <Link to='/signup' className='bg-white text-black  w-24 h-8 text-center rounded-xl  border-2 border-[#39DB4A] hover:bg-[#39DB4A] hover:text-white '> Sign Up</Link>

//         <Button data="Contact"/>

//       </div>
//     </div>
//   )
// }

// export default Header

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>;

function Header() {
  return (
    <div className="">
      <div>
        <Navbar expand="lg" className="ml-[80px] mt-4">
          <Container fluid>
            <Navbar.Brand href="#" className="text-xl">
              <span className="bg-[#39DB4A] pl-2 pr-2 rounded text-white">
                F
              </span>{" "}
              OODI
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className="border-2 border-black hover:text-primaryThemeColor ">
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#action2"
                  className="hover:text-primaryThemeColor"
                >
                  Service
                </Nav.Link>
                <Nav.Link href="#" className="hover:text-primaryThemeColor">
                  Offer
                </Nav.Link>
                <NavDropdown
                  title="Menu"
                  id="navbarScrollingDropdown"
                  className="hover:text-primaryThemeColor"
                >
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
              <div>
                <Form className="d-flex mr-[80px]">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 hover:border-[#39DB4A] outline:visible"
                    aria-label="Search"
                  />

                  <Button className="mr-2 bg-[#39DB4A] border-2 border-[#39DB4A] hover:bg-[#39DB4A] hover:text-white hover:border-[#39DB4A]">
                    Search
                  </Button>
                  <Link to="/signup">
                    <button className="p-2 border-2 border-[#39DB4A] rounded-lg hover:bg-[#39DB4A] hover:text-white">
                      SignUp
                    </button>
                  </Link>
                </Form>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
