import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ModalPopper from "./ModalPopper";

export default function Navigation({ setData, data }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Parking System</Navbar.Brand>
          <ModalPopper setData={setData} data={data} />
        </Container>
      </Navbar>
    </>
  );
}
