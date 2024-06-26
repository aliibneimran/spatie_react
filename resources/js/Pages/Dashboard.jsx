import Layout from "@/Layouts/Layout";
import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { user,notifications,permissions } = usePage().props;
    // console.log(permissions)
    return (
        <Layout user={user} permissions={permissions} notifications={notifications}>
           <div className="row">
                <h1>{user.name} Dashboard</h1>
                {/* <Global/> */}
           </div>
        </Layout>
    );
}
