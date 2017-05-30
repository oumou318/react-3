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
		axios.get("https://afternoon-journey-45420.herokuapp.com")
		.then((res) => {
			console.log(res)
			this.setState({
				quiz: res.data
			})
		})
	}

	renderEverything() {
		console.log('rendering')
		return (
				this.state.quiz.map((i,j) => {
					return (
						<Everything
							key={j}
							id={j+1}
							quiz={i}
						/>
						)
					}
				)
			)
	}
	render(){
		console.log('hi')
		return(

			<div>
				{this.renderEverything()}
			</div>

		)
	}
	
}



export default Qna;

