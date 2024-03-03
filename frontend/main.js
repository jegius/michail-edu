import "./chat-app/components/common.css";
import { diContainer } from "./chat-app/di/di.js";
import { SERVICES } from "./chat-app/di/api.js";
import { messageService } from "./chat-app/services/messageService.js";
import { authService } from "./chat-app/services/authService.js";
import { httpService } from "./chat-app/services/httpService.js";
import { ChatComponent } from "./chat-app/components/chat/chat-component.js";
import { HeaderComponent } from "./chat-app/components/header/header-component.js";

diContainer.register(SERVICES.messages, messageService);
diContainer.register(SERVICES.http, httpService);
diContainer.register(SERVICES.auth, authService);

[ChatComponent, HeaderComponent].map((component) =>
  customElements.define(component.name, component)
);

document.querySelector("#app").innerHTML = `
  <header-component></header-component>
`;
