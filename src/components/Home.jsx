import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navigation from "./Navigation";
import Cards from "./Cards";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  return (
    <>
      <Navigation setData={setData} data={data} />
      <Container>
        <Row>
          <Cards data={data} setData={setData} />
        </Row>
      </Container>
    </>
  );
}
