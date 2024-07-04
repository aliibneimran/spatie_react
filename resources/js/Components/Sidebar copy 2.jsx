

export default function Sidebar({isOpen}) {
    return (
        <div className={`leftside-menu ${isOpen ? "open" : "closed"}`}>
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
            <div dataSimplebar>
                <ul className="side-nav">
                    <li className="side-nav-item">
                        <Link
                            href={route("dashboard")}
                            className="side-nav-link"
                        >
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
                            <span>Profile</span>
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
                </ul>
            </div>
        </div>
    );
}
