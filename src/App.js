import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Baoquestion from './components/Baoquestion';
//component that will render question
import quizTime from './api/quiztime';
import Score from './components/score';
//api component containing the questions
import BaoScore from './components/Baoscore';
//component containing quiz score
import AnswerChoices from './components/answerchoices';
//component created to render multiple choices
import Test from './components/Test.jsx';
import Aurinely from './components/demo';
import PropTypes from 'prop-types';
//component created for actual test div
import axios from 'axios';
//transition that for some reason is now not working



class App extends Component {
//extending component class
 constructor(props) {
    super(props);
//calling parent component

    this.state = {
      counter: 0,
//counter set to zero at beginning of game
      baoQuestionId: 1,
//question set to 1 at beginning of the game
      baoQuestion: '',
//question content
      answerOptions: [],
//array with multiple choice options
      answer: '',
//actual answer content
      Baoscore: {
//keeping count
        User: 0,
//user score set to zero at beginning of the game
      },
      result: ''

    };

    this.handleThisAnswerSelected = this.handleThisAnswerSelected.bind(this);
//will bind answers to this
  }

  componentWillMount() {
//initial lifecycle method called before initial render
    const randomAnswerChoices = quizTime.map((question) => this.randomArray(question.answers));
//will shuffle questions and answers..    
    this.setState({
      question: quizTime[0].question,
//
      answerChoices: randomAnswerChoices[0]
    });
  }

  randomArray(array) {
    let presentIndex = array.length, currentValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== presentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * presentIndex);
      presentIndex -= 1;

      // And swap it with the current element.
      currentValue = array[presentIndex];
      array[presentIndex] = array[randomIndex];
      array[randomIndex] = currentValue;
    }

    return array;
  };

  handleThisAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.baoQuestionId < quizTime.length) {
        setTimeout(() => this.setNextBaoQuestion(), 200);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 200);
    }
  }

  setThisUserAnswer(answer) {
   const updatedAnswersCount = (this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  setThisToNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        BaoScore: BaoScore,
        // QuestionId: QuestionId,
        BaoQuestion: quizTime[counter].BaoQuestion,
        answerChoices: quizTime[counter].answers,
        answer: ''
    });
  }

  getTheseScores() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderTest() {
    return (
      <Test
        answer={this.state.answer}
        answerchoices={this.state.answerChoices}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.state.answerChoices.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderScore() {
    return (
    <Score testScore={this.state.score} />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>BAO BAO BAO</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderTest()}
        <Baoquestion />
        <AnswerChoices />
        <BaoScore />
              </div>      
    );
  }

}
export default App;