import LocalStorage from "./../providers/LocalStorage.js";
import Alert from "./Alert.js";
function List() {

    const render = () => {
        const element = document.createElement("div");
        element.innerHTML = `
         <ul class="collection with-header">
            <li class="collection-header"><h5>Links creados </h5></li>
            <li id="item" class="collection-item">
                <div>
                    <a class="item" href="#"></a>
                    <a href="#" class="delete secondary-content">
                        <i class="material-icons">delete</i>
                    </a>
                </div>
            </li>

         </ul>`;
        return element;
    }

    const localStorage = new LocalStorage();
    const handleClick = (e) => {
        const link = e.currentTarget;
        Alert(() => {
            if (localStorage.delete("links", link.dataset.link)) {
                Swal.fire('Eliminado!', '', 'success');
                link.parentElement.parentElement.outerHTML = "";
            } else {
                Swal.fire('Error!', 'Pasó algo!', 'error');
            }
        });
    }

    const container = render();
    const item = container.querySelector("#item");
    const fragment = document.createDocumentFragment();
    localStorage.get("links").forEach(({ link }) => {
        const clon = item.cloneNode(true);
        const linkElement = clon.querySelector(".item");
        const deleteLink = clon.querySelector(".delete");
        linkElement.href = link;
        linkElement.textContent = link;
        deleteLink.addEventListener("click", handleClick);
        deleteLink.dataset.link = link;
        fragment.appendChild(clon);
    })

    if (localStorage.get("links").length === 0) {
        const header = container.querySelector(".collection-header > h5");
        header.innerText = "No hay links...";
        header.style.textAlign = "center";
    }


    item.parentElement.appendChild(fragment);
    item.outerHTML = "";
    return container;
}

export default List;
