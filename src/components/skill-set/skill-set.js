import React, { Component } from 'react';
import './skill-set.scss';
import SkillSetList from './skill-set-list';
import CheckBoxField from '../check-box-field/check-box-field';

class SkillSet extends Component {
    render() {
        return (
            <div className={`skill-set ${ this.props.className }`}>
                <div className="skill-set__col">
                    {
                        SkillSetList[0].map((item, index) => {
                            return <CheckBoxField checkBoxData={item} key={index} className="skill-set__check-box-field" />
                        })
                    }
                </div>
                <div className="skill-set__col skill-set__col_middle">
                    {
                        SkillSetList[1].map((item, index) => {
                            return <CheckBoxField checkBoxData={item} key={index} className="skill-set__check-box-field" />
                        })
                    }
                </div>
                <div className="skill-set__col skill-set__col_last">
                    {
                        SkillSetList[2].map((item, index) => {
                            return <CheckBoxField checkBoxData={item} key={index} className="skill-set__check-box-field" />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default SkillSet;
