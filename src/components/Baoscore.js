import React from 'react';
import 

  function BaoScore(props) {
    return (
      <div className="BaoScore">
        Question <span>{props.counter}</span> of <span>{props.total}</span>
      </div>
    );
  }

  BaoScore.propTypes = {
    counter: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired
  };

  export default BaoScore;