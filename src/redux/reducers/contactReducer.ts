import {Contact, IContactReducer} from "../../utils/types";

export const contactTypes = {
    GET_CONTACTS_TYPE: 'GET_CONTACTS_TYPE',
    SUCCESS_GET_CONTACTS_TYPE: 'SUCCESS_GET_CONTACTS_TYPE',
    ERROR_GET_CONTACTS_TYPE: 'ERROR_GET_CONTACTS_TYPE',
    DELETE_CONTACT_BY_ID: 'DELETE_CONTACT_BY_ID',
    EDIT_CONTACT_BY_ID: 'EDIT_CONTACT_BY_ID',
    ADD_CONTACT: 'ADD_CONTACT',
}

const initialState: IContactReducer = {
    contacts: [],
    loadingPutContacts: false,
}

const contactReducer = (state= initialState, action: any) => {
    switch (action.type) {
        case contactTypes.GET_CONTACTS_TYPE: {
            return {
                ...state,
                loadingPutContacts: true
            }
        }
        case contactTypes.SUCCESS_GET_CONTACTS_TYPE: {
            return {
                ...state,
                loadingPutContacts: false,
                contacts: action.payload
            }
        }
        case contactTypes.ERROR_GET_CONTACTS_TYPE: {
            return {
                ...state,
                loadingPutContacts: false,
            }
        }
        case contactTypes.DELETE_CONTACT_BY_ID: {
            const restContacts = state.contacts.filter(el => el.id !== action.payload);

            return {
                ...state,
                contacts: restContacts
            }
        }
        case contactTypes.EDIT_CONTACT_BY_ID: {
            const contacts = state.contacts.map(el => {
                if (el.id === action.payload.id) {
                    return action.payload
                }
                return el
            })

            return {
                ...state,
                contacts
            }
        }
        case contactTypes.ADD_CONTACT: {
            const contacts = [...state.contacts, action.payload]

            return {
                ...state,
                contacts
            }
        }
        default: {
            return state
        }
    }
}

export const getContacts = () => ({
    type: contactTypes.GET_CONTACTS_TYPE,
})
export const setSuccessContacts = (payload: Contact[]) => ({
    type: contactTypes.SUCCESS_GET_CONTACTS_TYPE,
    payload
})
export const setErrorContacts = () => ({
    type: contactTypes.ERROR_GET_CONTACTS_TYPE,
})
export const deleteContactById = (payload: number) => ({
    type: contactTypes.DELETE_CONTACT_BY_ID,
    payload
})
export const editContactById = (payload: Contact) => ({
    type: contactTypes.EDIT_CONTACT_BY_ID,
    payload
})
export const addContact = (payload: Contact) => ({
    type: contactTypes.ADD_CONTACT,
    payload
})


export default contactReducer
