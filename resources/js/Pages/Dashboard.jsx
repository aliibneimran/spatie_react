import Layout from "@/Layouts/Layout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const {translations,user,permissions,unreadNotifications,readNotifications,haspermissions } = usePage().props;
    // console.log(translations)
    return (
        <Layout user={user} haspermissions={haspermissions} unreadNotifications={unreadNotifications} readNotifications={readNotifications}>
            <Head title="Super Admin Dashboard" ></Head>
           <div className="row text-center p-4">
                {/* <h1>{user.name} Dashboard</h1> */}
                <h2> {translations.title}</h2>

           </div>
        </Layout>
    );
}
