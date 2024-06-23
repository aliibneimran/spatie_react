import Layout from "@/Layouts/Layout";
import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { user } = usePage().props;
    return (
        <Layout user={user}>
           <div className="row">
                <h1>{user.name} Dashboard</h1>

           </div>
        </Layout>
    );
}
