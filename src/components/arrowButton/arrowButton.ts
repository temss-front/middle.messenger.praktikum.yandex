import arrow from "./arrowButton.hbs";
import "./arrowButton.scss";
import Block from "../../core/Block";
import { IEvents } from "../../types/events.interface";

type ArrowButtonProps = {
  events: IEvents;
  attr?: Record<string, string>;
};

export default class ArrowButton extends Block<ArrowButtonProps> {
  addEvents(): void {
    this.element
      .querySelector("button")
      ?.addEventListener("click", this.props.events.click);
  }

  render() {
    return this.compile(arrow, this.props);
  }
}
