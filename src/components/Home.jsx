import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navigation from "./Navigation";
import Cards from "./Cards";

export default function Home() {
  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Cards />
        </Row>
      </Container>
    </>
  );
}
