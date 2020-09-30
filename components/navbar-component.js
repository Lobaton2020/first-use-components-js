export default class NavbarComponent extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.getHTML();
        this.querySelector("#logout").addEventListener("click", this.click)
    }
    click(e) {
        e.preventDefault();
        localStorage.removeItem("session-js-notes");
        window.location.reload();
    }
    getHTML() {
        return (`
            <nav>
            <div class="nav-wrapper">
                <a href="" class="brand-logo">&nbsp;&nbsp; Calcula tu nota</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a id="logout" href="#">Cerrar Sesión</a></li>
                </ul>
            </div>
            </nav>
        `);
    }
}