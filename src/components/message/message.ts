import message from "./message.hbs";
import "./message.scss";
import { IEvents } from "../../types/events.interface";
import Block from "../../core/Block";

type MessageProps = {
  image?: boolean;
  imgSource?: File;
  messageTime: string;
  messageContent?: string;
  events: IEvents;
  attr?: Record<string, string>;
};
export default class Message extends Block<MessageProps> {
  constructor(tagName: string, props: MessageProps) {
    super(tagName, props);
  }

  addEvents() {
    this.element
      .querySelector("span")
      ?.addEventListener("click", this.props.events.click);
  }

  addAttribute() {
    const { attr = { class: "message-item" } } = this.props;
    const _attr = attr as Record<string, any>;
    if (attr) {
      Object.entries(_attr).forEach(([key, value]) => {
        this.element.setAttribute(key, value);
      });
    }
  }

  render() {
    return this.compile(message, this.props);
  }
}
