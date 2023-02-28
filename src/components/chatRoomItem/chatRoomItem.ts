import chatRoom from "./chatRoomItem.hbs";
import "./chatRoomItem.scss";
import { IEvents } from "../../types/events.interface";
import Block from "../../core/Block";

type ChatRoomItemProps = {
  chatName: string;
  avatarImage?: File;
  userMsg?: boolean;
  lastMsg?: string;
  dateMsg?: string;
  newMsg?: number;
  events?: IEvents;
  attr?: Record<string, string>;
};
export default class ChatRoomItem extends Block<ChatRoomItemProps> {
  constructor(tagName: string, props: ChatRoomItemProps) {
    super(tagName, props);
  }

  addEvents() {
    this.element?.addEventListener("click", this.props.events.click);
  }

  addAttribute() {
    const {
      attr = {
        class: "room-box",
      },
    } = this.props;
    const _attr = attr as Record<string, any>;
    if (attr) {
      Object.entries(_attr).forEach(([key, value]) => {
        this.element.setAttribute(key, value);
      });
    }
  }

  render() {
    return this.compile(chatRoom, this.props);
  }
}
