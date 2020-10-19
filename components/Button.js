import LocalStorage from "./../providers/LocalStorage.js";
import Alert from "./Alert.js";

function Button() {

    const render = () => {
        const element = document.createElement("div");
        element.innerHTML = `
            <a href="#" id="button-meet" class="waves-effect waves-light btn-small blue">Obtener Link del google Meet</a>
            <a class="right waves-effect waves-light btn red delete-all">Borrar todo</a>
        `;
        return element;
    }
    const localStorage = new LocalStorage();

    const copyLink = (link) => {
        const aux = document.createElement("input");
        aux.setAttribute("value", link);
        document.body.appendChild(aux)
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux)
        Swal.fire("Exito!", "Link copiado.", "info");

    };

    const handleClickDeleteAll = (e) => {
        const localStorage = new LocalStorage();
        Alert(() => {
            if (localStorage.truncate("links")) {
                location.reload();
            } else {
                Swal.fire('Error!', 'Pasó algo!', 'error');
            }
        });
    }
    const handleClick = (e) => {
        e.preventDefault();
        let numRand;
        numRand = Math.floor(Math.random() * 1000000);
        while (numRand < 99999) {
            numRand = Math.floor(Math.random() * 1000000);
        }
        const url = window.URL_MEET + numRand;
        const data = {
            links: {
                link: url
            }
        };
        if (localStorage.add(data)) {
            const card = document.querySelector("#card-show");
            card.style.display = "block";
            const link = card.querySelector(".show-link");
            link.href = url;
            link.textContent = url;
            copyLink(url);
        }

    };
    const container = render();
    container.style.paddingBottom = "20px"
    container.querySelector("#button-meet").addEventListener("click", handleClick);
    container.querySelector(".delete-all").addEventListener("click", handleClickDeleteAll);


    return container;

}

export default Button;