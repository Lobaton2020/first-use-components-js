export default class LoginComponent extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.getHTML();
        this.querySelector("#login").addEventListener("submit", this.submit);
    }
    disconnectedCallback() {

    }
    attributesChangedCallback() {

    }
    static get observedAttributes() {
        return [];
    }

    async submit(e) {
        e.preventDefault();
        let renderMessage = e.currentTarget.querySelector("#msg"),
            user = e.currentTarget.user.value,
            password = e.currentTarget.password.value,
            msg = false,
            contador = e.currentTarget.getAttribute("intentos");
        if (contador == null) {
            e.currentTarget.setAttribute("intentos", 0)
        } else {
            e.currentTarget.setAttribute("intentos", ++contador)
        }
        if (contador >= 3) {
            e.currentTarget.reset();
            renderMessage.innerHTML = `<div class="card-panel red lighten-2">Has terminado el numero máximo de intentos. (${contador})</div>`;
            return;
        }

        if (user.length < 1 && password.length < 1) {
            msg = `<div class="card-panel red lighten-2">Error!. Debes llenar todos los campos.</div>`;
        } else {
            let result = await fetch("credentials.txt");
            let credentials = await result.json();
            if (user === credentials.user && password === credentials.password) {
                msg = `
                 <div class="card-panel green lighten-3">
                    Credenciales correctas. Redirecionando...
                </div>
                <div>
                <div class="progress">
                   <div class="indeterminate"></div>
                </div>
                </div>`;

                localStorage.setItem("session-js-notes", "true");
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
            } else {
                msg = `<div class="card-panel red lighten-2">Error de autenticación.</div>`;
            }
        }
        if (msg) {
            renderMessage.innerHTML = msg;
        }
    }
    getHTML() {
        return (`
        <div class="container">
            <div class="row">
                <div class="col s3"></div>
                <div class="col s6">
                    <h3 class="center">Iniciar sesión</h3>
                    <form id="login">
                    <div id="msg"></div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input name="user" type="text" autofocus="on" class="validate">
                                <label for="user">Usuario</label>
                            </div>
                            <div class="input-field col s12">
                                <input name="password" type="password" class="validate">
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row center">
                            <button class="btn waves-effect waves-light w-100" type="submit" name="action">Validar mis
                                datos
                        </div>
                    </form>
                </div>
                <div class="col s3"></div>
            </div>
        </div>
        `);
    }
}