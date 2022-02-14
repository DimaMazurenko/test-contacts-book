// Interfaces

export interface IContactReducer {
    contacts: Contact[];
    loadingPutContacts: boolean;
}

// Types

export type Contact = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string
}

export type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}