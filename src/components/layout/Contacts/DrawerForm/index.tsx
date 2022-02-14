import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form, Offcanvas, OffcanvasBody, OffcanvasHeader} from "reactstrap";
import {INITIAL_DRAW_FORM} from "../../../../utils/constants";
import {Contact} from "../../../../utils/types";
import {addContact, editContactById} from "../../../../redux/reducers/contactReducer";
import FormInput from "./FormInput";

interface DrawerFormProps {
    open: boolean;
    onClose: () => void;
    currentContactId: number | null;
    clearForm: () => void;
}

const DrawerForm = ({open, onClose, currentContactId, clearForm}: DrawerFormProps) => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState<any>(INITIAL_DRAW_FORM)
    const contactData = useSelector((state: any) => currentContactId ? state.contact.contacts.find((el: Contact) => el.id === currentContactId) :  null)

    const handleClose = () => {
        onClose()
        clearForm()
        setFormValues(INITIAL_DRAW_FORM)
    }

    useEffect(() => {
        if (currentContactId) {
            const {id, address, company, ...contact} = contactData

            const prepareContact = {
                ...contact,
                street: address.street,
                city: address.city,
                zipcode: address.zipcode,
            }

            setFormValues(prepareContact)
        }
    }, [currentContactId])

    const handleInputChange = useCallback((key: string, value: string) => {
        setFormValues((prev: any) => {
            return {
                ...prev,
                [key]: value
            }
        })
    }, [])

    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        const {city, street, zipcode, ...rest} = formValues

        if (currentContactId) {
            const validContact = {
                ...rest,
                id: contactData.id,
                address: {
                    ...contactData.address,
                    city: city,
                    street: street,
                    zipcode: zipcode
                },
                company: contactData.company
            }

            dispatch(editContactById(validContact))
        } else {
            const newContact = {
                id: new Date().valueOf(),
                ...rest,
                address: {
                    city: city,
                    street: street,
                    zipcode: zipcode
                },
            }

            dispatch(addContact(newContact))
        }
        handleClose()
    }

    return (
        <Offcanvas isOpen={open} toggle={handleClose}>
            <OffcanvasHeader toggle={handleClose}>
                {currentContactId ? 'Edit' : 'Add new'}  contact
            </OffcanvasHeader>
            <OffcanvasBody>
                <Form onSubmit={handleFormSubmit}>
                    <FormInput onChange={handleInputChange} label="Name" value={formValues.name} name="name" validators={{minLength: 3}} />
                    <FormInput onChange={handleInputChange} label="Username" value={formValues.username} name="username" />
                    <FormInput onChange={handleInputChange} label="Phone" value={formValues.phone} name="phone" />
                    <FormInput onChange={handleInputChange} label="Email" value={formValues.email} name="email" />
                    <FormInput onChange={handleInputChange} label="Street" value={formValues.street} name="street" />
                    <FormInput onChange={handleInputChange} label="Suite" value={formValues.suite} name="suite" />
                    <FormInput onChange={handleInputChange} label="City" value={formValues.city} name="city" />
                    <FormInput onChange={handleInputChange} label="Zipcode" value={formValues.zipcode} name="zipcode" />
                    <Button type="submit" disabled={Object.values(formValues).some(el => el === '')}>
                        Submit
                    </Button>
                </Form>
            </OffcanvasBody>
        </Offcanvas>
    )
};

export default DrawerForm;