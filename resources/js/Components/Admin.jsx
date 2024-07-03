import { Link, usePage } from "@inertiajs/react";

export default function Admin() {
    const {user, haspermissions=[],permissions} = usePage().props
    // const permissionNames = haspermissions.map(permission => permission);
    const permissionNames = permissions;

    // console.log('admin sidebar:', permissions);
    // console.log('Permission Names:', permissionNames);
    return (
        <>

        <ul className="side-nav">
            <li className="side-nav-item">
            {/* <li className="side-nav-item"> */}
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

                    {permissionNames.includes('user-list') && (
                        <li className="side-nav-item">
                            <Link className="side-nav-link" href={route('users.index')}>
                                Users
                            </Link>
                        </li>
                    )}
                    {permissionNames.includes('role-list') && (
                        <li className="side-nav-item">
                            <Link className="side-nav-link" href={route('roles.index')}>
                                Roles
                            </Link>
                        </li>
                    )}
                    {permissionNames.includes('permission-list') && (
                        <li className="side-nav-item">
                            <Link className="side-nav-link" href={route('permissions.index')}>
                                Permissions
                            </Link>
                        </li>
                    )}
                    {permissionNames.includes('category-list') && (
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
        </>
    );
}
