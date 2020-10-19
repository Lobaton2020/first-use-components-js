function Header() {

    const render = () => {
        const element = document.createElement("div");
        element.innerHTML = `
                <div class="col m6 center">
                    <h4 class="header">Genera una sesion de google meet.<br> A solo un CLICK!</h4>
                </div>`;
        return element;
    }
    const container = render();
    container.style.marginBottom = "40px"
    return container;
}

export default Header;
