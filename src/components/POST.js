import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
	constructor(props){
		super(props)
		this.state = {
			
			question: [],
			a:[],
			b:[],
			c:[],
			id:[]
		}
		//bind stuuff what is that for? hmm methods below
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	create(question, a, b, c, correct){
		console.log('post');
		//i should create a variable to hold the url
		axios.post("https://afternoon-journey-45420.herokuapp.com/create", {
			question: question,
			a: a,
			b: b,
			c: c,
			correct: correct
		})
		.then((res) => {
			this.setState({

			})
		})
		.catch(error => console.log('error', error))
	}
	handleSubmit(event){
		event.preventDefault();
		this.create(this.question.value, this.a.value, this.b.value, this.c.value, this.correct.value )
		


		console.log('I am submitting', this.question.value)

	}
	renderform(){
		return(
			<div>
				<form method="post" onSubmit={this.handleSubmit}>
					<input ref={(question)=>this.question = question} name="questionsssss" type="text" placeholder="question here"/>
					<input ref={(a)=>this.a = a} name="AAAAAAAAAAAAA"type="text" placeholder="choice A"/>
					<input ref={(b)=>this.b = b} name="bbbbbbbbbbbbb"type="text" placeholder="choice B"/>
					<input ref={(c)=>this.c = c} name="ccccccccccccc"type="text" placeholder="choice C"/>
					<input ref={(correct)=>this.correct = correct} name="correctchoice" type="text" placeholder="correct answer"/>

					<button>Submit</button>

				</form>
			</div>
		)
	}
	render(){
		return(
			<div>
				{this.renderform()}
				{/*<button onlick={this.renderform()}>Submit</button>*/}

			</div>
		)
	}
}




export default Post;


