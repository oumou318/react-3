import React, { Component } from 'react';
import PropTypes from 'prop-types';


  function BaoScore(props) {
    return (
      <div className="BaoScore">
        Question <span>{props.counter}</span> of <span>{props.total}</span>
      </div>
    );
  }

  BaoScore.propTypes = {
    counter: PropTypes.number,
    total: PropTypes.number,
  };

  export default BaoScore;