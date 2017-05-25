import React, { Component } from 'react';
import './App.css';
import Baoquestion from './components/Baoquestion';
//importing question component
import QuestionsBao from './api/quizTime';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        User: 0,
      },
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

componentWillMount() {
const shuffledAnswerChoices = quizTime.map((question) => this.shuffleArray(question.answers));  

this.setState({
question: quizTime[0].question,
answerChoices: shuffledAnswerChoices[0]
    });
  }

shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  render() {
    render (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>BBBAO!!</h2>
      </div>
      <Question content="How old am I?" />
    </div>
  );
  }
}
export default App;