import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Index() {
    const { roles, flash = {} } = usePage().props;

    const roleItems = roles.data || [];
    const { delete: deletedata } = useForm();

    const handleDelete = (id) => {
        if (window.confirm("Do you want to Delete?")) {
            deletedata(route("roles.destroy", { role: id }));
        }
    };
    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">All roles</h1>
                {/* Display Success Message */}
                {flash.success && (
                    <div className="alert alert-success">{flash.success}</div>
                )}
                <div className="mb-4 text-center">
                    <Link
                        href={route("roles.create")}
                        className="btn btn-primary"
                    >
                        Add New
                    </Link>
                    <Link
                        href={route("roles.trash")}
                        className="btn btn-info"
                    >
                        Trash List
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
                            {roleItems.length > 0 ? (
                                roleItems.map((data, index) => (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>
                                            {/* <Link
                                                href={route(
                                                    "roles.show",
                                                    { role: data.id }
                                                )}
                                                className="btn btn-primary"
                                            >
                                                <i className="fa-solid fa-eye"></i>
                                            </Link> */}
                                            <Link
                                                href={route(
                                                    "roles.edit",
                                                    { role: data.id }
                                                )}
                                                className="btn btn-info mx-1"
                                            >
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(data.id)
                                                }
                                                className="btn btn-danger"
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">No roles found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination Links */}
                <div className="pagination justify-content-center mb-4">
                    {roles.links.map((link, index) => (
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
