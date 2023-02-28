import inputSearch from "./inputSearch.hbs";
import "./inputSearch.scss";
import { IEvents } from "../../types/events.interface";
import Block from "../../core/Block";

export interface InputSearchProps {
  spanValue: string;
  inputPlaceholder: string;
  inputName: string;
  events: IEvents;
}

export default class InputSearch extends Block<InputSearchProps> {
  constructor(tagName: string, props: InputSearchProps) {
    super(tagName, props);
  }

  addEvents() {
    this.element.querySelectorAll("input").forEach((inp) => {
      inp.addEventListener("input", this.props.events.input);
    });
  }

  addAttribute() {
    const {
      attr = {
        class: "input-search-wrapper",
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
    return this.compile(inputSearch, this.props);
  }
}
