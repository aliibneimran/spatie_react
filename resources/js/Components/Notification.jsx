import { Link } from "@inertiajs/react";
import React from "react";

export default function Notification({ notifications,user }) {
    console.log(notifications);
    console.log(user);
    return (
        <li className="dropdown notification-list">
            <Link
                className="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
            >
                <i className="ri-notification-3-line fs-22" />
                <span className="noti-icon-badge badge text-bg-pink"></span>
            </Link>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                    <div className="row align-items-center">
                        <div className="col">
                            <h6 className="m-0 fs-16 fw-semibold">
                            {/* {user.name} */}
                            </h6>
                        </div>
                        <div className="col-auto">
                            <a
                                href="javascript: void(0);"
                                className="text-dark text-decoration-underline"
                            >
                                <small>Clear All</small>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ maxHeight: 300 }} data-simplebar>
                    <Link
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                    >
                        <div className="notify-icon bg-warning-subtle">
                            <i className="mdi mdi-account-plus text-warning" />
                        </div>
                        <p className="notify-details">
                            New user registered.
                            <small className="noti-time">5 hours ago</small>
                        </p>
                    </Link>
                </div>
                {/* All*/}
                <Link
                    href="javascript:void(0);"
                    className="dropdown-item text-center text-primary text-decoration-underline fw-bold notify-item border-top border-light py-2"
                >
                    View All
                </Link>
            </div>
        </li>
    );
}
