import Layout from "@/Layouts/Layout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Trash() {
    const { permissions, flash = {} } = usePage().props; // permissions is now a paginator object
    // Extracting the items array from the paginator
    const permissionItems = permissions.data || [];

    // Using useForm to handle API requests
    const { delete: deletedata ,patch: restoredata} = useForm();

    const handleDelete = (id) => {
        if (window.confirm('Do you want to delete this permission permanently?')) {
            deletedata(route('permissions.delete', { id: id }));
        }
    };
    const handleRestore = (id) => {
        if (window.confirm('Do you want to restore this permission?')) {
            restoredata(route('permissions.restore', { id: id }));
        }
    };

    return (
        <Layout>
            <Head title="Permissions Trash List" ></Head>
            <div className="row">
                <h1 className="p-4 text-center h1">Permissions Trash List</h1>
                {/* Display Success Message */}
                {flash.success && (
                    <div className="alert alert-success">{flash.success}</div>
                )}
                <div className="mb-4 text-center">
                    <Link
                        href={route("permissions.create")}
                        className="btn btn-primary mx-2"
                    >
                        Add New
                    </Link>
                    <Link
                        href={route("permissions.index")}
                        className="btn btn-info"
                    >
                        Index
                    </Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>SI NO.</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {permissionItems.length > 0 ? (
                                permissionItems.map((data, index) => (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>
                                            <button
                                                className="btn btn-info mx-1"
                                                onClick={() => handleRestore(data.id)}
                                            >
                                                Restore
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(data.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">No permissions found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination Links */}
                <div className="pagination justify-content-center mb-4">
                    {permissions.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className={`page-link ${
                                link.active ? "active" : ""
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
