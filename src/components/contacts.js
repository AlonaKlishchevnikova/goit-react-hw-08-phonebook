import axios from 'axios';
const contactsInstance = axios.create({
    baseURL: "'https://connections-api.herokuapp.com'"
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
 
export const updateContact = async(id) => {
    const {data} = await contactsInstance.patch(`/contacts/${id}`);
    return data;
}

