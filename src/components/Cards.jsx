import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Forms from "./Forms";
import { useState, useEffect } from "react";
import { PARKING_BLUEPRINT } from "../helper/Parking";

export default function Cards({ data, setData }) {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleSubmit = () => {
    handleClose();
  };

  const handleCheckout = () => {
    handleShow();
  };

  return (
    <>
      {PARKING_BLUEPRINT &&
        PARKING_BLUEPRINT.map((item, index) => (
          <>
            <Modal show={show} onHide={handleClose} key={index}>
              <Modal.Header closeButton>
                <Modal.Title>Customers {item.name} Bill</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Customer total bill is{" "}
                <strong style={{ color: "red" }}>1000</strong> Pesos Parking
                <br />
                Type: {item.type && item.type}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-success" onClick={handleSubmit}>
                  Customer Paid
                </Button>
                <Button variant="outline-danger" onClick={handleClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
            <Card style={{ width: "16em", margin: "2rem" }}>
              <Card.Body>
                <Card.Title>{`${
                  item.type === "SP"
                    ? "S"
                    : item.type === "MP"
                    ? "M"
                    : item.type === "L"
                    ? "L"
                    : ""
                } Parking No: ${item.pixel}`}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  iusto quae repellat? Ea, accusantium ipsam, veniam itaque.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Name: {item.name && item.name}</ListGroup.Item>
                <ListGroup.Item>Type: {item.type && item.type}</ListGroup.Item>
                <ListGroup.Item>
                  Time-in : {item.time ? item.time : "--:--"}
                </ListGroup.Item>
                <ListGroup.Item>
                  Vacant :<strong style={{ color: "green" }}> YES</strong>
                </ListGroup.Item>
              </ListGroup>
              <Button
                className="mb-2 mt-2"
                variant="outline-danger"
                onClick={handleCheckout}
              >
                Checkout Customer
              </Button>
            </Card>
          </>
        ))}
    </>
  );
}
