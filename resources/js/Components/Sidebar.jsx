import React, { useState } from "react";
import SuperAdmin from "./SuperAdmin";
import Admin from "./Admin";
import { Link, usePage } from "@inertiajs/react";
import User from "./User";
import { useSidebar } from "@/SidebarContext";

export default function Sidebar({ user, permissions, isOpen }) {
    // const { isOpen, toggleSidebar } = useSidebar();

    console.log("SB-isSidebarOpen:", isOpen); // Log current state
    return (
        <div className={`leftside-menu ${isOpen ? "" : "expand"}`}>
            {/* Logo Light */}
            <Link href="index.html" className="logo logo-light">
                <span className="logo-lg">
                    <img src="/assets/images/logo.png" alt="logo" />
                </span>
                <span className="logo-sm">
                    <img src="/assets/images/logo.png" alt="small logo" />
                </span>
            </Link>
            {/* Logo Dark */}
            <Link href="index.html" className="logo logo-dark">
                <span className="logo-lg">
                    <img src="/assets/images/logo.png" alt="dark logo" />
                </span>
                <span className="logo-sm">
                    <img src="/assets/images/logo.png" alt="small logo" />
                </span>
            </Link>


            {/* Sidebar */}
            <div dataSimplebar>
                {/* <SuperAdmin/> */}
                {user.type === 0 && (
                    <SuperAdmin user={user} permissions={permissions} />
                )}
                {user.type === 1 && (
                    <Admin user={user} permissions={permissions} />
                )}
                {user.type === 2 && (
                    <User user={user} permissions={permissions} />
                )}
            </div>
        </div>
    );
}
