import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

export default function Cards({ data }) {
  const PARKING_BLUEPRINT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const ENTRY_A = PARKING_BLUEPRINT.slice(0, 4).concat();
  const ENTRY_B = PARKING_BLUEPRINT.slice(4, 8).concat();
  const ENTRY_C = PARKING_BLUEPRINT.slice(8, 12).concat();

  return (
    <>
      {PARKING_BLUEPRINT &&
        PARKING_BLUEPRINT.map((item, index) => (
          <Card style={{ width: "15rem", margin: "2rem" }} key={index}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>{`Parking No: ${index}`}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                iusto quae repellat? Ea, accusantium ipsam, veniam itaque.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Name: Raymond</ListGroup.Item>
              <ListGroup.Item>Type: SL</ListGroup.Item>
              <ListGroup.Item>Time-in : 10:00AM</ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
    </>
  );
}
