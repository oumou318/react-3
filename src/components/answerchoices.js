 import React from 'react';

  function AnswerChoices(props) {
    
    return (
      <li className="answerChoices">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    );
  }

  AnswerChoices.propTypes = {
    answerType: React.PropTypes.string.isRequired,
    answerContent: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
  };

  export default AnswerChoices;