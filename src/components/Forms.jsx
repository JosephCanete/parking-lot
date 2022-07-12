import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";

import { useState } from "react";

export default function Forms({ setFormData }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  const data = [];

  const setNameEvent = (event) => {
    setName(event.target.value);
    // console.log(event.target);
    // data.push({ name: name });
  };

  const setTypeEvent = (event) => {
    console.log(event);
    if (event === "SP") return setType("Small Parking");
    if (event === "MP") return setType("Medium Parking");
    if (event === "LP") return setType("Large Parking");
    // data.push({ name: type });
  };

  const setTimeEvent = (event) => {
    // setTime(event.target.value);
    // data.push({ time: time });
    // console.log(data);
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
          onFocus={(event) => setNameEvent(event)}
          onBlur={(event) => setNameEvent(event)}
        />
        <InputGroup className="mt-3 mb-3">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {type ? type : "Select Type of Vehicle"}
            </Dropdown.Toggle>
            <DropdownButton title="" className="mt-2" onSelect={setTypeEvent}>
              <Dropdown.Item eventKey="SP">Small Parking</Dropdown.Item>
              <Dropdown.Item eventKey="MP">Medium Parkin</Dropdown.Item>
              <Dropdown.Item eventKey="LP">Large Parking</Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </InputGroup>
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="time"
          placeholder="Enter email"
          onChange={(event) => setTimeEvent(event)}
          onFocus={(event) => setTimeEvent(event)}
          onBlur={(event) => setTimeEvent(event)}
        />
      </Form.Group>
    </Form>
  );
}
