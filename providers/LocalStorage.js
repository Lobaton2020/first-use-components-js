function LocalStorage() {

    this.get = (key) => {
        if (!window.localStorage.getItem(key)) return [];
        return JSON.parse(window.localStorage.getItem(key));
    };

    this.isset = (key, linkCompare) => {
        if (!window.localStorage.getItem(key)) return false;
        const links = JSON.parse(window.localStorage.getItem(key));
        for (let { link } of links) {
            if (link === linkCompare) return true;
        }
        return false;
    };

    this.add = (object) => {
        const key = Object.keys(object)[0];
        const value = object[key];
        const links = this.get(key);
        console.log(this.isset(key, value.link))
        if (this.isset(key, value.link)) return false;
        links.push(value);
        window.localStorage.setItem(key, JSON.stringify(links));
        return true;
    }

    this.delete = (key, linkCompare) => {
        if (!window.localStorage.getItem(key)) return false;
        const links = JSON.parse(window.localStorage.getItem(key));
        const newLinks = links.filter(({ link }) => link !== linkCompare)
        window.localStorage.setItem(key, JSON.stringify(newLinks));
        return true;
    }

    this.truncate = (key) => {
        if (window.localStorage.removeItem(key)) { }
        return true;
    }

}


export default LocalStorage;