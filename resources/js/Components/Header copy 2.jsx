import React from "react";

export default function Header() {

    return (
        <div className="navbar-custom">
            <div className="topbar container-fluid">
                <div className="d-flex align-items-center gap-1">
                    {/* Topbar Brand Logo */}
                    <div className="logo-topbar">
                        {/* Logo light */}
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
                        {/* Logo Dark */}
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
                    </div>
                    {/* Sidebar Menu Toggle Button */}

                    <button
                        className="button-toggle-menu"
                    >
                        <i className="mdi mdi-menu" />
                    </button>
                </div>

            </div>
        </div>
    );
}
