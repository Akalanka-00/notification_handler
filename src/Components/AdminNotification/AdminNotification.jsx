import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { db } from "../../Services/firebase.config";
import { collection, addDoc } from "firebase/firestore";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

import "./AdminNotification.css";
const AdminNotification = () => {
  const [notificationData, setNotificationData] = useState({
    title: "",
    description: "",
    target_users: "",
    customer_broadcast: true,
    developer_broadcast: true,
    pushed_date: "",
    pushed_time: "",
  });

  const [checkValue, setCheckValue] = useState(1);

  const notificationCollectionRef = collection(db, "NotificationCollection");
  let x;

  function handleSubmit(e) {
    e.preventDefault();

    console.log(notificationData);

    if (!notificationData.title || !notificationData.description ) {
        alert("Please fill out all fields");
    }else if(checkValue==4 && !notificationData.target_users){
       
        alert("Please fill out all fields c");

    }else{
        addDoc(notificationCollectionRef,notificationData)
        setNotificationData({
            title: "",
            description: "",
            target_users: "",
            customer_broadcast: true,
            developer_broadcast: true,
            pushed_date: "",
            pushed_time: "",
        })
        alert("Data sent succecfully");

    }
  }
  return (
    <div>
      <Form className="form" onSubmit={handleSubmit}>
        <Col sm={3} className="form-col">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              value={notificationData.title}
              onChange={(e) =>
                setNotificationData({ ...notificationData, title: e.target.value })
              }
            
            />
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

            setNotificationData({
              ...notificationData,
              developer_broadcast: true,
              customer_broadcast: true,
            });
            //   setNotificationData({
            //     ...notificationData,
            //     customer_broadcast: true,
            //   });
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

            setNotificationData({
              ...notificationData,
              customer_broadcast: true,
              developer_broadcast: false,
            });
            //   setNotificationData({
            //     ...notificationData,
            //     developer_broadcast: false,
            //   });
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

            setNotificationData({
              ...notificationData,
              developer_broadcast: true,
              customer_broadcast: false,
            });
            // setNotificationData({
            //     ...notificationData,
            //     customer_broadcast: false,
            //   });
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

            setNotificationData({
              ...notificationData,
              customer_broadcast: false,
              developer_broadcast: false,
            });
            //   setNotificationData({
            //     ...notificationData,
            //     developer_broadcast: false,
            //   });
          }}
        />

        <Col sm={3} className="form-col">
          <Form.Label>Selected User IDs</Form.Label>
          
            <Form.Control
              type="text"
              placeholder=" UsersID, seperate with ','"
              aria-label="Disabled input example"
              disabled={checkValue != 4}
              readOnly={checkValue != 4}
              value={notificationData.target_users}
              onChange={(e) =>
                setNotificationData({ ...notificationData, target_users: e.target.value })
              }/>
            
         
        </Col>

        <Col sm={6} className="form-col">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Notification Description</Form.Label>
            <Form.Control as="textarea" rows={6} 
            value={notificationData.description}
              onChange={(e) =>
                setNotificationData({ ...notificationData, description: e.target.value })
              }/>
          </Form.Group>
          <div className="btn-grp">
            <Button variant="danger" type="reset">
              Reset
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                //alert("Option is: "+checkValue)

                // if (checkValue == 1) {
                //   setNotificationData({
                //     ...notificationData,
                //     customer_broadcast: true,
                //   });
                //   setNotificationData({
                //     ...notificationData,
                //     developer_broadcast: true,
                //   });

                //   console.log("it is 1")
                // }

                // if (checkValue == 2) {
                //   setNotificationData({
                //     ...notificationData,
                //     customer_broadcast: true,
                //   });
                //   setNotificationData({
                //     ...notificationData,
                //     developer_broadcast: false,
                //   });
                //   console.log("it is 2")
                // }

                // if (checkValue == 3) {
                //   setNotificationData({
                //     ...notificationData,
                //     customer_broadcast: false,
                //   });
                //   setNotificationData({
                //     ...notificationData,
                //     developer_broadcast: true,
                //   });
                //   console.log("it is 3")
                // }

                // if (checkValue == 4) {
                //   setNotificationData({
                //     ...notificationData,
                //     customer_broadcast: false,
                //   });
                //   setNotificationData({
                //     ...notificationData,
                //     developer_broadcast: false,
                //   });
                //   console.log("it is 4")
                // }

                const today = new Date();
                const currentDate =
                  today.getFullYear() +
                  "." +
                  (today.getMonth() + 1) +
                  "." +
                  today.getDate();

                console.log(currentDate);

                // setNotificationData({
                //   ...notificationData,
                //   pushed_date: currentDate,
                // });

                const currentTime =
                  today.getHours() +
                  ":" +
                  today.getMinutes() +
                  ":" +
                  today.getSeconds();
                console.log(currentTime);

                setNotificationData({
                  ...notificationData,
                  pushed_date: currentDate,
                  pushed_time: currentTime,
                });
              }}
            >
              Push Notification
            </Button>
          </div>
        </Col>
      </Form>

      <ToastContainer className="p-3" position="bottom-end">
        <Toast>
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">AdPlayer</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body>Notification has been pushed successfully.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default AdminNotification;
