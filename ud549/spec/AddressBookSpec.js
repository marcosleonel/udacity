describe('Addres Book', () => {
    it('should be able to add a contact', () => {

        let addressBook = new AddressBook(),
            thisContact = new ThisContact();

        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });
});