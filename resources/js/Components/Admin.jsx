import { Link, usePage } from "@inertiajs/react";
import React from "react";
// import { usePermissions } from "./Context/PermissionsContex"; // Adjust the path as per your file structure
// import { PermissionsProvider } from "@/Context/PermissionsContext";
import { usePermissions } from "@/Context/PermissionsContext";
export default function Admin() {
    const {haspermissions} = usePage().props
    // const { haspermissionss } = usePermissions(); // Access permissions from context
    // console.log('Permissions:', haspermissions);
    return (
        <ul className="side-nav">
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="ri-calendar-line" />
                    <span> Dahboard</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link
                    data-bs-toggle="collapse"
                    href="#Admin"
                    aria-expanded="false"
                    aria-controls="Admin"
                    className="side-nav-link"
                >
                    <i className="fa-solid fa-user-tie"></i>
                    <span>Hr Admin</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Admin">
                    <ul className="side-nav-second-level">
                        <li className="side-nav-item">
                            <Link className="side-nav-link" href="">
                                Company Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="side-nav-item">
                <Link
                    data-bs-toggle="collapse"
                    href="#Security"
                    aria-expanded="false"
                    aria-controls="Security"
                    className="side-nav-link"
                >
                    <i className="fa-solid fa-shield-halved"></i>
                    <span>Security</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Security">
                    <ul className="side-nav-second-level">
                        {permissions.includes('user-list') && (
                            <li className="side-nav-item">
                                <Link className="side-nav-link" href={route('users.index')}>
                                    Users
                                </Link>
                            </li>
                        )}
                        {permissions.includes('role-list') && (
                            <li className="side-nav-item">
                                <Link className="side-nav-link" href={route('roles.index')}>
                                    Roles
                                </Link>
                            </li>
                        )}
                        {permissions.includes('permission-list') && (
                            <li className="side-nav-item">
                                <Link className="side-nav-link" href={route('permissions.index')}>
                                    Permissions
                                </Link>
                            </li>
                        )}
                        {permissions.includes('category-list') && (
                            <li className="side-nav-item">
                                <Link className="side-nav-link" href={route('category.index')}>
                                    Category
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </li>
        </ul>
    );
}
