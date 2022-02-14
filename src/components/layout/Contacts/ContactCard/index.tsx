import React from 'react';
import clsx from "clsx";
// @ts-ignore
import styles from "../styles.module.scss";
import {Contact} from "../../../../utils/types";
import {Link} from "react-router-dom";
import {RiDeleteBinLine, RiEdit2Line} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {deleteContactById} from "../../../../redux/reducers/contactReducer";

interface ContactCardProps {
    contact: Contact;
    index: number;
    onEditClick: () => void
}

const ContactCard = ({contact, index, onEditClick}: ContactCardProps) => {
    const {id, name, phone, username} = contact
    const dispatch = useDispatch()

    const handleDeleteButton = () => {
        dispatch(deleteContactById(id))
    }

    return (
        <li key={id} className={clsx(styles.contact, index % 2 === 0 ? styles.gray : styles.white)}>
            <div>{name || phone || username}</div>
            <div>{phone}</div>
            <Link to={`/contact/${id}`}>
                Details
            </Link>
            <div className={styles.actionButton}>
                <RiEdit2Line
                    size={26}
                onClick={onEditClick}/>
                <RiDeleteBinLine
                    onClick={handleDeleteButton}
                    size={26}
                    color={'#ff0000'} />
            </div>
        </li>
    )
};

export default ContactCard;