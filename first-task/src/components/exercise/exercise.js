import React from "react";
import "./exercise.css";
import CardComponent from "./Card";

//function which renders the exercise section
function Exercise() {
  return (
    <div className="exercise">
      <div className="container">
        <div className="header">
          {" "}
          <h3>Introduction</h3>
          <p>Put your logic to the test with these warmups!</p>
        </div>

        <div className="quiz">
          <CardComponent
            exercise="Warmup Puzzles"
            description="Get started with some logic warmups"
            className="card-component"
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png"
          />
          <CardComponent
            exercise="Truth-Seeking"
            className="card-component"
            description="Who or what is telling the truth"
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png"
          />
          <CardComponent
            className="card-component"
            exercise="strategic deductions"
            description="strech the information you're given as far it goes"
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Machine_Logic_and_Strategy-jrTuIK-2FIeRk.png"
          />
        </div>
      </div>
      <div className="container">
        <div className="header">
          {" "}
          <h3>Rational Detective </h3>
          <p>Eliminate the impossible and uncover the truth!</p>
        </div>

        <div className="quiz">
          <CardComponent
            className="card-component"
            className="cardComponent"
            exercise="Riddles of Order"
            description="What order do these racers finish in?"
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png"
          />
          <CardComponent
            className="card-component"
            exercise="Crafty Counting"
            description="Learn strategies for counting that go far beyond just counting."
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Crafty_Counting-MyeNyB.png"
          />
          <CardComponent
            className="card-component"
            exercise="Mystery Containers"
            description="What's in each of these mystery boxes?"
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mystery_Containers-jce39Z.png"
          />
          <CardComponent
            className="card-component"
            exercise="Futoshiki"
            description="Arrange the numbers to match the inequalities."
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Futoshiki-bNVmO9.png"
          />
        </div>
        <div className="container">
          <div className="header">
            {" "}
            <h3>Puzzles and Riddles </h3>
            <p>Even trickier puzzles and tools you need to solve them</p>
          </div>
          <div className="quiz">
            <CardComponent
              className="cardComponent"
              exercise="Werewolves"
              description="Whos'a werewolf?"
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Werewolves-Jd2lIq.png"
            />
            <CardComponent
              className="cardComponent"
              exercise="Logical Languages"
              description="Explore the logical use of the words, and,or and not"
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Language-6tn9sJ.png"
            />
            <CardComponent
              className="cardComponent"
              exercise="if A then B"
              description="If you do this quiz, you will learn about the sentenses like this one"
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/If_A_then_B.-vl28Kf.png"
            />
            <CardComponent
              className="cardComponent"
              exercise="elimination grids"
              description="solve classic logic elimination puzzles"
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Elimination_Grids-bpMmxt.png"
            />
          </div>
        </div>
        <div className="container">
          <div className="header">
            {" "}
            <h3>Multi level thinking </h3>
            <p>If you know that I know that you know... what then?</p>
          </div>
          <div className="quiz">
            <CardComponent
              className="cardComponent"
              exercise="Perfect Information"
              description="If everyone follows the same logic, can you find out what they know?"
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Perfect_Information-mqTyGs.png"
            />
            <CardComponent
              className="cardComponent"
              exercise="Hat Colors"
              description="Can you figure out who can figure out the color of their hat?"
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors-5jioSi.png"
            />
            <CardComponent
              className="cardComponent"
              exercise="What happens to hat puzzles when there are more hats and more people?"
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors_with_More_People-96NuCs.png"
            />
            <CardComponent
              className="cardComponent"
              exercise="red eyed dragons"
              description="exactly how much you can learn from one knowing anything"
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Red-Eyed_Dragons-v4T9FK.png"
            />
          </div>
        </div>
        <div className="container">
          <div className="header">
            {" "}
            <h3>Competitive Games </h3>
            <p>What will your opponent do? Logic it out!</p>
          </div>
          <div className="quiz">
            <CardComponent
              className="cardComponent"
              exercise="Poisoned Chocolate"
              description="Dont take the last chocolate!"
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate-2hzzdS.png"
            />
            <CardComponent
              className="cardComponent"
              exercise="Luk Tsut K'i"
              description="Can you figure out who can figure out the color of their hat?"
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Luk_Tsut_Ki-YkvdnC.png"
            />
            <CardComponent
              className="cardComponent"
              exercise="Poisoned Chocolate II"
              description="
            What happens when the chocolate comes in rectangles?
            
            Included with
            Brilliant Premium
            "
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate_II-jCwMSc.png"
            />
            <CardComponent
              className="cardComponent"
              exercise="Game Search Algorithms"
              description="learn how simple AI systems approach game strategy"
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Game_Search_Algorithms-8CTK46.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
