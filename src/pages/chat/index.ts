import clip from "../../assets/avatar.svg";
import avatar from "../../assets/avatar.svg";
import chatImage from "../../assets/avatar.svg";
import ChatPage from "./chat";
import InputSearch from "../../components/inputSearch/inputSearch";
import ChatRoomItem from "../../components/chatRoomItem/chatRoomItem";
import Message from "../../components/message/message";
import ArrowButton from "../../components/arrowButton/arrowButton";
import Input from "../../components/input/input";
import { formSubmitEvent } from "../../utils/events";

const triggerToCutString = 54;
const cutString = (str: string) => {
  if (str.length < triggerToCutString) {
    return str;
  }
  return str.substring(0, triggerToCutString - 3) + "...";
};

const chatRoomClick: (e: Event) => void = (e: Event) => {
  document.querySelectorAll(".room-box").forEach((chatRoom) => {
    chatRoom.classList.remove("selected");
  });

  (e.currentTarget as HTMLElement).classList.add("selected");
};

const inputSearch = new InputSearch("div", {
  spanValue: "Профиль",
  inputPlaceholder: "Поиск",
  inputName: "inputSearch",
  events: {
    input: (e: Event) => {
      console.log((e.target as HTMLInputElement).value);
    },
  },
});

const chatOne = new ChatRoomItem("div", {
  chatName: "One",
  userMsg: true,
  lastMsg: cutString("May the force be with you"),
  dateMsg: "11:25",
  events: {
    click: chatRoomClick,
  },
});

const chatTwo = new ChatRoomItem("div", {
  chatName: "Two",
  userMsg: true,
  lastMsg: cutString(
    "WTF MAAAAAAAAAAAAAAAAAN. Whats up. How do you do??????????????????"
  ),
  dateMsg: "10:55",
  events: {
    click: chatRoomClick,
  },
  attr: {
    class: "room-box selected",
  },
});

const chatThree = new ChatRoomItem("div", {
  chatName: "Three",
  userMsg: true,
  lastMsg: cutString("What have you become"),
  dateMsg: "12:38",
  newMsg: 5,
  events: {
    click: chatRoomClick,
  },
});

const openedChat = new ChatRoomItem("div", {
  chatName: "LOL",
  events: {
    click: (e: Event) => {
      console.log(e);
    },
  },
});

const recMess1 = new Message("div", {
  messageContent: "How are you?",
  messageTime: "22:47",
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log("recMess1");
    },
  },
});

const sentMess1 = new Message("div", {
  messageContent: "Hi maaaan",
  messageTime: "22:48",
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log("sentMess1");
    },
  },
  attr: {
    class: "message-item sent-msg",
  },
});

const recMess2 = new Message("div", {
  image: true,
  imgSource: chatImage,
  messageTime: "22:50",
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log("recMess2");
    },
  },
});

const messageArea = new Input("div", {
  inputType: "text",
  inputClass: "message chat-input__msg",
  inputName: "messageArea",
  inputPlaceholder: "Введите ваше сообщение...",
  inputAutocomplete: "off",
  events: {},
});

const arrowButton = new ArrowButton("div", {
  events: {
    click: () => {},
  },
  attr: {
    class: "directionRight blue-edit",
  },
});

const data = {
  inputSearch,
  chatOne,
  chatTwo,
  chatThree,
  openedChat,
  recMess1,
  sentMess1,
  recMess2,
  clip,
  messageArea,
  arrowButton,
  avatarImage: avatar,
  events: {
    submit: (e: Event) => {
      formSubmitEvent(e, data);
    },
  },
};

const chat = new ChatPage(data);

export default chat;
