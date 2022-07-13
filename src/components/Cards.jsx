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
  const [checkOut, setCheckOut] = useState({});

  useEffect(() => {
    //Find
    setData((prevValue) => [...prevValue, ...PARKING_BLUEPRINT]);
  }, []);

  useEffect(() => {}, [data]);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleSubmit = () => {
    handleClose();
  };

  const handleCheckout = (pixelTarget) => {
    handleShow();
    setCheckOut(
      data.find((item) => item.pixel.toString() === pixelTarget.toString())
    );
  };

  return (
    <>
      {data &&
        data.map((item, index) => (
          <Card style={{ width: "16em", margin: "2rem" }} key={index}>
            <Card.Body>
              <Card.Title>{`${
                index < 4 ? "Small" : index < 8 ? "Medium" : "Large"
              } Parking: ${item.pixel}`}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                iusto quae repellat? Ea, accusantium ipsam, veniam itaque.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Name: {item.name && item.name}</ListGroup.Item>
              <ListGroup.Item>
                Type: {item.type ? item.type : "N/A"}
              </ListGroup.Item>
              <ListGroup.Item>
                Time-in : {item.time ? item.time : "--:--"}
              </ListGroup.Item>
              <ListGroup.Item>
                Vacant :
                {item.vacant ? (
                  <strong style={{ color: "green" }}> Available</strong>
                ) : (
                  <strong style={{ color: "red" }}> Not Available</strong>
                )}
              </ListGroup.Item>
            </ListGroup>
            <Button
              className="mb-2 mt-2"
              variant="outline-danger"
              onClick={() => handleCheckout(item.pixel)}
              disabled={item.vacant ? true : false}
            >
              Checkout Customer
            </Button>
          </Card>
        ))}
      {checkOut && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{`Customer's ${checkOut.name} receipt`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Reference ID : {uuidv4()}
            <br />
            Name: {checkOut.name}
            <br />
            TIME-IN: {checkOut.time}
            <br />
            TIME-OUT: {getCurrentTime12h()}
            <br />
            Type: {checkOut.type}
            <br />
            <strong>
              Total Amount:{" "}
              {calculateRates(
                checkOut.type,
                parseInt(checkOut.time) - parseInt(getCurrentTime12h())
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
      )}
    </>
  );
}
