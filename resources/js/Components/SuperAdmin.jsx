import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function SuperAdmin() {
    const {user, haspermissions} = usePage().props
    const isActive = (routeName) => route().current(routeName);
    // console.log(haspermissions)
    return (
        <ul className="side-nav">
            <li className={`side-nav-item ${isActive('dashboard') ? 'active-link' : ''}`}>
                <Link href={route("dashboard")} className="side-nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    <span> Dahboard</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link
                    data-bs-toggle="collapse"
                    href="#Categories"
                    aria-expanded="false"
                    aria-controls="Categories"
                    className="side-nav-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-list">
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>
                    <span>Categories</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Categories">
                    <ul className="side-nav-second-level">
                        <li className={`side-nav-item ${isActive('category.index') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route("category.index")}
                            >
                                All Categories
                            </Link>
                        </li>
                        <li className={`side-nav-item ${isActive('subcategory.index') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route('subcategory.index')}
                            >
                                All Sub Categories
                            </Link>
                        </li>
                        <li className={`side-nav-item ${isActive('childcat.index') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route('childcat.index')}
                            >
                                All Child Categories
                            </Link>
                        </li>
                        <li className={`side-nav-item ${isActive('subchildcat.index') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route('subchildcat.index')}
                            >
                                All Sub Child Categories
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="side-nav-item">
                <Link
                    data-bs-toggle="collapse"
                    href="#Users"
                    aria-expanded="false"
                    aria-controls="Users"
                    className="side-nav-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-users">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                    <span>Users</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Users">
                    <ul className="side-nav-second-level">
                        <li className={`side-nav-item ${isActive('users.index') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route("users.index")}
                            >
                                All Users
                            </Link>
                        </li>
                        <li className={`side-nav-item ${isActive('users.create') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route("users.create")}
                            >
                                Add User
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="side-nav-item">
                <Link
                    data-bs-toggle="collapse"
                    href="#Roles"
                    aria-expanded="false"
                    aria-controls="Roles"
                    className="side-nav-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-user-check">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <polyline points="17 11 19 13 23 9"></polyline>
                            </svg>
                    <span>Roles</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Roles">
                    <ul className="side-nav-second-level">
                        <li className={`side-nav-item ${isActive('roles.index') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route("roles.index")}
                            >
                                All Roles
                            </Link>
                        </li>
                        <li className={`side-nav-item ${isActive('roles.create') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route("roles.create")}
                            >
                                Add User
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="side-nav-item">
                <Link
                    data-bs-toggle="collapse"
                    href="#Permissions"
                    aria-expanded="false"
                    aria-controls="Permissions"
                    className="side-nav-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-shield">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                    <span>Permissions</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Permissions">
                    <ul className="side-nav-second-level">
                        <li className={`side-nav-item ${isActive('permissions.index') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route("permissions.index")}
                            >
                                All Permissions
                            </Link>
                        </li>
                        <li className={`side-nav-item ${isActive('permissions.create') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route("permissions.create")}
                            >
                                Add Permissions
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="side-nav-item">
                <Link
                    data-bs-toggle="collapse"
                    href="#Package"
                    aria-expanded="false"
                    aria-controls="Package"
                    className="side-nav-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-package">
                                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                                <path
                                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                                </path>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                    <span>Packages</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Package">
                    <ul className="side-nav-second-level">
                        <li className={`side-nav-item ${isActive('package.index') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route("package.index")}
                            >
                                All Packages
                            </Link>
                        </li>
                        <li className={`side-nav-item ${isActive('package.create') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route("package.create")}
                            >
                                Add Package
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="side-nav-item">
                <Link
                    data-bs-toggle="collapse"
                    href="#Profile"
                    aria-expanded="false"
                    aria-controls="Profile"
                    className="side-nav-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-settings">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                            </path>
                        </svg>
                    <span>Settings</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Profile">
                    <ul className="side-nav-second-level">
                        <li className={`side-nav-item ${isActive('profile.edit') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route("profile.edit")}
                            >
                                Profile
                            </Link>
                        </li>
                        <li className={`side-nav-item ${isActive('change.password') ? 'active-link' : ''}`}>
                            <Link
                                className="side-nav-link"
                                href={route("change.password")}
                            >
                                Change Password
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    );
}
