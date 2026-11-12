import "../../components/errors/errors.scss";
import Errors from "../../components/errors/errors";

const pageServerError = new Errors("div", {
  error: "500",
  description: "Мы уже фиксим",
  events: {
    click: () => {},
  },
});

export default pageServerError;
