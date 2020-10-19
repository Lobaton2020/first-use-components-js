function Card() {

    const render = () => {
        const element = document.createElement("div");
        element.innerHTML = `
                <div id="card-show" style="display:none" class="col m6">
                    <h4 class="header">Link Generado:</h4>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <a class="show-link" href="" target="_blank"></a>
                           <a class="right waves-effect waves-light btn info close">Cerrar</a>
                        </div>

                      </div>
                    </div>
                  </div>`;
        return element;
    }
    const container = render();
    const handleClose = (e) => {
        container.firstElementChild.style.display = "none"
    };
    container.querySelector(".close").addEventListener("click", handleClose);
    return container;
}

export default Card;
