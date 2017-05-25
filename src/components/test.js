import React from 'react';
import Baoquestion from '../components/Baoquestion';
import Baoscore from '../components/Baoscore';
import answerchoices from '../components/answerchoices';

function Test(props) {
    return (
       <div className="test">
         <QuestionCount
           counter={props.questionId}
           total={props.questionTotal}
         />
         <Question content={props.question} />
         <ul className="answerchoices">
           {props.answerchoices.map(renderAnswerchoices)}
         </ul>
       </div>
    );
  }

  Quiz.propTypes = {
    answer: React.PropTypes.string.isRequired,
    answerOptions: React.PropTypes.array.isRequired,
    counter: React.PropTypes.number.isRequired,
    question: React.PropTypes.string.isRequired,
    questionId: React.PropTypes.number.isRequired,
    questionTotal: React.PropTypes.number.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
  };

  export default Quiz;