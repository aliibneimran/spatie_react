import Layout from "@/Layouts/Layout";
import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { user,notifications,permissions,unreadNotifications,readNotifications,haspermissions } = usePage().props;
    console.log("per",permissions)
    return (
        <Layout
        user={user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
           <div className="row">
                <h1>{user.name} Dashboard</h1>
                <h2>Hi Client</h2>
           </div>
        </Layout>
    );
}
