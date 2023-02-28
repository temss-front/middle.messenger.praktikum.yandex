import register from "../../components/authRegForm/authReg.hbs";
import "../../components/authRegForm/authReg.scss";
import Block, { Props } from "../../core/Block";

type RegisterPageProps = Record<string, any>;
export default class RegisterPage extends Block<RegisterPageProps> {
  constructor(props: Props) {
    super("div", props);
  }

  addEvents() {
    this.element.querySelectorAll("form").forEach((form) => {
      form.addEventListener("submit", this.props.events.submit);
    });
  }

  render() {
    return this.compile(register, this.props);
  }
}
