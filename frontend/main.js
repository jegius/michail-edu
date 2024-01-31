import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import {diContainer} from './chat-app/di/di.js';
import {SERVICES} from './chat-app/di/api.js';
import {messageService} from './chat-app/services/messageService.js';
import {httpService} from './chat-app/services/httpService.js';
import {ChatComponent} from './chat-app/components/chat/chat-component.js';
import { HeaderComponent } from './chat-app/components/header/header-component.js';
import { activityService } from './chat-app/services/activityService.js';
import { imagesService } from './chat-app/services/imagesService.js';
import { namesService } from './chat-app/services/namesService.js';


diContainer.register(SERVICES.messages, messageService);
diContainer.register(SERVICES.http, httpService);
diContainer.register(SERVICES.activity, activityService);
diContainer.register(SERVICES.images, imagesService);
diContainer.register(SERVICES.names, namesService);

[
    ChatComponent,
    HeaderComponent
].map(component => customElements.define(component.name, component));



document.querySelector('#app').innerHTML = `
  <div>
    <header-component></header-component>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <chat-component test-text="test"></chat-component>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

