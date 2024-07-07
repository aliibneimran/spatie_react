import { Link } from "@inertiajs/react";
import React from "react";

export default function OfCanvas() {
    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
        >
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel" className="h4">
                    Self Service
                </h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
            </div>
            <div className="offcanvas-body">
                <hr />
                <Link>
                    <div className="d-flex mb-4">
                        <div className="img_cont success p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-key"
                            >
                                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                            </svg>
                        </div>
                        <div>
                            <span className="h3">Hr Administration</span>
                            <p className="mt-2">
                                All HR Administration functionalities are
                                available in this section based on your security
                                privileges.
                            </p>
                        </div>
                    </div>
                </Link>
                <hr />
                <Link>
                    <div className="d-flex">
                        <div className="img_cont success p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-key"
                            >
                                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                            </svg>
                        </div>
                        <div className="">
                            <span className="h3">Hr Self Service</span>
                            <p className="mt-2">
                                Explore products and services that enhance your
                                HR Lounge experience.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
