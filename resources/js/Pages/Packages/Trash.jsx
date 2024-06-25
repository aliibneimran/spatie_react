import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Trash() {
    const { packages, flash = {} } = usePage().props; // packages is now a paginator object
    // Extracting the items array from the paginator
    const Items = packages.data || [];

    // Using useForm to handle API requests
    const { delete: deletedata ,patch: restoredata} = useForm();

    const handleDelete = (id) => {
        if (window.confirm('Do you want to delete this package permanently?')) {
            deletedata(route('package.delete', { id: id }));
        }
    };
    const handleRestore = (id) => {
        if (window.confirm('Do you want to restore this package?')) {
            restoredata(route('package.restore', { id: id }));
        }
    };

    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Package Trash List</h1>
                {/* Display Success Message */}
                {flash.success && (
                    <div className="alert alert-success">{flash.success}</div>
                )}
                <div className="mb-4 text-center">
                    <Link
                        href={route("package.create")}
                        className="btn btn-primary mx-2"
                    >
                        Add New
                    </Link>
                    <Link
                        href={route("package.index")}
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
                                <th>Price</th>
                                <th>Duration</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Items.length > 0 ? (
                                Items.map((data, index) => (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td>{data.package_name}</td>
                                        <td>{data.package_price}</td>
                                        <td>{data.package_duration}</td>
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
                                    <td colSpan="3">No data found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination Links */}
                <div className="pagination justify-content-center mb-4">
                    {packages.links.map((link, index) => (
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
