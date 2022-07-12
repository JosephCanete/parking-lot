import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";

import { useState, useEffect } from "react";

export default function Forms({ setFormData }) {
  const [name, setName] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setFormData({
      name: name,
      plateNumber: plateNumber,
      time: time,
      type:
        type === "Small Parking"
          ? "SP"
          : type === "Medium Parking"
          ? "MP"
          : type === "Large Parking"
          ? "LP"
          : "",
      vacant: false,
    });
  }, [name, plateNumber, time, type]);

  const setNameEvent = (event) => {
    setName(event.target.value);
  };

  const setPlateNumberEvent = (event) => {
    setPlateNumber(event.target.value);
  };

  const setTypeEvent = (event) => {
    if (event === "SP") return setType("Small Parking");
    if (event === "MP") return setType("Medium Parking");
    if (event === "LP") return setType("Large Parking");
  };

  const setTimeEvent = (event) => {
    setTime(event.target.value);
  };
  return (
    <Form>
      <Form.Group className="mb-1" controlId="formGroupEmail">
        <Form.Label>Customer's Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter full name"
          value={name}
          onChange={(event) => setNameEvent(event)}
          required={true}
        />

        <Form.Label>Plate Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Example, C2-Y223"
          value={plateNumber}
          onChange={(event) => setPlateNumberEvent(event)}
          required={true}
        />
        <InputGroup className="mt-3 mb-3">
          <Dropdown>
            <DropdownButton
              title={type ? type : "Select Type of Vehicle"}
              className="mt-2"
              onSelect={setTypeEvent}
              required={true}
            >
              <Dropdown.Item eventKey="SP">Small Parking</Dropdown.Item>
              <Dropdown.Item eventKey="MP">Medium Parkin</Dropdown.Item>
              <Dropdown.Item eventKey="LP">Large Parking</Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </InputGroup>
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="time"
          onBlur={(event) => setTimeEvent(event)}
          required={true}
        />
      </Form.Group>
    </Form>
  );
}
