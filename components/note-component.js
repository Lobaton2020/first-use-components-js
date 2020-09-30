export default class NoteComponent extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.getHTML();
        this.querySelector("#note").addEventListener("submit", this.submit);

    }
    submit(e) {
        e.preventDefault();
        let nota1 = parseFloat(e.currentTarget.nota1.value),
            nota2 = parseFloat(e.currentTarget.nota2.value),
            nota3 = parseFloat(e.currentTarget.nota3.value),
            renderMessage = e.currentTarget.querySelector("#msg"),
            msg = false,
            subtotal, needNota, minimNota = 3.5;
        if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
            [nota1, nota2, nota3].forEach((data) => {
                if (data > 5) {
                    msg = `<div class="card-panel red lighten-2">La nota no puede ser superior a 5</div>`;
                }
            });
            if (msg) {
                renderMessage.innerHTML = msg;
                return;
            }
            let result1 = nota1 * 0.15;
            let result2 = nota2 * 0.2;
            let result3 = nota3 * 0.25;
            subtotal = result1 + result2 + result3;
            needNota = (minimNota - subtotal) / 0.6;
            document.querySelector("app-root").innerHTML = "";

            let result = document.querySelector("app-result");

            result.setAttribute("result1", shortNumber(nota1, 3));
            result.setAttribute("result2", shortNumber(nota2, 3));
            result.setAttribute("result3", shortNumber(nota3, 3));
            result.setAttribute("subtotal", shortNumber(subtotal, 3));
            result.setAttribute("total", shortNumber(needNota, 3));
        } else {
            msg = `<div class="card-panel red lighten-2">Error! Solo debes ingresar numeros</div>`;
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
                    <h3 class="center">Calcular Nota</h3>
                    <form id="note">
                    <div id="msg"></div>
                        <div class="row">
                        <span class="helper-text center" >Se calculará la ultima nota minina equivalente a 40%. Para <br> pasar con 3.5 / 5, como nota general sobre el 100%</span>
                            <div class="input-field col s12">
                                <input name="nota1" type="text" autofocus="on" class="validate" required>
                                <label for="user">Nota 1</label>
                                <span class="helper-text">Esta nota vale el 15%</span>
                            </div>
                            <div class="input-field col s12">
                                <input name="nota2" type="text" class="validate" required>
                                <label for="user">Nota 2</label>
                                <span class="helper-text" >Esta nota vale el 20%</span>
                            </div>
                            <div class="input-field col s12">
                                <input name="nota3" type="text" class="validate" required>
                                <label for="user">Nota 3</label>
                                <span class="helper-text" >Esta nota vale el 25%</span>
                            </div>
                        </div>
                        <div class="row center">
                            <button class="btn waves-effect waves-light w-100" type="submit" name="action">Ver resultados!
                        </div>
                    </form>
                </div>
                <div class="col s3"></div>
            </div>
        </div>
        `);
    }
}

function shortNumber(number, long) {
    number = number.toString();
    let position = number.indexOf(".");
    return number.substring(0, position + long)
}