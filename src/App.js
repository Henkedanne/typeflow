import React, { Component } from 'react';
import TextField from './components/TextField';
import Slider from './components/Slider';

class App extends Component {
	constructor(props) {
		super(props) 
		
		this.state = { sliderValue: 2}
		this._sliderValue = this._sliderValue.bind(this);
	}

	render() {
		return (
			<div className="App">
				<Slider defaultValue={this.state.sliderValue} sliderValue={this._sliderValue} intervalDelay={this.state.sliderValue}/>
				<TextField intervalDelay={this.state.sliderValue}/>
			</div>
		);
	}

	_sliderValue(value) {
		this.setState({ sliderValue: value })
	}
}

export default App;
	