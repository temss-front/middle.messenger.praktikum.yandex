import labelInput from "./inputLabel.hbs";
import "./inputLabel.scss";
import { IEvents } from "../../types/events.interface";
import Block from "../../core/Block";

type InputLabelProps = {
  label: string;
  inputType: string;
  inputId?: string;
  inputName?: string;
  disabled?: string;
  events: IEvents;
  attr?: Record<string, string>;
};
export default class InputLabel extends Block<InputLabelProps> {
  addAttribute() {
    const {
      attr = {
        class: "inputLabel-wrapper",
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
    return this.compile(labelInput, this.props);
  }
}
