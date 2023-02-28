import avatarIcon from "../../assets/avatar.svg";
import Profile from "./profile";
import Span from "../../components/span/span";
import ArrowButton from "../../components/arrowButton/arrowButton";
import InputLabel from "../../components/inputLabel/inputLabel";

const arrowButton = new ArrowButton("div", {
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log("arrBtn");
    },
  },
});

const changeData = new Span("li", {
  spanClass: "spanBlue",
  spanVal: "Изменить данные",
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log(changeData);
    },
  },
});

const changePassword = new Span("li", {
  spanClass: "spanBlue",
  spanVal: "Изменить пароль",
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log(changePassword);
    },
  },
});

const exit = new Span("li", {
  spanClass: "spanRed",
  spanVal: "Выйти",
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log("exit");
    },
  },
});

const inputMail = new InputLabel("li", {
  label: "E-mail",
  inputType: "text",
  inputId: "van@mail.ru",
  disabled: "disabled",
  events: {},
});

const inputLogin = new InputLabel("li", {
  label: "Логин",
  inputType: "text",
  inputId: "an",
  disabled: "disabled",
  events: {},
});

const inputName = new InputLabel("li", {
  label: "Имя",
  inputType: "text",
  inputId: "Иван",
  disabled: "disabled",
  events: {},
});

const inputScdName = new InputLabel("li", {
  label: "Фамилия",
  inputType: "text",
  inputId: "Иванов",
  disabled: "disabled",
  events: {},
});

const inputNick = new InputLabel("li", {
  label: "Никнейм",
  inputType: "text",
  inputId: "vanvan",
  disabled: "disabled",
  events: {},
});

const inputPhone = new InputLabel("li", {
  label: "Телефон",
  inputType: "text",
  inputId: "+7-909-09-09-090",
  disabled: "disabled",
  events: {},
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
  changeData,
  changePassword,
  exit,
};

const profilePage = new Profile(data);

export default profilePage;
