//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";
import "./component/icons";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

function SimpleCounter(props) {
    return (
          <div className="Container">
              <div className="clock"><i className="far fa-clock"></i></div>
              <div className="sixth">{props.digitSixth % 10}</div>
              <div className="fifth">{props.digitFifth % 10}</div>
              <div className="fourth">{props.digitFourth % 10}</div>
              <div className="third">{props.digitThird % 10}</div>
              <div className="second">{props.digitSecond % 10}</div>
              <div className="first">{props.digitFirst % 10}</div>
        </div>
      );
};

SimpleCounter.propTypes = {
    digitSixth: propTypes.number,
    digitFifth: propTypes.number,
    digitFourth: propTypes.number,
    digitThird: propTypes.number,
    digitSecond: propTypes.number,
    digitFirst: propTypes.number
};

let counter = 0;
setInterval(function() {
      const sixth = Math.floor(counter/100000);
      const fifth = Math.floor(counter/10000);
      const fourth = Math.floor(counter/1000);
      const third = Math.floor(counter/100);
      const second = Math.floor(counter/10);
      const first = Math.floor(counter/1);
    console.log(sixth, fifth, fourth, third, second, first);
    counter++;
	
  //render your react application
      ReactDOM.render(
        <SimpleCounter digitFirst={first} digitSecond={second} digitThird={third} digitFourth={fourth} digitFifth={fifth} digitSixth={sixth}/>,
        document.getElementById("app")
    );
}, 100000);

