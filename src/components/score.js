import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

function Score(props) {

  return (
    <div>
    <CSSTransitionGroup 
      className="container result"
      transitionName="test"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
    >
      <div>
        You prefer <strong>{props.testScore}</strong>!
      </div>
    </CSSTransitionGroup>
    </div>
  );

}

Score.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Score;