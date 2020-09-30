import LoginComponent from "./components/login-component.js";
import NavbarComponent from "./components/navbar-component.js";
import NoteComponent from "./components/note-component.js";
import ShowResultComponent from "./components/show-component.js";

if (localStorage.getItem("session-js-notes")) {
    customElements.define("app-navbar", NavbarComponent);
    customElements.define("app-root", NoteComponent);
    customElements.define("app-result", ShowResultComponent);
} else {
    customElements.define("app-root", LoginComponent);
}