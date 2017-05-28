import React from 'react';
import Baoquestion from '../components/Baoquestion';
import Baoscore from '../components/Baoscore';
import answerchoices from '../components/answerchoices';



function Test(props) {
    return (
       <div className="test">
         {/*<QuestionCount
           counter={props.questionId}
           total={props.questionTotal}
         />
         <Question content={props.question} />*/}
         <ul className="answerchoices">
           <h1>Look at you.. :)</h1>
         </ul>
       </div>
    );
  }

  Test.propTypes = {
    answer: React.PropTypes.string,
    answerChoices: React.PropTypes.array,
    counter: React.PropTypes.number,
    question: React.PropTypes.string,
    questionId: React.PropTypes.number,
    questionTotal: React.PropTypes.number,
    onAnswerSelected: React.PropTypes.func
  };

  export default Test;