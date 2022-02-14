import React from 'react';
import {LINK} from "../../../../utils/constants";
import {Link} from "react-router-dom";
import clsx from "clsx";
// @ts-ignore
import styles from '../styles.module.scss'

interface NavLinkProps {
    active: boolean;
    label: string;
    link: string;
}

const NavLink = ({ active, label, link }: NavLinkProps) => (
    <Link to={link} className={clsx(styles.link, active ? styles.active : null)}>{label}</Link>
);

export default NavLink;