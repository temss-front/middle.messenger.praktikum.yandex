import "../../components/errors/errors.scss";
import Errors from "../../components/errors/errors";

const pageNotFound = new Errors("div", {
  error: "404",
  description: "Не туда попали",
  events: {
    click: () => {},
  },
});

export default pageNotFound;
