export default class ShowResultComponent extends HTMLElement {

    constructor() {
        super();
        this.render = false;

        this.subtotal = null;
        this.total = null;
        this.result1 = null;
        this.result2 = null;
        this.result3 = null;
    }

    connectedCallback() {
        if (this.render) {
            let data = {
                "result1": this.result1,
                "result2": this.result2,
                "result3": this.result3,
                "subtotal": this.subtotal,
                "total": this.total
            };
            this.innerHTML = this.getHTML(data);
            this.querySelector("#goback").addEventListener("click", this.click);
        }

    }
    click(e) {
        window.location.reload()
    }
    attributeChangedCallback(name, _old, _new) {

        if (name === "result1") this.result1 = _new;
        if (name === "result2") this.result2 = _new;
        if (name === "result3") this.result3 = _new;
        if (name === "subtotal") this.subtotal = _new;
        if (name === "total") {
            this.render = true;
            this.total = _new;
            this.connectedCallback();
        }

    }
    static get observedAttributes() {
        return ["result1", "result2", "result3", "subtotal", "total"];
    }

    getHTML({ result1, result2, result3, subtotal, total }) {
        let result = `<b>Resultado minimo en la siguiente nota : </b>(sobre el 40%) para pasar con 3.5/ 5<h4 class="truncate"> ${total}</i></h4>`;
        if (total > 5) {
            result += `
            <div class="card-panel">
            <span class="red-text text-darken-2">Bro!, Buscate un trabajito! :v</span>
            </div>`;
        }
        let nowState = `Tu nota actual es: ${subtotal} sobre el 60%`;
        return (`
        <div class="container">
        <div class="row">
            <div class="col s3"></div>
            <div class="col s6">
                <h3 class="center">Resultado</h3>
                        <div class="card">
                        <ul class="collection">
                            <li class="collection-item">Nota1 - 15%
                                <span class="new badge blue" data-badge-caption="">${result1}</span>
                            </li>
                            <li class="collection-item">Nota2 - 20%
                                <span class="new badge blue" data-badge-caption="">${result2}</span>
                            </li>
                            <li class="collection-item">Nota3 - 25%
                                <span class="new badge blue" data-badge-caption="">${result3}</span>
                            </li>
                        </ul>
                        <div class="card-content">
                            <div>${nowState}</div>
                            <div>${result}</div>
                            <a href="#" id="goback">Regresar</a>
                        </div>
                </div>

            </div>
            <div class="col s3"></div>
        </div>
    </div>
        `);
    }
}