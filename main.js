import Button from "./components/Button.js"
import Card from "./components/Card.js"
import List from "./components/List.js"
import Config from "./providers/Config.js"
import Header from "./components/Header.js"

const app = document.querySelector('#root');
Config(app);
app.appendChild(Header());
app.appendChild(Button());
app.appendChild(Card());
app.appendChild(List());

window.URL_MEET = "http://g.co/meet/new_";

