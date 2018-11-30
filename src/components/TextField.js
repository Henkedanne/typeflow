import React, { Component } from 'react';

class TextField extends Component {
	constructor(props) {
		super(props)
		this._handleChange = this._handleChange.bind(this);
		this._handleSave = this._handleSave.bind(this);
		this._keyPressSave = this._keyPressSave.bind(this);
		
		this.state = {
			textValue: '',
			lastTime: null,
			nowTime: null,
			timerIsActive: false
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', (event) => this._keyPressSave(event), false);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
		document.clearEventListener('keydown', (event) => this._keyPressSave(event), false);
	}

	render() {
		return (
			<div className="textfield">
				<p>Timer is {this.state.timerIsActive ? 'on' : 'off'}</p>
				<div>
					<textarea value={this.state.textValue} onChange={this._handleChange} type="text"/>
				</div>
				<button onClick={() => this._handleSave()}>Save</button>
				<p>or </p>
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

	_handleSave() {
		this.props.saveText(this.state.textValue)
	}

	_keyPressSave(event) {
		console.log(event)
		if(event.keyCode === 83 && event.metaKey) {
			event.preventDefault();
			console.log('Saving...')
			this._handleSave();
		}
	}
}

export default TextField;