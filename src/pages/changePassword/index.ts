import avatarIcon from "../../assets/avatar.svg";
import ChangePassword from './changePassword';
import ArrowButton from '../../components/arrowButton/arrowButton';
import InputLabel from '../../components/inputLabel/inputLabel';
import Button from '../../components/button/button';
import { formSubmitEvent, inputBlur, inputFocus } from '../../utils/events';

const arrowButton = new ArrowButton(
    'div',
    {
        events: {
            click: (e: Event) => {
                e.preventDefault();
                console.log('arrBtn');
            }
        }
    }
);

const inputOldPass = new InputLabel(
    'li',
    {
        label: 'Прошлый пароль',
        inputType: 'password',
        inputName: 'inputOldPass',
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                }
            }
    }
);

const inputPassword = new InputLabel(
    'li',
    {
        label: 'Новый пароль',
        inputType: 'password',
        inputName: 'inputPassword',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const inputPasswordScd = new InputLabel(
    'li',
    {
        label: 'Повторите пароль',
        inputType: 'password',
        inputName: 'inputPasswordScd',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const buttonSave = new Button(
    'div',
    {
        buttonType: 'button',
        btnValue: 'Сохранить',
        events: {
            click: () => {
                console.log('Submit');
            }
        },
        attr: {
            class: 'box-profile-bottom'
        }
    }
);

const data = {
    avatarIcon,
    arrowButton,
    profile: false,
    inputOldPass,
    inputPassword,
    inputPasswordScd,
    buttons: true,
    button: buttonSave,
    events: {
        submit: (e: Event) => {
            formSubmitEvent(e, data);
        }
    }
};

const changePassword = new ChangePassword(data);

export default changePassword;
