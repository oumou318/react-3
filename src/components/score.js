import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Score(props) {

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
    >
      <div>
        You prefer <strong>{props.testScore}</strong>!
      </div>
    </ReactCSSTransitionGroup>
  );

}

Score.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Score;