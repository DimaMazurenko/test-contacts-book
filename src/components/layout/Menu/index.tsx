import React, {useState} from 'react';
import {Button, Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {LINK} from "../../../utils/constants";
import Link from './Link'
// @ts-ignore
import styles from './styles.module.scss'
import clsx from "clsx";
import {useLocation, useNavigate} from "react-router-dom";

const Menu = () => {
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()

    return (
        <Navbar
            color="light"
            expand="md"
            light
        >
            <NavbarToggler onClick={() => setOpen(!open)} />
            <Collapse navbar isOpen={open}>
                <Nav
                    className={clsx("me-auto", styles.nav)}
                    navbar
                >
                    <NavItem>
                        <Link
                            active={pathname === '/home'}
                            label="Home"
                            link={LINK.HOME}
                        />
                    </NavItem>
                    <NavItem>
                        <Link
                            active={pathname === '/contacts'}
                            label="Contacts"
                            link={LINK.CONTACTS}
                        />
                    </NavItem>
                    <NavItem>
                        <Link
                            active={pathname === '/about'}
                            label="About"
                            link={LINK.ABOUT}
                        />
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Menu;