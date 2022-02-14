import React from "react";
import {Route, Routes} from "react-router-dom";
import Contacts from "./components/layout/Contacts";
import Home from "./components/layout/Home";
import NotFoundRoute from "./components/layout/NotFoundRoute";
import {LINK} from "./utils/constants";
import Menu from "./components/layout/Menu";
import ContactDetail from "./components/layout/ContactDetail";
import About from "./components/layout/About";

const  App = () => {
    return (
        <>
            <Menu />
            <Routes>
                <Route path={LINK.CONTACTS} element={<Contacts />}  />
                <Route path={LINK.CONTACT_DETAIL} element={<ContactDetail />} />
                <Route path={LINK.HOME} element={<Home />} />
                <Route path={LINK.ABOUT} element={<About />} />
                <Route path={LINK.NOT_FOUND} element={<NotFoundRoute />} />
                <Route path={LINK.ALL} element={<NotFoundRoute />} />
            </Routes>
        </>
  );
}

export default App;
