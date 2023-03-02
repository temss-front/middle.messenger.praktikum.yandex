import button from "./button.hbs";
import "./button.scss";
import { IEvents } from "../../types/events.interface";
import Block from "../../core/Block";

type ButtonProps = {
  buttonType: string;
  btnValue: string;
  events: IEvents;
  attr?: Record<string, string>;
};
export default class Button extends Block<ButtonProps> {
  constructor(tagName: string, props: ButtonProps) {
    super(tagName, props);
  }

  render() {
    return this.compile(button, this.props);
  }
}
