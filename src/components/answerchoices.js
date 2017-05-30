 import React, { Component } from 'react';
 import PropTypes from 'prop-types';

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
    answerType: PropTypes.string,
    answerContent: PropTypes.string,
    answer: PropTypes.string,
    onAnswerSelected: PropTypes.func,
  };

  export default AnswerChoices;