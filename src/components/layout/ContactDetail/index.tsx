import React from 'react';
import {Contact} from "../../../utils/types";
import {Link, Navigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {LINK} from "../../../utils/constants";
import {Button, ListGroup, ListGroupItem} from "reactstrap";
// @ts-ignore
import styles from './styles.module.scss'

const ContactDetail = () => {
    const {id} = useParams()
    if (!id) return null;

    const contactData = useSelector((state: any) => state.contact.contacts.find((el: Contact) => el.id === +id))

    if (!contactData) {
        return <Navigate to={LINK.NOT_FOUND} />
    }

    return (
        <ListGroup>
            <ListGroupItem>
                <Button tag={Link} to={LINK.CONTACTS}>Go To Contacts</Button>
            </ListGroupItem>
            <ListGroupItem>
                <span className={styles.property}>Name:{" "}</span>
                <span>{contactData.name}</span>
            </ListGroupItem>
            <ListGroupItem>
                <span className={styles.property}>Username:{" "}</span>
                <span>{contactData.username}</span>
            </ListGroupItem>
            <ListGroupItem>
                <span className={styles.property}>Phone:{" "}</span>
                <span>{contactData.phone}</span>
            </ListGroupItem>
            <ListGroupItem>
                <span className={styles.property}>Address:{" "}</span>
                <span>{contactData.address.zipcode}, {contactData.address.city}, {contactData.address.street}, {contactData.address.suite}</span>
            </ListGroupItem>
        </ListGroup>
    )
};

export default ContactDetail;