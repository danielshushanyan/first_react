import React, { Component } from 'react';
import './check-box-field.scss';


class CheckBoxField extends Component {
    render() {
        let linkElement = '';

        if (this.props.checkBoxData.url) {
            linkElement = <a href={ this.props.checkBoxData.url }>{ this.props.checkBoxData.url_name }</a>
        }

        return (
            <label className={`check-box-field ${this.props.className}`}>
                { this.props.checkBoxData.title }
                { linkElement }
                <input
                    type="checkbox"
                    defaultChecked={ this.props.checkBoxData.value === true ? 'checked' : undefined }
                    className="check-box-field__input"/>
                <span className="check-box-field__checkmark"/>
            </label>
        );
    }
}

export default CheckBoxField;
