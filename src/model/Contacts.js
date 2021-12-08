import ContactItem from "./ContactItem";

class Contacts {

    constructor() {
        this.items = this.loadFromLocalStorage();
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();
    }

    delete(item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('contact-data', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('contact-data');

        if (json === null)
            return [];
            if (json === undefined)
            return [];

        let jsonParsed = JSON.parse(json, (key, value) => {
           
            return value;
        });

        if (jsonParsed.length === 0)
            return [];

        let contantInformation = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            contantInformation.push(ContactItem.fromJSON(jsonParsed[i]));
        }

        return contantInformation;

    }

}

export default Contacts;