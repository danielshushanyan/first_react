import React, { Component } from 'react';
import './js-level.scss';

class JSLevel extends Component {
    render() {
        return (
            <div className={`js-level ${this.props.className}`}>
                <h3 className="js-level__title"> Уровень владения JavaScript</h3>
                <div className="js-level__wrapper">
                    <input
                        type="range"
                        min="1"
                        max="100"
                        defaultValue="48"
                        className="js-level__slider"
                    />
                    <p className="js-level__option">Не владею</p>
                    <p className="js-level__option js-level__option_midle">Использую готовые решения</p>
                    <p className="js-level__option js-level__option_midle js-level__option_text-overflow">Использую готовые решения  и умею их переделывать</p>
                    <p className="js-level__option js-level__option_text-right">Пишу сложный JS с нуля</p>
                    <div className="js-level__clearfix"/>
                </div>
            </div>
        );
    }
}

export default JSLevel;
