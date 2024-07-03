import { Link, usePage } from "@inertiajs/react";

export default function Notification() {
    const { unreadNotifications, readNotifications } = usePage().props;
    const unreadCount = unreadNotifications ? unreadNotifications.length : 0;

    const handleMarkAsRead = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/mark-as-read', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any necessary headers, such as authorization headers
                },
            });

            if (response.ok) {
                // Handle success, update notifications state if needed
            } else {
                // Handle errors
                console.error('Failed to mark notifications as read');
            }
        } catch (error) {
            console.error('Error marking notifications as read:', error);
        }
    };

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
                <span className="noti-icon-badge badge text-bg-pink">{unreadCount}</span>
            </Link>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                    <div className="row align-items-center">
                        <div className="col">
                            <h6 className="m-0 fs-16 fw-semibold">Notification</h6>
                        </div>
                        <div className="col-auto">
                            <a onClick={handleMarkAsRead}
                                href="#"
                                className="text-dark text-decoration-underline"
                            >
                                <small>Clear All</small>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ maxHeight: 300 }} data-simplebar>
                    {unreadNotifications && unreadNotifications.map((notification) => (
                        <Link
                            key={notification.id}
                            href="javascript:void(0);"
                            className="dropdown-item notify-item"
                        >
                            <div className="notify-icon bg-warning-subtle">
                                <i className="mdi mdi-account-plus text-warning" />
                            </div>
                            <p className="notify-details">
                                {notification.data.data}
                                <small className="noti-time">{notification.created_at}</small>
                            </p>
                        </Link>
                    ))}
                    {readNotifications && readNotifications.map((notification) => (
                        <Link
                            key={notification.id}
                            href="javascript:void(0);"
                            className="dropdown-item notify-item"
                        >
                            <div className="notify-icon bg-warning-subtle">
                                <i className="mdi mdi-account-plus text-warning" />
                            </div>
                            <p className="notify-details">
                                {notification.data.data}
                                <small className="noti-time">{notification.created_at}</small>
                            </p>
                        </Link>
                    ))}
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
