import React, { useState } from "react";
import { connect } from "react-redux";
import { edittasks } from "../Redux/Constants/action-type";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EditTask = ( {task ,  edittasks} ) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(task.text);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSave = () => {
    let editedtask = {
      ...task,
      text: text,
    };

    edittasks(editedtask);
    setShow(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your Task </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default connect(null,{edittasks})(EditTask);
