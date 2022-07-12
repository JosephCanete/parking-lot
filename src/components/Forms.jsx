import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

export default function Forms() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeType = (event) => {
    setType(event.target.value);
    console.log(type);
  };

  return (
    <Form>
      <Form.Group className="mb-1" controlId="formGroupEmail">
        <Form.Label>Customer's Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter full name"
          value={name}
          onChange={(event) => handleOnChangeName(event)}
        />
        <InputGroup className="mt-3">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Type of Vehicle
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Small Parking</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Medium Parkin</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Large Parking</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}
