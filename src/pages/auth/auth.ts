import auth from "../../components/authRegForm/authReg.hbs";
import "../../components/authRegForm/authReg.scss";
import Block from "../../core/Block";

type AuthPageProps = Record<string, any>;

export default class AuthPage extends Block<AuthPageProps> {
  constructor(props: AuthPageProps) {
    super("div", props);
  }

  addEvents() {
    this.element.querySelectorAll("form").forEach((form) => {
      form.addEventListener("submit", this.props.events.submit);
    });
  }

  render() {
    return this.compile(auth, this.props);
  }
}
