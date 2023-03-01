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

const email = new Input("li", {
  inputType: "text",
  inputPlaceholder: "Почта",
  inputName: "email",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const login = new Input("li", {
  inputType: "text",
  inputPlaceholder: "Логин",
  inputName: "login",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const first_name = new Input("li", {
  inputType: "text",
  inputPlaceholder: "Имя",
  inputName: "first_name",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const second_name = new Input("li", {
  inputType: "text",
  inputPlaceholder: "Фамилия",
  inputName: "second_name",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const phone = new Input("li", {
  inputType: "tel",
  inputPlaceholder: "Телефон",
  inputName: "phone",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const password = new Input("li", {
  inputType: "password",
  inputPlaceholder: "Пароль",
  inputName: "password",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const second_password = new Input("li", {
  inputType: "password",
  inputPlaceholder: "Повторите пароль",
  inputName: "second_password",
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
  email,
  login,
  first_name,
  second_name,
  phone,
  password,
  second_password,
  events: {
    submit: (e: Event) => {
      formSubmitEvent(e, data);
    },
  },
};

const register = new RegisterPage(data);

export default register;
