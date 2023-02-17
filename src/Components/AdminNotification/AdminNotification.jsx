import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import "./AdminNotification.css";
const AdminNotification = () => {
  const [notificationData, setNotificationData] = useState({
    title: "",
    description: "",
    target_users: "",
    customer_broadcast: false,
    developer_broadcast: false,
    pushed_date: "",
    pushed_time: "",
  });

  const [checkValue, setCheckValue] = useState("1");
  let x;
  return (
    <div>
      <Form className="form">
        <Col sm={3} className="form-col">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </Col>

        <Form.Check
          className="form-radio-btn"
          label="Broadcast to all Users"
          name="grp-1"
          type="radio"
          value={1}
          id="radio-1"
          checked={checkValue === "1"}
          onChange={(e) => {
            x = e.currentTarget.value;
            console.log(x);
            setCheckValue(x);
            console.log("x Value: " + x);
          }}
        />

        <Form.Check
          className="form-radio-btn"
          label="Broadcast to all Customers"
          name="grp-1"
          type="radio"
          value={2}
          id="radio-2"
          checked={checkValue === "2"}
          onChange={(e) => {
            x = e.currentTarget.value;
            console.log(x);
            setCheckValue(x);
            console.log("x Value: " + x);
          }}
        />
        <Form.Check
          className="form-radio-btn"
          label="Broadcast to all Game Developers"
          name="grp-1"
          type="radio"
          value={3}
          id="radio-3"
          checked={checkValue === "3"}
          onChange={(e) => {
            x = e.currentTarget.value;
            console.log(x);
            setCheckValue(x);
            console.log("x Value: " + x);
          }}
        />
        <Form.Check
          className="form-radio-btn"
          label="Push notification only for selected users"
          name="grp-1"
          type="radio"
          value={4}
          id="radio-4"
          checked={checkValue === "4"}
          onChange={(e) => {
            x = e.currentTarget.value;
            console.log(x);
            setCheckValue(x);
            console.log("x Value: " + x);
          }}
        />

        <Col sm={3} className="form-col">
        <Form.Label>Selected User IDs</Form.Label>
          {checkValue != 4 ? (
            <Form.Control
              type="text"
              placeholder=" UsersID, seperate with ','"
              aria-label="Disabled input example"
              disabled
              readOnly
            />
          ) : (
            <Form.Control
              type="text"
              placeholder=" UsersID, seperate with ','"
              aria-label="Disabled input example"
            />
          )}
        </Col>

        <Col sm={6} className="form-col">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
      <div className="btn-grp">
      <Button variant="danger">Reset</Button>
      <Button variant="primary">Push Notification</Button>
      
      </div>
        </Col>
        
      </Form>

      <ToastContainer className="p-3" position="bottom-end">
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">AdPlayer</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Notification has been pushed successfully.</Toast.Body>
          </Toast>
        </ToastContainer>
    </div>
  );
};

export default AdminNotification;
