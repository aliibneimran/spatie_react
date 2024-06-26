import Layout from "@/Layouts/Layout";
import { usePage } from "@inertiajs/react";
import Global from "../Pages/Constant/Global";

export default function Dashboard() {
    const { user } = usePage().props;
    // console.log(notifications)
    return (
        <Layout>
           <div className="row">
                <h1>{user.name} Dashboard</h1>
                {/* <Global/> */}
           </div>
        </Layout>
    );
}
