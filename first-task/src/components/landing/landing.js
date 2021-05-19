import React from "react";
import "./landing.css";
import { Card, Button } from "react-bootstrap";

//landing function which renders the landing page
function Landing() {
  return (
    <div className="landing">
      <div className="text-info">
        <a className="back" href="#">
          Back to all courses
        </a>
        <h1 className="heading" style={{ color: "black", marginTop: 40 }}>
          Logic
        </h1>
        <h2 className="subheading">
          Stretch your analytic muscles with knights, knaves, logic <br />{" "}
          gates, and more
        </h2>
        <p className="content">
          The beginning of our introductory math journey is Logic. Through these
          <br />
          challenging problem solving exercises, you'll construct the critical
          thinking skills
          <br /> that are the basis for mathematical reasoning.
          <br />
        </p>
        <p>
          You'll use limited information to make predictions – eliminating the
          impossible
          <br /> to uncover the truth. This course builds up to some truly
          mind-bending
          <br /> challenges!
          <span className="more"> Read more</span>
        </p>
        <a className="prerequisites more" href="#">
          view prerequisites and next steps
        </a>
      </div>
      <Card className="Card">
        <img
          className="card_img"
          variant="top"
          src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254&quot"
        />
        <Card.Body className="card__text">
          <div className="text">
            <Card.Title style={{ color: "black" }} className="title">
              37
            </Card.Title>
            <h5 style={{ color: "#5d7e8e" }}>interactive quiz</h5>
          </div>
          <div className="text">
            <Card.Title style={{ color: "black" }} className="title">
              37
            </Card.Title>
            <h5 style={{ color: "#5d7e8e" }}>interactive quiz</h5>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Landing;
