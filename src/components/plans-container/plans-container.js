import React, { Component } from 'react';
import './plans-container.scss';
import PlansContainerList from './plans-container-list';
import RadioBtnField from "../radio-btn-field/radio-btn-field";


class PlansContainer extends Component {
    render() {
        return (
            <div className={`plans-contianer ${this.props.className}`}>
                {
                    PlansContainerList.map((item, index) => {
                        return <RadioBtnField
                            className="plans-contianer__radio-btn"
                            checkBoxData={item}
                            key={index}
                        />
                    })
                }
            </div>
        );
    }
}

export default PlansContainer;
