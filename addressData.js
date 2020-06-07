let addressbook = [];

const getAddressBook = () => {
  return fetch("http://localhost:8088/addressBook")
    .then((httpResponse) => {
      return httpResponse.json();
    })
    .then((arrayOfEntries) => {
      addressBook = arrayOfEntries;
    });
};
