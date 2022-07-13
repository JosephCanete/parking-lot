import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Forms from "./Forms";
import { PARKING_BLUEPRINT } from "../helper/Parking";

export default function ModalPopper({ setData, data }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState([
    {
      name: "",
      plateNumber: "",
      type: "",
      time: "",
      pixel: 0,
    },
  ]);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    if (
      formData.name === "" ||
      formData.plateNumber === "" ||
      formData.type === "" ||
      formData.time === "" ||
      formData.pixel === ""
    ) {
      return alert(
        `Please check "Name" , "Plate" , "Number" , "Type", "Parking Number"  Time one of them is empty...`
      );
    }
    handleClose();

    PARKING_BLUEPRINT.map((item) => {
      if (item.pixel.toString() === formData.pixel.toString()) {
        item.name = formData.name;
        item.type = formData.type;
        item.plateNumber = formData.plateNumber;
        item.time = formData.time;
        item.vacant = formData.vacant;
        item.pixel = formData.pixel;
      }
      return item;
    });

    setData([...PARKING_BLUEPRINT]);
  };

  return (
    <>
      <Button className="me-2 mb-2" onClick={() => handleShow()}>
        Add Customer
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Forms setFormData={setFormData} data={data} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={handleSubmit}>
            Add Customer
          </Button>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
