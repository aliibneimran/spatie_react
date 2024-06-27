import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Admin() {
    const {user, haspermissions} = usePage().props
    const hasPermissions = haspermissions && haspermissions.length > 0;
    // const permissionNames = haspermissions.map(haspermissions => haspermissions.name);
    console.log(haspermissions)
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
                {hasPermissions && (
                    <ul className="side-nav-second-level">
                        {haspermissions.includes('user-list') && (
                        <li className="side-nav-item">
                            <Link className="side-nav-link" href={route('users.index')}>
                                Users
                            </Link>
                        </li>
                        )}
                        <li className="side-nav-item">
                            <Link className="side-nav-link" href={route('roles.index')}>
                                Roles
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link className="side-nav-link" href={route('permissions.index')}>
                                Permissions
                            </Link>
                        </li>
                    </ul>
                )}
                </div>
            </li>

        </ul>
    );
}
