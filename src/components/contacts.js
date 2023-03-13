import axios from 'axios';
const contactsInstance = axios.create({
    baseURL: "https://6409cb38d16b1f3ed6dd19ff.mockapi.io/api/phonebook/"
})

export const getAllContacts = async()=> {
    const {data} = await contactsInstance.get("/contacts");
    return data;
}

export const addContact = async(data) => {
    const {data: result} = await contactsInstance.post("/contacts", data);
    return result;
}

export const deleteContact = async(id) => {
    const {data} = await contactsInstance.delete(`/contacts/${id}`);
    return data;
}

