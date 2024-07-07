import Layout from "@/Layouts/Layout";
import { usePage } from "@inertiajs/react";

export default function User() {
    const {translations,user,permissions,unreadNotifications,readNotifications,haspermissions } = usePage().props;
    return (
        <Layout>
            <Head title="User Dashboard" ></Head>
           <div className="row text-center p-4">
                {/* <h1>{user.name} Dashboard</h1> */}
                <h2> {translations.title}</h2>
           </div>
        </Layout>
    );
}
