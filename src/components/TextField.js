import React, { Component } from 'react';

class TextField extends Component {
	constructor(props) {
		super(props)
		this._handleChange = this._handleChange.bind(this);
		
		this.state = {
			textValue: '',
			lastTime: null,
			nowTime: null,
			timerIsActive: false
		}
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	render() {
		return (
			<div className="textfield">
				<p>Timer is {this.state.timerIsActive ? 'on' : 'off'}</p>
				<div>
					<textarea value={this.state.textValue} onChange={this._handleChange} type="text"/>
				</div>
			</div>
		);
	}
	
	_handleChange(e) {
		this.setState({
			textValue: e.target.value,
			lastTime: Date.now()
		});

		if(!this.state.timerIsActive) {
			this._timerStart();
		}
	}

	_timerStart() {
		const intervalDelay = this.props.intervalDelay * 1000;
		this.setState({ timerIsActive: true })
		
		this.intervalID = setInterval(() => {
		
			this.setState({ nowTime: Date.now()})
			
			if (this.state.textValue && (this.state.lastTime + (intervalDelay)) < this.state.nowTime) {
				this._clearInput();
			}
		}, 1000);
	}

	_clearInput() {
		this.setState({
			textValue: '',
			timerIsActive: false
		});
		clearInterval(this.intervalID);
	}
}

export default TextField;