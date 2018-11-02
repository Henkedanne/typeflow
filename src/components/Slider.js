import React, { Component } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props) 
        this._handleChange = this._handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <input onChange={this._handleChange} value={this.props.defaultValue} type="range" min="0.5" max="5" step="0.5" className="slider" />
                <p>{this.props.intervalDelay} sec to clear </p>
            </div>
        )
    }

    _handleChange(e) {
        this.props.sliderValue(e.target.value); 
    }
}

export default Slider;