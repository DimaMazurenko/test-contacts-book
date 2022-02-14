import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getContacts} from "../../../redux/reducers/contactReducer";
import {List, Input, Button} from 'reactstrap'
// @ts-ignore
import  styles from './styles.module.scss';
import {Contact} from "../../../utils/types";
import ContactCard from "./ContactCard";
import DrawerForm from "./DrawerForm";

const Contacts = () => {
    const dispatch = useDispatch();
    const contactsData = useSelector((state: any) => state.contact.contacts)
    const [contacts, setContacts] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [openDrawer, setOpenDrawer] = useState(false)
    const [currentContactId, setCurrentContactId] = useState<number | null>(null)

    useEffect(() => {
        setContacts(contactsData)
    }, [contactsData])

    useEffect(() => {
        if (!contactsData.length) {
            dispatch(getContacts())
        }
    }, [])

    const onClose = () => {
        setOpenDrawer(false);
    }
    const onChange = (e: any) => {
        const {value} = e.target
        setSearchValue(value)
    }

    const handleFilter = (contact: Contact) => {
        return contact.name.toLowerCase().includes(searchValue.toLowerCase()) || contact.username.toLowerCase().includes(searchValue.toLowerCase())
    }
    const onEditButton = (id: number) => {
        setOpenDrawer(!openDrawer)
        setCurrentContactId(id)
    }
    const clearForm = () => {
        setCurrentContactId(null)
    }

    return <div className={styles.container}>
        <Input placeholder="Type here..." value={searchValue} onChange={onChange} />
        <Button onClick={() => setOpenDrawer(!openDrawer)} className={styles.addButton}>Add new contact</Button>
        <DrawerForm open={openDrawer} onClose={onClose} currentContactId={currentContactId} clearForm={clearForm} />
        <List type="unstyled">
            {
                contacts.filter(handleFilter).map((contact: Contact, index: number) =>
                    <ContactCard
                        key={contact.id}
                        contact={contact}
                        onEditClick={() => onEditButton(contact.id)}
                        index={index} />)
            }
        </List>
    </div>
}

export default Contacts
