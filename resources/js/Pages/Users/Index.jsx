import Status from "@/Components/Status";
import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function Index() {
    const { users,user,permissions, flash = {} } = usePage().props;
    const permissionNames = permissions;
    const Items = users.data || [];
    const { delete: deleteData } = useForm();
    const handleDelete = (id) => {
        if (window.confirm("Do you want to Delete?")) {
            deleteData(route("users.destroy", { user: id }));
        }
    };
    // const permissionNames = haspermissions.map(permission => permission);

    // console.log('user_id:', user.type);
    // console.log('Permission Names:', permissions);
    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">All Users</h1>
                {/* Display Success Message */}
                {flash.success && (
                    <div className="alert alert-success">{flash.success}</div>
                )}
                <div className="mb-4 text-center">
                    <Link
                        href={route("users.create")}
                        className="btn btn-primary mx-2"
                    >
                        Add New
                    </Link>
                    {user.type === 0 &&
                    <Link
                        href={route("users.trash")}
                        className="btn btn-info"
                    >
                        Trash List
                    </Link>}
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>SI NO.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                {user.type === 0 && <th>Package</th>}
                                <th>Action</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Items.length > 0 ? (
                                Items.map((data, index) => (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.role ? data.role.name : 'Uncategorized'}</td>
                                        {user.type === 0 && <td>{data.package ? data.package.package_name : 'Uncategorized'}</td>}
                                        <td>
                                        {permissionNames.includes('user-list') && (
                                            <Link
                                                href={route(
                                                    "users.edit",
                                                    { user: data.id }
                                                )}
                                                className="btn btn-info mx-1"
                                            >
                                               <i className="fa-solid fa-pen-to-square"></i>
                                            </Link>
                                        )}
                                            {user.type === 0 &&
                                            <button
                                                onClick={() =>
                                                    handleDelete(data.id)
                                                }
                                                className="btn btn-danger"
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </button>}
                                        </td>
                                        <td>
                                            <Status userId={data.id} initialStatus={data.status}></Status>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">No users found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}
