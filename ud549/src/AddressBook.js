function AddressBook() {
    let contactsList = [];
    let initialComplete = false;

    this.getInitialContacts = (cb) => {
        let self = this;

        setTimeout( () => {
            self.initialComplete = true;
            if (cb) {
                return cb();
            }
        }, 3);
    }

    this.addContact = (contact) => {
        contactsList.push(contact);
    };

    this.getContact = (index) => {
        return contactsList[index];
    }

    this.deleteContact = (index) => {
        contactsList.splice(index, 1);
    }
}