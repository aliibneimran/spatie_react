import Layout from "@/Layouts/Layout";
import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { user,notifications,permissions,unreadNotifications,readNotifications,haspermissions } = usePage().props;
    // console.log(haspermissions)
    return (
        <Layout user={user} haspermissions={haspermissions} notifications={notifications} unreadNotifications={unreadNotifications} readNotifications={readNotifications}>
           <div className="row">
                <h1>{user.name} Dashboard</h1>
                <h2>Hi Admin</h2>
           </div>
        </Layout>
    );
}
