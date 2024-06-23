import React from "react";
import SuperAdmin from "./SuperAdmin";
import Admin from "./Admin";
import { Link, usePage } from "@inertiajs/react";
import User from "./User";

export default function Sidebar() {
    const { user } = usePage().props;
    return (
        <div className='leftside-menu'>
            {/* Logo Light */}
            <Link href="index.html" className="logo logo-light">
                <span className="logo-lg">
                    <img src="assets/images/logo.png" alt="logo" />
                </span>
                <span className="logo-sm">
                    <img src="assets/images/logo.png" alt="small logo" />
                </span>
            </Link>
            {/* Logo Dark */}
            <Link href="index.html" className="logo logo-dark">
                <span className="logo-lg">
                    <img src="assets/images/logo.png" alt="dark logo" />
                </span>
                <span className="logo-sm">
                    <img src="assets/images/logo.png" alt="small logo" />
                </span>
            </Link>
            {/* Sidebar */}
            <div data-simplebar>
            <SuperAdmin/>
                {/* {user.type === 1 && <SuperAdmin/>}
                {user.type === 2 && <Admin />}
                {user.type === 3 && <User />} */}

            </div>
        </div>
    );
}
