import React, { Component } from 'react';
import PropTypes from 'prop-types';


  function Baoquestion(props) {
    return (
      <h2 className="Baoquestion">{props.content}</h2>
    );
  }

  Baoquestion.propTypes = {
    content: PropTypes.string,
  };

  export default Baoquestion;