import {Component} from 'react'

class Events extends Component{
	state={
		username:"",
		phonenumber:""
	}
	handleClick=()=>{
		console.log(this.state.username)
		console.log(this.state.phonenumber)
	}
	handleChange=(e)=>{
		this .setState({
				[e.target.name]:e.target.value

		})
	}
	render(){
		return(
			<div>
			<input
					name="username"
					onChange={this.handleChange}
					placeholder="Enter username"/>
					<input
						name="phonenumber"
						onChange={this.handleChange}
						placeholder="Enter phone number"/>
						<button onClick={this.handleClick}>Submit</button>
				</div>	
			)
	}
}

export default Events