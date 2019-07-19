import React, { Component } from 'react';
import FormField from '../form-field/form-field';
import personalDataList from './personal-data-list';

class PersonalData extends Component {
    render() {
        return (
            <div className={`personal-data ${this.props.className}`}>
                {
                    personalDataList.map((item, index) => {
                        return <FormField fieldData={item} key={index} />
                    })
                }
            </div>
        );
    }
}

export default PersonalData;
