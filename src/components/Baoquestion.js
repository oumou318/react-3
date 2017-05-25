import React from 'react';
//importing react 

  function Baoquestion(props) {
    return (
      <h2 className="Baoquestion">{props.content}</h2>
    );
  }

  Baoquestion.propTypes = {
    content: React.PropTypes.string.isRequired
  };

  export default Baoquestion;