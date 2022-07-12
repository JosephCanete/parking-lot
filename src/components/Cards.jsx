import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Forms from "./Forms";
import { useState, useEffect } from "react";

export default function Cards({ data }) {
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

  const PARKING_BLUEPRINT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const SMALL = PARKING_BLUEPRINT.slice(0, 4).concat();
  const MEDIUM = PARKING_BLUEPRINT.slice(4, 8).concat();
  const LARGE = PARKING_BLUEPRINT.slice(8, 12).concat();

  const handleCheckout = () => {
    handleShow();
    console.log("Customer is checking out");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customer Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Customer total bill is <strong style={{ color: "red" }}>1000</strong>{" "}
          Pesos Parking
          <br />
          Type: LP
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
      {SMALL &&
        SMALL.map((item, index) => (
          <Card style={{ width: "16em", margin: "2rem" }} key={index}>
            <Card.Body>
              <Card.Title>{`S Parking No: ${index + 1}`}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                iusto quae repellat? Ea, accusantium ipsam, veniam itaque.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Name: Raymond</ListGroup.Item>
              <ListGroup.Item>Type: SL</ListGroup.Item>
              <ListGroup.Item>Time-in : 10:00 AM</ListGroup.Item>
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
        ))}
      {MEDIUM &&
        MEDIUM.map((item, index) => (
          <Card style={{ width: "16rem", margin: "2rem" }} key={index}>
            <Card.Body>
              <Card.Title>{`MP No: ${index + 1}`}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                iusto quae repellat? Ea, accusantium ipsam, veniam itaque.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Name: Raymond</ListGroup.Item>
              <ListGroup.Item>Type: SL</ListGroup.Item>
              <ListGroup.Item>Time-in : 10:00 AM</ListGroup.Item>
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
        ))}
      {LARGE &&
        LARGE.map((item, index) => (
          <Card style={{ width: "16rem", margin: "2rem" }} key={index}>
            <Card.Body>
              <Card.Title>{`LP No: ${index + 1}`}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                iusto quae repellat? Ea, accusantium ipsam, veniam itaque.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Name: Raymond</ListGroup.Item>
              <ListGroup.Item>Type: SL</ListGroup.Item>
              <ListGroup.Item>Time-in : 10:00 AM</ListGroup.Item>
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
        ))}
    </>
  );
}
