import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
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
    // setType(event.target.value);
    // data.push({ name: type });
    console.log(event.target);
  };

  const setTimeEvent = (event) => {
    setTime(event.target.value);
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

            <Dropdown.Menu className="mt-3">
              <Dropdown.Item value={"SP"} onClick={setTypeEvent}>
                Small Parking
              </Dropdown.Item>
              <Dropdown.Item value={"MP"} onClick={setTypeEvent}>
                Medium Parkin
              </Dropdown.Item>
              <Dropdown.Item value={"LP"} onClick={setTypeEvent}>
                Large Parking
              </Dropdown.Item>
            </Dropdown.Menu>
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
