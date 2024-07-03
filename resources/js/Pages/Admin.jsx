import Layout from "@/Layouts/Layout";
import { usePage } from "@inertiajs/react";

export default function Admin() {
    const { translations,user,notifications,permissions,unreadNotifications,readNotifications,haspermissions } = usePage().props;
    // console.log("per",permissions)
    return (
        <Layout>
           <div className="row text-center p-4">
                {/* <h1>{user.name} Dashboard</h1> */}
                <h2> {translations.title}</h2>
           </div>
        </Layout>
    );
}
