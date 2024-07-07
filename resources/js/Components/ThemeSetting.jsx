import React, { useEffect, useState } from "react";

export default function ThemeSetting() {
    //Color Scheme
    const [theme, setTheme] = useState("light");

    const toggleTheme = (theme) => {
        setTheme(theme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);

    //Layout Mode
    const [layout, setLayout] = useState("fluid");

    const toggleLayout = (layout) => {
        setLayout(layout);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-layout-mode', layout);
    }, [layout]);

    //Topbar Color
    const [topbar, setTopbar] = useState("light");

    const toggleTopbar = (topbar) => {
        setTopbar(topbar);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-topbar-color', topbar);
    }, [topbar]);

    //Menu Color
    const [menu, setMenu] = useState("dark");

    const toggleMenu = (menu) => {
        setMenu(menu);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-menu-color', menu);
    }, [menu]);

    //Sidebar Size
    const [sidebar, setSidebar] = useState("default");

    const toggleSidebar = (sidebar) => {
        setSidebar(sidebar);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-sidenav-size', sidebar);
    }, [sidebar]);

    //Layout Position
    const [position, setPosition] = useState("fixed");

    const togglePosition = (position) => {
        setPosition(position);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-layout-position', position);
    }, [position]);

    //Reset
    //Layout Position
    const [reset, setReset] = useState();

    const toggleReset = (reset) => {
        setReset(reset);
    };
    useEffect(() => {
        if (reset) {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            document.documentElement.setAttribute('data-layout-mode', 'fluid');
            document.documentElement.setAttribute('data-topbar-color', 'light');
            document.documentElement.setAttribute('data-menu-color', 'dark');
            document.documentElement.setAttribute('data-layout-position', 'fixed');
            document.documentElement.setAttribute('data-sidenav-size', 'default');
        }
    }, [reset]);


    // <html lang="en" data-bs-theme="light" data-layout-mode="fluid" data-menu-color="dark" data-topbar-color="light" data-layout-position="fixed" data-sidenav-size="default" class="menuitem-active"></html>
    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="theme-settings-offcanvas"
        >
            <div className="d-flex align-items-center bg-primary p-3 offcanvas-header">
                <h5 className="text-white m-0">Theme Settings</h5>
                <button
                    type="button"
                    className="btn-close btn-close-white ms-auto"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
            </div>
            <div className="offcanvas-body p-0">
                <div data-simplebar className="h-100">
                    <div className="p-3">
                        <h5 className="mb-3 fs-16 fw-semibold">Color Scheme</h5>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-check mb-1">
                                    <input
                                        className="form-check-input border-secondary"
                                        type="radio"
                                        name="data-bs-theme"
                                        id="layout-color-light"
                                        value="light"
                                        checked={theme === "light"}
                                        onChange={() => toggleTheme("light")}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="layout-color-light"
                                    >
                                        Light
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check mb-1">
                                    <input
                                        className="form-check-input border-secondary"
                                        type="radio"
                                        name="data-bs-theme"
                                        id="layout-color-dark"
                                        value="dark"
                                        checked={theme === "dark"}
                                        onChange={() => toggleTheme("dark")}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="layout-color-dark"
                                    >
                                        Dark
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div id="layout-width">
                            <h5 className="my-3 fs-16 fw-semibold">
                                Layout Mode
                            </h5>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-check mb-1">
                                        <input
                                            className="form-check-input border-secondary"
                                            type="radio"
                                            name="data-layout-mode"
                                            id="layout-mode-fluid"
                                            value="fluid"
                                            checked={layout === "fluid"}
                                            onChange={() => toggleLayout("fluid")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="layout-mode-fluid"
                                        >
                                            Fluid
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div id="layout-boxed">
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input border-secondary"
                                                type="radio"
                                                name="data-layout-mode"
                                                id="layout-mode-boxed"
                                                value="boxed"
                                                checked={layout === "boxed"}
                                                onChange={() => toggleLayout("boxed")}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="layout-mode-boxed"
                                            >
                                                Boxed
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5 className="my-3 fs-16 fw-semibold">Topbar Color</h5>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-check mb-1">
                                    <input
                                        className="form-check-input border-secondary"
                                        type="radio"
                                        name="data-topbar-color"
                                        id="topbar-color-light"
                                        value="light"
                                        checked={topbar === "light"}
                                        onChange={() => toggleTopbar("light")}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="topbar-color-light"
                                    >
                                        Light
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check mb-1">
                                    <input
                                        className="form-check-input border-secondary"
                                        type="radio"
                                        name="data-topbar-color"
                                        id="topbar-color-dark"
                                        value="dark"
                                        checked={topbar === "dark"}
                                        onChange={() => toggleTopbar("dark")}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="topbar-color-dark"
                                    >
                                        Dark
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="my-3 fs-16 fw-semibold">
                                Menu Color
                            </h5>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-check mb-1">
                                        <input
                                            className="form-check-input border-secondary"
                                            type="radio"
                                            name="data-menu-color"
                                            id="leftbar-color-light"
                                            value="light"
                                            checked={menu === "light"}
                                            onChange={() => toggleMenu("light")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="leftbar-color-light"
                                        >
                                            Light
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check mb-1">
                                        <input
                                            className="form-check-input border-secondary"
                                            type="radio"
                                            name="data-menu-color"
                                            id="leftbar-color-dark"                                            value="dark"
                                            checked={menu === "dark"}
                                            onChange={() => toggleMenu("dark")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="leftbar-color-dark"
                                        >
                                            Dark
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sidebar-size">
                            <h5 className="my-3 fs-16 fw-semibold">
                                Sidebar Size
                            </h5>
                            <div className="row gap-2">
                                <div className="col-12">
                                    <div className="form-check mb-1">
                                        <input
                                            className="form-check-input border-secondary"
                                            type="radio"
                                            name="data-sidenav-size"
                                            id="leftbar-size-default"
                                            value="default"
                                            checked={sidebar === "default"}
                                            onChange={() => toggleSidebar("default")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="leftbar-size-default"
                                        >
                                            Default
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check mb-1">
                                        <input
                                            className="form-check-input border-secondary"
                                            type="radio"
                                            name="data-sidenav-size"
                                            id="leftbar-size-compact"                                            value="compact"
                                            checked={sidebar === "compact"}
                                            onChange={() => toggleSidebar("compact")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="leftbar-size-compact"
                                        >
                                            Compact
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check mb-1">
                                        <input
                                            className="form-check-input border-secondary"
                                            type="radio"
                                            name="data-sidenav-size"
                                            id="leftbar-size-small"                                            value="condensed"
                                            checked={sidebar === "condensed"}
                                            onChange={() => toggleSidebar("condensed")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="leftbar-size-small"
                                        >
                                            Condensed
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check mb-1">
                                        <input
                                            className="form-check-input border-secondary"
                                            type="radio"
                                            name="data-sidenav-size"
                                            id="leftbar-size-full"
                                            value="full"
                                            checked={sidebar === "full"}
                                            onChange={() => toggleSidebar("full")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="leftbar-size-full"
                                        >
                                            Full Layout
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="layout-position">
                            <h5 className="my-3 fs-16 fw-semibold">
                                Layout Position
                            </h5>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="data-layout-position"
                                            id="layout-position-fixed"
                                            value="fixed"
                                            checked={position === "fixed"}
                                            onChange={() => togglePosition("fixed")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="layout-position-fixed"
                                        >
                                            Fixed
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="data-layout-position"
                                            id="layout-position-scrollable"
                                            value="scrollable"
                                            checked={position === "scrollable"}
                                            onChange={() => togglePosition("scrollable")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="layout-position-scrollable"
                                        >
                                            Scrollable
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-footer border-top p-3 text-center">
                <div className="row">
                    <div className="col-6 m-auto">
                        <button
                            type="button"
                            className="btn btn-info w-100"
                            id="reset-layout"
                            onClick={toggleReset}
                        >
                            Reset
                        </button>
                    </div>
                    {/* <div className="col-6">
<a href="#" role="button" className="btn btn-primary w-100">Buy Now</a>
</div> */}
                </div>
            </div>
        </div>
    );
}
