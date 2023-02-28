import Button from "../../components/button/button";
import RegisterPage from "./register";
import Input from "../../components/input/input";
import { formSubmitEvent, inputBlur, inputFocus } from "../../utils/events";

const goButton = new Button("div", {
  buttonType: "button",
  btnValue: "Зарегистрироваться",
  events: {
    click: () => {
      console.log("Submit");
    },
  },
});
const altBtn = new Button("div", {
  buttonType: "button__ghost",
  btnValue: "Войти",
  events: {
    click: () => {
      console.log("to auth");
    },
  },
});

const inputMail = new Input("li", {
  inputType: "text",
  inputPlaceholder: "Почта",
  inputName: "inputMail",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const inputLogin = new Input("li", {
  inputType: "text",
  inputPlaceholder: "Логин",
  inputName: "inputLogin",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const inputName = new Input("li", {
  inputType: "text",
  inputPlaceholder: "Имя",
  inputName: "inputName",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const inputScdName = new Input("li", {
  inputType: "text",
  inputPlaceholder: "Фамилия",
  inputName: "inputScdName",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const inputPhone = new Input("li", {
  inputType: "tel",
  inputPlaceholder: "Телефон",
  inputName: "inputPhone",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const inputPassword = new Input("li", {
  inputType: "password",
  inputPlaceholder: "Пароль",
  inputName: "inputPassword",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const inputPasswordScd = new Input("li", {
  inputType: "password",
  inputPlaceholder: "Повторите пароль",
  inputName: "inputPasswordScd",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const data = {
  register: true,
  footerTitle: "Регистрация",
  goButton,
  altBtn,
  inputMail,
  inputLogin,
  inputName,
  inputScdName,
  inputPhone,
  inputPassword,
  inputPasswordScd,
  events: {
    submit: (e: Event) => {
      formSubmitEvent(e, data);
    },
  },
};

const register = new RegisterPage(data);

export default register;
