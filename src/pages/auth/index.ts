import AuthPage from './auth';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { formSubmitEvent, inputBlur, inputFocus } from '../../utils/events';

const goButton = new Button(
    'div',
    {
        buttonType: 'button',
        btnValue: 'Вход',
        events:
            {
                click: () => {
                    console.log('asdasfwefwe');
                }
            }
    });
const altBtn = new Button(
    'div',
    {
        buttonType: 'button__ghost',
        btnValue: 'Нет аккаунта?',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                console.log('asdasdasacqcw');
            }
        }
    });

const inputLogin = new Input(
    'li',
    {
        inputType: 'text',
        inputPlaceholder: 'Логин',
        inputName: 'inputLogin',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    });

const inputPassword = new Input(
    'li',
    {
        inputType: 'password',
        inputPlaceholder: 'Пароль',
        inputName: 'inputPassword',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    });

const data = {
    auth: true,
    footerTitle: 'Вход',
    goButton,
    altBtn,
    inputLogin,
    inputPassword,
    events: {
        submit: (e: Event) => {
            formSubmitEvent(e, data);
        }
    }
};
const auth = new AuthPage(data);

export default auth;

