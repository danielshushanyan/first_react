import React, { Component } from 'react';
import './form-field.scss';

class FormField extends Component {
    render() {
        return (
            <div className="form-field">
                <label htmlFor={this.props.fieldData.id} className="form-field__lable">{this.props.fieldData.name}</label>
                <input type={this.props.fieldData.type} id={this.props.fieldData.id} defaultValue={this.props.fieldData.value} className="form-field__input"/>
            </div>
        );
    }
}

export default FormField;
