import React, { Component } from 'react'
import actions from '../actions/actions'

export default class TodoInput extends Component{
	constructor(props, context){
		super(props, context)
		this.state = {
			inputText: ''
		}
	}
	handleChange(event){
		this.setState({
			inputText: event.target.value
		})
	}
	handleSubmit(event){
		event.preventDefault()
		this.props.dispatch(actions.addTodo(this.state.inputText))
	}
	render(){
		return  <div id="todo_input" className="clearfix">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<input
							type="text"
							placeholder="Type your todo"
							value={this.state.inputText}
							onChange={this.handleChange.bind(this)}
						/>
						<input type="submit" text="submit" />
					</form>
				</div>
	}
}
