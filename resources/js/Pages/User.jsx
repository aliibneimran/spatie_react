import Layout from "@/Layouts/Layout";

export default function Dashboard({ user }) {
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
                <h2>Hi Employee</h2>
           </div>
        </Layout>
    );
}
