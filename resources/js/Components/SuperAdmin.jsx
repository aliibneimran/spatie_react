import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function SuperAdmin() {
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
                    href="#Categories"
                    aria-expanded="false"
                    aria-controls="Categories"
                    className="side-nav-link"
                >
                    <i className="ri-article-line" />
                    <span>Categories</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Categories">
                    <ul className="side-nav-second-level">
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href={route("category.index")}
                            >
                                All Categories
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href={route("category.create")}
                            >
                                Add Categories
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href="apps-invoice.html"
                            >
                                Add Sub Categories
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href="apps-invoice.html"
                            >
                                Add Child Categories
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href="apps-invoice.html"
                            >
                                Add Sub Child Categories
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
                    <i className="ri-article-line" />
                    <span>Users</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Users">
                    <ul className="side-nav-second-level">
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href={route("users.index")}
                            >
                                All Users
                            </Link>
                        </li>
                        <li className="side-nav-item">
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
                    <i className="ri-article-line" />
                    <span>Roles</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Roles">
                    <ul className="side-nav-second-level">
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href={route("roles.index")}
                            >
                                All Roles
                            </Link>
                        </li>
                        <li className="side-nav-item">
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
                    <i className="ri-article-line" />
                    <span>Permissions</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Permissions">
                    <ul className="side-nav-second-level">
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href={route("permissions.index")}
                            >
                                All Permissions
                            </Link>
                        </li>
                        <li className="side-nav-item">
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
                    <i className="ri-article-line" />
                    <span>Packages</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Package">
                    <ul className="side-nav-second-level">
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href={route("permissions.index")}
                            >
                                All Packages
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href={route("permissions.create")}
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
                    <i className="ri-article-line" />
                    <span>Settings</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Profile">
                    <ul className="side-nav-second-level">
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href={route("permissions.index")}
                            >
                                Profile
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link
                                className="side-nav-link"
                                href={route("permissions.create")}
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
