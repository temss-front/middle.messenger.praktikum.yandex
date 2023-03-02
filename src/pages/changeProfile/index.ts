import avatarIcon from "../../assets/avatar.svg";
import ChangeProfile from "./changeProfile";
import ArrowButton from "../../components/arrowButton/arrowButton";
import InputLabel from "../../components/inputLabel/inputLabel";
import Button from "../../components/button/button";
import { formSubmitEvent, inputBlur, inputFocus } from "../../utils/events";

const arrowButton = new ArrowButton("div", {
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log("arrBtn");
    },
  },
});

const inputMail = new InputLabel("li", {
  label: "E-mail",
  inputType: "text",
  inputName: "email",
  inputId: "ivan@mail.ru",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const inputLogin = new InputLabel("li", {
  label: "Логин",
  inputType: "text",
  inputId: "ivan",
  inputName: "login",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const inputName = new InputLabel("li", {
  label: "Имя",
  inputType: "text",
  inputId: "Ivan",
  inputName: "first_name",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const inputScdName = new InputLabel("li", {
  label: "Фамилия",
  inputType: "text",
  inputId: "Ivanov",
  inputName: "second_name",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const inputNick = new InputLabel("li", {
  label: "Никнейм",
  inputType: "text",
  inputId: "ivanana",
  inputName: "display_name",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const inputPhone = new InputLabel("li", {
  label: "Телефон",
  inputType: "text",
  inputId: "+7-909-09-09-090",
  inputName: "phone",
  events: {
    focus: inputFocus,
    blur: (e: Event) => {
      inputBlur(e, data);
    },
  },
});

const buttonSave = new Button("div", {
  buttonType: "button-save",
  btnValue: "Сохранить",
  events: {
    click: () => {
      console.log("Submit");
    },
  },
  attr: {
    class: "box-profile-bottom",
  },
});

const data = {
  avatarIcon,
  arrowButton,
  profile: true,
  inputMail,
  inputLogin,
  inputName,
  inputScdName,
  inputNick,
  inputPhone,
  buttons: true,
  button: buttonSave,
  events: {
    submit: (e: Event) => {
      formSubmitEvent(e, data);
    },
  },
};

const changeProfilePage = new ChangeProfile(data);

export default changeProfilePage;
