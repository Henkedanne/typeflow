import React, { Component } from 'react';
import TextField from './components/TextField';
import Slider from './components/Slider';

class App extends Component {
	constructor(props) {
		super(props) 
		
		this.state = { intervalDelay: 2}
		this._sliderValue = this._sliderValue.bind(this);
	}

	render() {
		return (
			<div className="App">
				<Slider defaultValue={this.state.intervalDelay} sliderValue={this._sliderValue} intervalDelay={this.state.intervalDelay}/>
				<TextField intervalDelay={this.state.intervalDelay}/>
			</div>
		);
	}

	_sliderValue(value) {
		this.setState({ intervalDelay: value })
	}
}

export default App;
	