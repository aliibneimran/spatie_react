import React, { useState } from "react";
import SuperAdmin from "./SuperAdmin";
import Admin from "./Admin";
import { Link, usePage } from "@inertiajs/react";
import User from "./User";

export default function Sidebar({ user, permissions, isCollapsed }) {

    // console.log('user_id:', user.type);
    // console.log("SB-isCollapsed:", isCollapsed);
    return (
        <div className={`leftside-menu ${isCollapsed ? "collapsed" : ""}`}>
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
            <div data-simplebar id="sidemenu">
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
