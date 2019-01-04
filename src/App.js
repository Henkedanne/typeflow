import React, { Component } from 'react';
import TextField from './components/TextField';
import Slider from './components/Slider';

const SaveField = ({value}) => {
	return (
		<div>
			<textarea name="savedtext" cols="30" rows="auto" value={value}  />
		</div>
	)
}

class App extends Component {
	constructor(props) {
		super(props) 
		
		this.state = { 
			sliderValue: 2,
			text: ''
		}
		this._sliderValue = this._sliderValue.bind(this);
		this._saveText = this._saveText.bind(this);
	}

	render() {
		const {sliderValue, text} = this.state;

		return (
			<div className="App">
				<h1>FLOWTYPE</h1>
				<Slider defaultValue={sliderValue} sliderValue={this._sliderValue} intervalDelay={sliderValue}/>
				<TextField intervalDelay={sliderValue} saveText={this._saveText}/>
				<SaveField value={text}/>
			</div>
		);
	}

	_sliderValue(value) {
		this.setState({ sliderValue: value })
	}

	_saveText(text) {
		this.setState({ text: text })
	}
}

export default App;
	