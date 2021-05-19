import React from "react";
import "./footer.css";

//renders the last footer component
function Footer() {
  return (
    <div className="footer">
      <h5
        style={{
          color: "#5d7e8e",
          marginLeft: "180px",
          marginTop: "30px",
        }}
      >
        Next steps
      </h5>
      <hr className="hr" />
      <div className="foot">
        <div className="container-footer">
          <div
            className="next_steps"
            style={{ marginLeft: "50px", fontSize: "14px" }}
          >
            <img
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png"
              alt="next_step"
            />
            <div className="text_info">
              <h4>
                Mathematical
                <br /> Fundamentals
              </h4>
              <p style={{ marginBottom: "70px" }}>
                The essential tools for <br /> mastering algebra, logic, and{" "}
                <br />
                number theory
              </p>
            </div>
          </div>
        </div>
        <div className="container-footer">
          <div className="next_steps">
            <img
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png"
              alt="next_step"
            />
            <div className="text_info">
              <h4>
                Computer
                <br /> Fundamentals
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "50px",
                  lineHeight: "17px",
                }}
              >
                Wrap your mind around
                <br /> computational thinking,from <br /> everyday tasks to
                algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
