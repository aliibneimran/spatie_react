import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
    const {
        user,
        unreadNotifications,
        readNotifications,
        permissions = [],
    } = usePage().props;

    //collapse button
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };
    useEffect(() => {
        if (isCollapsed) {
            document.documentElement.setAttribute('data-sidenav-size', 'condensed');
            document.documentElement.classList.add('menuitem-active', 'sidebar-enable');
        } else {
            document.documentElement.setAttribute('data-sidenav-size', 'default');
            document.documentElement.classList.remove('sidebar-enable');
        }
    }, [isCollapsed]);

    //theme mode
    const [isTheme, setIsTheme] = useState(false);

    const toggleTheme = () => {
        setIsTheme(!isTheme);
    };
    useEffect(() => {
        if (isTheme) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }, [isTheme]);



    // console.log("isSidebarOpen:", isSidebarOpen); // Log current state
    return (
        <div>
            <div className="wrapper">

                <Header
                toggleTheme={toggleTheme}
                    toggleSidebar={toggleSidebar}
                    user={user}
                    permissions={permissions}
                    unreadNotifications={unreadNotifications}
                    readNotifications={readNotifications}
                ></Header>
                <Sidebar
                    isCollapsed={isCollapsed}
                    user={user}
                    permissions={permissions}
                ></Sidebar>

                <div className="content-page">
                    <div className="content">
                        <div className="container-fluid">{children}</div>

                        <footer className="footer">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        © HR LOUNGE - Developed by{" "}
                                        <b>A & A Consulting Limited</b>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        </div>
    );
}
