import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Forms from "./Forms";

export default function ModalPopper({ setData }) {
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
      formData.time === ""
    ) {
      return alert(
        `Please check "Name" , "Plate" , "Number" , "Type",  Time one of them is empty...`
      );
    }
    console.log("FormData", formData);
    handleClose();
    setData((prevValue) => [...prevValue, { ...formData }]);
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
          <Forms setFormData={setFormData} />
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
