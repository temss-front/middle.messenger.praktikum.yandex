import auth from "../../components/authRegForm/authReg.hbs";
import "../../components/authRegForm/authReg.scss";
import Block from "../../core/Block";

type AuthPageProps = Record<string, any>;

export default class AuthPage extends Block<AuthPageProps> {
  constructor(props: AuthPageProps) {
    super("div", props);
  }

  render() {
    return this.compile(auth, this.props);
  }
}
