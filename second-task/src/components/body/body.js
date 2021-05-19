import React from "react";
import "./body.css";
import { DragDropContext } from "react-beautiful-dnd";

function Body() {
  return (
    <div className="body">
      <div className="container">
        <div className="text">
          <p>
            Joseph, Kevin, and Nicholas are 3 brothers, and the following
            statements <br /> about them are all true:
          </p>
          <ul className="list">
            <li>Joseph is not the youngest.</li>
            <li>Kevin is the oldest.</li>
            <li> Nicholas is not the oldest</li>
          </ul>
          <p style={{ paddingTop: "20px", display: "flex" }}>
            Drag the characters into the dotted boxes
          </p>
          <div className="dragdrop">
            <div className="divs">
              <div className="div">Youngest</div>
              <div className="div"></div>
              <div className="div">oldest</div>
            </div>
            <div className="image">
              <img
                className="img "
                src="https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png"
                alt=""
              />
              <img
                className="img "
                src="https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png"
                alt=""
              />
              <img
                className="img "
                src="https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <a className="lesson">Lesson 1</a>
        <h1>warmup puzzles</h1>
        <div class="prac-markers" id="prac-markers-8632">
          <span class="prac-marker current">&nbsp;</span>

          <span class="prac-marker">&nbsp;</span>

          <span class="prac-marker">&nbsp;</span>

          <span class="prac-marker">&nbsp;</span>

          <span class="prac-marker">&nbsp;</span>

          <span class="prac-marker">&nbsp;</span>
        </div>
      </div>
    </div>
  );
}

export default Body;
