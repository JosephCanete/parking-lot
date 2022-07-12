import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navigation from "./Navigation";
import Cards from "./Cards";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  return (
    <>
      <button onClick={() => console.log(data)}>Click Me</button>
      <Navigation setData={setData} />
      <Container>
        <Row>
          <Cards setData={data} data={setData} />
        </Row>
      </Container>
    </>
  );
}
