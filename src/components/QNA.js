import React, { Component } from 'react';
import axios from 'axios'
import Everything from './Everything'


class Qna extends Component{
	constructor(props){
		super(props);
		this.state = {
			quiz: []
		}
		this.componentDidMount = this.componentDidMount.bind(this)
	}
	componentDidMount(){
		console.log(this.props.quiz)
		axios.get("https://mighty-shelf-36224.herokuapp.com/")
		.then((res) => {
			console.log(res)
			this.setState({
				quiz: res.data
			}, () => {
				console.log(this.state.quiz);
			})
		})
	}
	render(){
		const {quiz} = this.state
		let questionsNanswers;
		questionsNanswers = 
			<div>
				<div>
			{/* i = object / elements / value of the arrray          j = index */}

					{this.state.quiz.map((i,j) =>
					<Everything // key = index = j
					key={j} // specify the key example i.question 
					id={j + 1}
					quiz={i}
					/>
					)}
				</div>
			</div> 
			
			return(

				<div>
					{questionsNanswers.quiz}
				</div>

				)
	}
	
}



export default Qna;

