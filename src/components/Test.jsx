import React from 'react';
import Baoquestion from '../components/Baoquestion';
import Baoscore from '../components/Baoscore';
import answerchoices from '../components/answerchoices';
import PropTypes from 'prop-types';




function Test(props) {
    return (
       <div className="test">
         <Baoscore
           counter={props.questionId}
           total={props.questionTotal}
         />
         <Baoquestion content={props.question} />
         <ul className="answerchoices">
           <h1>Look at you.. :)</h1>
         </ul>
       </div>
    );
  }

  Test.propTypes = {
    answer: PropTypes.string,
    answerChoices: PropTypes.array,
    counter: PropTypes.number,
    question: PropTypes.string,
    questionId: PropTypes.number,
    questionTotal: PropTypes.number,
    onAnswerSelected: PropTypes.func,
  };

  export default Test;