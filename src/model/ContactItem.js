class ContactItem {

    constructor (name,number) {
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.number = number
    }
    
    static fromJSON (json) {
        let contactInfo = new ContactItem();
        contactInfo.id = json.id;
        contactInfo.name = json.name;
        contactInfo.number = json.number;
    
    
        return contactInfo;
    }
    }
    
    export default ContactItem;