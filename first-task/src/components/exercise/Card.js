import React from "react";
import { Card } from "react-bootstrap";

//function which renders a card component that get's called in exercise component
function CardComponent(props) {
  return (
    <div className="card">
      <Card
        style={{
          width: "15rem",
          alignItems: "center",
          marginRight: "50px",
        }}
      >
        <div className="img">
          <Card.Img variant="top" src={props.src} />
        </div>

        <Card.Body>
          <Card.Title>{props.exercise}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
