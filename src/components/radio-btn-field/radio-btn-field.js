import React, { Component } from 'react';
import './radio-btn-field.scss';

class RadioBtnField extends Component {
    render() {
        return (
            <label className={`radio-btn-field ${this.props.className}`}>
                { this.props.checkBoxData.plan }
                <input
                    type="radio"
                    name={ this.props.checkBoxData.name }
                    defaultChecked={ this.props.checkBoxData.value === true ? 'checked' : undefined }
                    className="radio-btn-field__input"/>
                <span className="radio-btn-field__checkmark"/>
            </label>
        );
    }
}

export default RadioBtnField;
