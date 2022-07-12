import { useState, useEffect } from "react";
import { PARKING_BLUEPRINT } from "../helper/Parking";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
import { calculateRates } from "../helper/Rates";
import { getCurrentTime12h } from "../helper/Time";

export default function Cards({ data, setData }) {
  const [show, setShow] = useState(false);
  const [parkingBluePrint, setParkingBluePrint] = useState([
    ...PARKING_BLUEPRINT,
  ]);

  useEffect(() => {
    setData((prevValue) => [...prevValue, ...parkingBluePrint]);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
      {data &&
        data.map((item, index) => (
          <>
            <Modal show={show} onHide={handleClose} key={index}>
              <Modal.Header closeButton>
                <Modal.Title>{`Customer's ${item.name} receipt`}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Reference ID : {uuidv4()}
                <br />
                Name: {item.name && item.name}
                <br />
                TIME-IN {item.time && item.time}
                <br />
                TIME-OUT: {getCurrentTime12h()}
                <br />
                Type: {item.type && item.type}
                <br />
                <strong>
                  Total Amount:{" "}
                  {calculateRates(
                    item.type,
                    parseInt(item.time) - parseInt(getCurrentTime12h())
                  )}
                </strong>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-success" onClick={handleSubmit}>
                  Print Receipt
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
