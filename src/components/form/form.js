import React, { Component } from 'react';
import './form.scss';
import PersonalData from '../personal-data/personal-data';
import SkillSet from '../skill-set/skill-set';
import JSLevel from "../js-level/js-level";
import AboutMe from "../about-me/about-me";
import PlansContainer from "../plans-container/plans-container";
import FormField from "../form-field/form-field";

const date = {
    name: 'Дата заполнения',
    type: 'text',
    value: '07.18.19',
    id: "date"
};

class Form extends Component {
    render() {
        return (
            <form className="form">
                <PersonalData className="form__personal-data" />
                <h3 className="form__about">Расскажите о себе чекбоксами</h3>
                <p className="form__about-text">
                    Отметьте чекбоксами пункты, которые соответствуют вашим скиллам. Кстати, отсутствие опыта не означает,
                    что у вас меньше шансов стать одним из наших товарищей.
                    Это означает, что вы будете получать те задачи, с которыми гарантировано будете справляться.
                </p>
                <SkillSet className="form__skill-set" />
                <JSLevel className="form__js-level" />
                <h3 className="form__about form__about_gutter">Расскажите о себе словами</h3>
                <p className="form__about-text">
                    Напишите пару предложений, чем вас привлекла наша вакансия и чего вы ожидаете от работы в CSSSR.
                    Кстати, будет здорово, если при нехватке места для текста строки будут добавляться автоматически.
                </p>
                <AboutMe
                    className="form__about-me"
                    aboutMe="Привлекло то что у вас профессиональный подход ко всему, начиная со сборщика заканчивая с блога. Ожидаю много интересных задач и главное подучится много новому."
                />
                <h3 className="form__about">Какие у вас планы на будущее?</h3>
                <p className="form__about-text">Этот ответ ни на что не повлияет. Не беда, если в будущем ваши планы поменяются.</p>
                <PlansContainer className="form__plans-contianer"/>
                <div className="form__date">
                    <FormField fieldData={date} />
                </div>
            </form>
        );
    }
}

export default Form;
