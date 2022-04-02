import React from "react"
import {Navbar,Container} from "react-bootstrap"
import im from "../imge/oo.png"

function Navv(){
    return (
        <>
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={im}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      FILM Bang
      </Navbar.Brand>
    </Container>
  </Navbar>

        </>

    )
}
export default Navv