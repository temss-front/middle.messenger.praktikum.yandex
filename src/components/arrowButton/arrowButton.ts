import arrow from "./arrowButton.hbs";
import "./arrowButton.scss";
import Block from "../../core/Block";
import { IEvents } from "../../types/events.interface";

type ArrowButtonProps = {
  events: IEvents;
  attr?: Record<string, string>;
};

export default class ArrowButton extends Block<ArrowButtonProps> {
  render() {
    return this.compile(arrow, this.props);
  }
}
