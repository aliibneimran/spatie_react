import React from "react";
import { SidebarProvider } from "./SidebarContext";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Inertia } from "@inertiajs/inertia-react";

const App = ({ children, user, permissions }) => {
    return (
        <SidebarProvider>
            {/* <Header /> */}
            <Sidebar user={user} permissions={permissions} />
            <main>{children}</main>
            {/* <Footer /> */}
        </SidebarProvider>
    );
};

export default App;
