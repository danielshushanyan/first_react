import React, { Component } from 'react';
import './about-me.scss';


class AboutMe extends Component {
    render() {
        return (
            <div className={`about-me ${this.props.className}`}>
                <textarea className="about-me__textarea" name="about-me" id="about-me" defaultValue={this.props.aboutMe} />
            </div>
        );
    }
}

export default AboutMe;
