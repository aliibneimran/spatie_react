import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import OfCanvas from "./OfCanvas";
import Notification from "./Notification";
import Language from "./Language";
import ThemeSetting from "./ThemeSetting";

export default function Header({ toggleSidebar, toggleTheme }) {
    const { user, unreadNotifications, readNotifications, permissions } =
        usePage().props;
    const [selectedLocale, setSelectedLocale] = useState("en"); // Example initial locale state

    const handleLanguageChange = (event) => {
        setSelectedLocale(event.target.value);
        // Optionally, you can send an API request to update the backend session as well
    };

    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    // for auto logout
    const logOut = async () => {
        try {
            await axios.post("/logout");
            window.location.href = "./login";
            // <Navigate to="/login" />
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
    useEffect(() => {
        if (user && user.status === 0) {
            alert("Your account is inactive. You will be logged out.");
            logOut();
        }
    }, []);
    const handleToggleClick = () => {
        // console.log("Toggle button clicked");
        toggleSidebar();
    };

    return (
        <>
            <div className="navbar-custom">
                <div className="topbar container-fluid">
                    <div className="d-flex align-items-center gap-1">
                        {/* Topbar Brand Logo */}
                        {/* <div className="logo-topbar">
                        <a href="index.html" className="logo-light">
                            <span className="logo-lg">
                                <img src="/assets/images/logo.png" alt="logo" />
                            </span>
                            <span className="logo-sm">
                                <img
                                    src="/assets/images/logo-sm.png"
                                    alt="small logo"
                                />
                            </span>
                        </a>
                        <a href="index.html" className="logo-dark">
                            <span className="logo-lg">
                                <img
                                    src="/assets/images/logo-dark.png"
                                    alt="dark logo"
                                />
                            </span>
                            <span className="logo-sm">
                                <img
                                    src="/assets/images/logo-sm.png"
                                    alt="small logo"
                                />
                            </span>
                        </a>
                    </div> */}
                        {/* Sidebar Menu Toggle Button */}

                        <button
                            className="button-toggle-menu"
                            onClick={handleToggleClick}
                        >
                            <i className="mdi mdi-menu" />
                        </button>

                        {/* Page Title */}
                        <h4 className="page-title d-none d-sm-block">
                            Dashboards
                        </h4>
                        <button
                            className="button-toggle-menu"
                            onClick={handleShow}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-grid"
                            >
                                <rect x={3} y={3} width={7} height={7} />
                                <rect x={14} y={3} width={7} height={7} />
                                <rect x={14} y={14} width={7} height={7} />
                                <rect x={3} y={14} width={7} height={7} />
                            </svg>
                        </button>

                        {showModal && (
                            <div
                                className="modal show fade d-block"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="exampleModalCenterTitle"
                                aria-hidden="true"
                                id="modalBody"
                            >
                                <div
                                    className="modal-dialog modal-lg modal-dialog-centered"
                                    role="document"
                                >
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5
                                                className="modal-title"
                                                id="exampleModalLongTitle"
                                            >
                                                All Module
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close bg-danger"
                                                onClick={handleClose}
                                                aria-label="Close"
                                            >
                                                {/* <span aria-hidden="true">×</span> */}
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <Modal
                                                permissions={permissions}
                                            ></Modal>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={handleClose}
                                            >
                                                Close
                                            </button>
                                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <ul className="topbar-menu d-flex align-items-center gap-3">
                        <li className="dropdown d-lg-none">
                            <a
                                className="nav-link dropdown-toggle arrow-none"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <i className="mdi mdi-magnify fs-2" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                                <form className="p-3">
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Search ..."
                                        aria-label="Recipient's username"
                                    />
                                </form>
                            </div>
                        </li>
                        <li className="dropdown">
                            <Language
                                locale={selectedLocale}
                                onChange={handleLanguageChange}
                            ></Language>
                        </li>
                        <Notification
                            user
                            notifications
                            permissions
                            unreadNotifications={unreadNotifications}
                            readNotifications={readNotifications}
                        ></Notification>
                        <li className="d-none d-sm-inline-block">
                            <a
                                className="nav-link"
                                data-bs-toggle="offcanvas"
                                href="#theme-settings-offcanvas"
                            >
                                <span className="ri-settings-3-line fs-22" />
                            </a>
                        </li>
                        <li className="d-none d-sm-inline-block">
                            <div
                                className="nav-link"
                                id="light-dark-mode"
                                onClick={toggleTheme}
                            >
                                <i className="ri-moon-line fs-22" />
                            </div>
                        </li>
                        <li className="d-none d-sm-inline-block">
                            <div className="nav-link" id="light-dark-mode">
                                <a
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-repeat"
                                    >
                                        <polyline points="17 1 21 5 17 9" />
                                        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                                        <polyline points="7 23 3 19 7 15" />
                                        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                                    </svg>
                                </a>
                            </div>
                            <OfCanvas></OfCanvas>
                        </li>
                        <li className="dropdown">
                            <a
                                className="nav-link dropdown-toggle arrow-none nav-user"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <span
                                    className="account-user-avatar"
                                    id="usericon"
                                >
                                    {/* <img
                                    src="/assets/images/users/avatar-1.jpg"
                                    alt="user-image"
                                    width={32}
                                    className="rounded-circle"
                                /> */}
                                    {/* <i class="fa-solid fa-circle-user"></i> */}
                                    {/* <i class="fa-regular fa-user"></i> */}
                                    {/* <i class="fa-solid fa-user-large"></i> */}
                                    {/* <i class="fa-regular fa-circle-user"></i> */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-user-check"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="8.5" cy="7" r="4"></circle>
                                        <polyline points="17 11 19 13 23 9"></polyline>
                                    </svg>
                                </span>
                                <span className="d-lg-block d-none">
                                    <h5 className="my-0 fw-normal">
                                        {user.name}
                                        <i className="ri-arrow-down-s-line fs-22 d-none d-sm-inline-block align-middle" />
                                    </h5>
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                                {/* item*/}
                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">
                                        {user.email}
                                    </h6>
                                </div>
                                {/* item*/}
                                <Link
                                    href={route("profile.edit")}
                                    className="dropdown-item"
                                >
                                    {/* <i class="fa-regular fa-user me-1"></i> */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-tool me-1"
                                    >
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                    </svg>

                                    <span>Edit Profile</span>
                                </Link>
                                <Link
                                    href={route("change.password")}
                                    className="dropdown-item"
                                >
                                    {/* <i class="fa-solid fa-key me-1"></i> */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-key me-1"
                                    >
                                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                                    </svg>
                                    <span>Change Password</span>
                                </Link>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="dropdown-item"
                                >
                                    <i className="ri-logout-circle-r-line align-middle me-1" />
                                    <span>Logout</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <ThemeSetting></ThemeSetting>
        </>
    );
}
