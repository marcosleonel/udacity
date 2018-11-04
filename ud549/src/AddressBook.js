function AddressBook() {
    let contactsList = [];

    this.addContact = function(contact) {
        contactsList.push(contact);
    };

    this.getContact = function(index) {
        return contactsList[index];
    }
}