import span from "./span.hbs";
import "./span.scss";
import { IEvents } from "../../types/events.interface";
import Block from "../../core/Block";

type SpanProps = {
  spanClass: string;
  spanVal: string;
  events: IEvents;
  attr?: Record<string, string>;
};
export default class Span extends Block<SpanProps> {
  addEvents() {
    this.element.querySelectorAll("span").forEach((span) => {
      span.addEventListener("click", this.props.events.click);
    });
  }

  addAttribute() {
    const { attr = { class: "span-wrapper" } } = this.props;
    const _attr = attr as Record<string, any>;

    Object.entries(_attr).forEach(([key, value]) => {
      this.element.setAttribute(key, value);
    });
  }

  render() {
    return this.compile(span, this.props);
  }
}
