import "./style.scss";
import authPage from "./pages/auth/index";
import registerPage from "./pages/register/index";
import pageNotFound from "./pages/404/pageNotFound";
import pageServerError from "./pages/500/pageServerError";
import changeProfilePage from "./pages/changeProfile/index";
import profilePage from "./pages/profile/index";
import changePassPage from "./pages/changePassword/index";
import chatPage from "./pages/chat/index";
import { renderDOM } from "./core/renderDOM";
import Block from "./core/Block";

let content: Block<any> = authPage;

window.addEventListener("load", () => {
  const path = window.location.pathname;
  switch (path) {
    case "/register":
      content = registerPage;
      break;
    case "/404":
      content = pageNotFound;
      break;
    case "/500":
      content = pageServerError;
      break;
    case "/changeProfilePage":
      content = changeProfilePage;
      break;
    case "/profilePage":
      content = profilePage;
      break;
    case "/changePassPage":
      content = changePassPage;
      break;
    case "/chatPage":
      content = chatPage;
      break;
    default:
      content = authPage;
      break;
  }
  return renderDOM("#root", content);
});
