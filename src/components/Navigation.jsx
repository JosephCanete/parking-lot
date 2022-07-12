import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ModalPopper from "./ModalPopper";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Parking System</Navbar.Brand>
          <ModalPopper />
        </Container>
      </Navbar>
    </>
  );
}
