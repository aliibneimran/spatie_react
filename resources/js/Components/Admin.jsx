import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Admin() {
    const {user, haspermissions} = usePage().props
    // const hasPermission = haspermissions && haspermissions.length > 0;
    // const permissionNames = haspermissions.map(haspermissions => haspermissions.name);
    // console.log(haspermissions)
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
                        <li className="side-nav-item">
                            <Link className="side-nav-link" href={route('users.index')}>
                                Users
                            </Link>
                        </li>
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
                </div>
            </li>
            <li className="side-nav-item">
                <Link
                    data-bs-toggle="collapse"
                    href="#Employee"
                    aria-expanded="false"
                    aria-controls="Employee"
                    className="side-nav-link"
                >
                    <i className="fa-solid fa-user-check"></i>
                    <span>Employee Info</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Employee">
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
                    href="#Chart"
                    aria-expanded="false"
                    aria-controls="Chart"
                    className="side-nav-link"
                >
                    <i className="fa-solid fa-sitemap"></i>
                    <span>Org. Chart</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Chart">
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
                    href="#Lifecycle"
                    aria-expanded="false"
                    aria-controls="Lifecycle"
                    className="side-nav-link"
                >
                    <i className="fa-solid fa-arrows-spin"></i>
                    <span>Lifecycle</span>
                    <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="Lifecycle">
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
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-umbrella-beach"></i>
                    <span> Leave</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-clipboard-user"></i>
                    <span> Attendance</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-money-check-dollar"></i>
                    <span> Payroll</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <span> Claims</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-file-circle-check"></i>
                    <span> Reports</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-eye"></i>
                    <span> Report Viewer</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-users-gear"></i>
                    <span> Workforce</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-store"></i>
                    <span> Recruitment</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-chart-line"></i>
                    <span> Performence</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-chalkboard-user"></i>
                    <span> Learning</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span> Probation</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-hand"></i>
                    <span> Request</span>
                </Link>
            </li>
            <li className="side-nav-item">
                <Link href={route("dashboard")} className="side-nav-link">
                    <i className="fa-solid fa-comments"></i>
                    <span> Grievance</span>
                </Link>
            </li>

        </ul>
    );
}
