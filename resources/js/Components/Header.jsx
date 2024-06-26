import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Modal from "./Modal";
import OfCanvas from "./OfCanvas";
import Notification from "./Notification";
export default function Header() {
    const {user} = usePage().props
    const [showModal, setShowModal] = useState(false);


    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const handleToggleMenu = () => {
        toggleMenu(); // Call the toggleMenu function passed as prop
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };
    return (
        <div className="navbar-custom">
            <div className="topbar container-fluid">
                <div className="d-flex align-items-center gap-1">
                    {/* Topbar Brand Logo */}
                    <div className="logo-topbar">
                        {/* Logo light */}
                        <a href="index.html" className="logo-light">
                            <span className="logo-lg">
                                <img src="assets/images/logo.png" alt="logo" />
                            </span>
                            <span className="logo-sm">
                                <img
                                    src="assets/images/logo-sm.png"
                                    alt="small logo"
                                />
                            </span>
                        </a>
                        {/* Logo Dark */}
                        <a href="index.html" className="logo-dark">
                            <span className="logo-lg">
                                <img
                                    src="assets/images/logo-dark.png"
                                    alt="dark logo"
                                />
                            </span>
                            <span className="logo-sm">
                                <img
                                    src="assets/images/logo-sm.png"
                                    alt="small logo"
                                />
                            </span>
                        </a>
                    </div>
                    {/* Sidebar Menu Toggle Button */}
                    <button className="button-toggle-menu" onClick={handleToggleMenu}>
                        <i className="mdi mdi-menu" />
                    </button>
                    {/* Page Title */}
                    <h4 className="page-title d-none d-sm-block">Dashboards</h4>
                    <button className="button-toggle-menu" onClick={handleShow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </button>

                    {showModal && (
            <div className="modal show fade d-block" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" id="modalBody">
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">All Module</h5>
                    <button type="button" className="btn-close bg-danger" onClick={handleClose} aria-label="Close">
                      {/* <span aria-hidden="true">×</span> */}
                    </button>
                  </div>
                  <div className="modal-body">
                    <Modal></Modal>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={handleClose}>Close</button>
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
                        <a
                            className="nav-link dropdown-toggle arrow-none"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                        >
                            <img
                                src="assets/images/flags/us.jpg"
                                alt="user-image"
                                className="me-0 me-sm-1"
                                height={12}
                            />
                            <span className="align-middle d-none d-lg-inline-block">
                                English
                            </span>
                            <span className="mdi mdi-chevron-down fs-22 d-none d-sm-inline-block align-middle" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated">
                            {/* item*/}
                            <a
                                href="javascript:void(0);"
                                className="dropdown-item"
                            >
                                <img
                                    src="assets/images/flags/germany.jpg"
                                    alt="user-image"
                                    className="me-1"
                                    height={12}
                                />
                                <span className="align-middle">German</span>
                            </a>
                            {/* item*/}
                            <a
                                href="javascript:void(0);"
                                className="dropdown-item"
                            >
                                <img
                                    src="assets/images/flags/italy.jpg"
                                    alt="user-image"
                                    className="me-1"
                                    height={12}
                                />
                                <span className="align-middle">Italian</span>
                            </a>
                            {/* item*/}
                            <a
                                href="javascript:void(0);"
                                className="dropdown-item"
                            >
                                <img
                                    src="assets/images/flags/spain.jpg"
                                    alt="user-image"
                                    className="me-1"
                                    height={12}
                                />
                                <span className="align-middle">Spanish</span>
                            </a>
                            {/* item*/}
                            <a
                                href="javascript:void(0);"
                                className="dropdown-item"
                            >
                                <img
                                    src="assets/images/flags/russia.jpg"
                                    alt="user-image"
                                    className="me-1"
                                    height={12}
                                />
                                <span className="align-middle">Russian</span>
                            </a>
                        </div>
                    </li>
                  <Notification></Notification>
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
                        <div className="nav-link" id="light-dark-mode">
                            <i className="ri-moon-line fs-22" />
                        </div>
                    </li>
                    <li className="d-none d-sm-inline-block">
                        <div className="nav-link" id="light-dark-mode">
                        <a  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-repeat"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg></a>
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
                            <span className="account-user-avatar">
                                <img
                                    src="assets/images/users/avatar-1.jpg"
                                    alt="user-image"
                                    width={32}
                                    className="rounded-circle"
                                />
                            </span>
                            <span className="d-lg-block d-none">
                                <h5 className="my-0 fw-normal">
                                    Adams
                                    <i className="ri-arrow-down-s-line fs-22 d-none d-sm-inline-block align-middle" />
                                </h5>
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                            {/* item*/}
                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
                            {/* item*/}
                            <a
                                href="pages-profile.html"
                                className="dropdown-item"
                            >
                                <i className="ri-account-pin-circle-line fs-16 align-middle me-1" />
                                <span>My Account</span>
                            </a>
                            <Link href={ route('logout') } method='post' as='button'
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
    );
}
