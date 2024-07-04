import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function Header() {

    return (
        <div className="navbar-custom">
            <div className="topbar container-fluid">
                <div className="d-flex align-items-center gap-1">


                    <button className="button-toggle-menu" >
                        <i className="mdi mdi-menu" />
                    </button>

                </div>

            </div>
        </div>
    );
}
