import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

import { db } from "../../Services/firebase.config";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";

import "./NotificationCard.css";

const CustomerNotification = () => {
  const [modalShow, setModalShow] = useState(false);
  const notificationCollectionRef = collection(db, "NotificationCollection");
  const [notificationData, setNotificationData] = useState([]);

  const [newNotification, setNewNotification] = useState([]);
  const [oldNotification, setOldNewNotification] = useState([]);
  useEffect(() => {
    onSnapshot(notificationCollectionRef, (snapshot) => {
      setNotificationData(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
    });
  }, []);

  function NotificationList(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            {/* {notificationData.forEach((notification, index) => {
              if (notification.reviewed_by_user) {
                setOldNewNotification(notification);
                console.log("This is old notification");
                console.log(notification);
              } else {
                setNewNotification(notification);
                console.log("This is new notification");
                console.log(notification);
              }
            })} */}
            {notificationData.map((notification, index) => {
             // if(index<3 && notificationData.reviewed_by_user==false){
                <Row>
              <center>
                <NotificationCard />
              </center>
            </Row>
          //    }
            })}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function NotificationCard() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro qui
            excepturi facilis doloremque incidunt amet tenetur magnam in illum
            repudiandae!
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div className="customer-container">
      {notificationData.map((notification, index) => {
        // console.log(notification)
      })}
      <div className="notification-badge">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Notifications <Badge bg="secondary">{newNotification.length}</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>

        <NotificationList show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
};

export default CustomerNotification;
