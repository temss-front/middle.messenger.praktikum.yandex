import profileTpl from "../../components/profileTpl/profileTpl.hbs";
import "../../components/profileTpl/profileTpl.scss";
import Block from "../../core/Block";

type ChangeProfileProps = Record<string, any>;
export default class ChangeProfile extends Block<ChangeProfileProps> {
  constructor(props: ChangeProfileProps) {
    super("div", props);
  }

  addEvents() {
    this.element.querySelectorAll("form").forEach((form) => {
      form.addEventListener("submit", this.props.events.submit);
    });
  }

  addAttribute() {
    const {
      attr = {
        class: "profilePage-box",
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
    return this.compile(profileTpl, this.props);
  }
}
