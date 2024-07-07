import Layout from "@/Layouts/Layout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Trash() {
    const { subchildcats, flash = {} } = usePage().props; // childcats is now a paginator object
    // Extracting the items array from the paginator
    const Items = subchildcats.data || [];

    // Using useForm to handle API requests
    const { delete: deletedata, patch: restoredata } = useForm();

    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this subcat permanently?")) {
            deletedata(route("subchildcat.delete", { id: id }));
        }
    };
    const handleRestore = (id) => {
        if (window.confirm("Do you want to restore this subcat?")) {
            restoredata(route("subchildcat.restore", { id: id }));
        }
    };
    return (
        <Layout>
            <Head title=" Sub Child Category Trash List" ></Head>
            <div className="row">
                <h1 className="p-4 text-center h1">
                    Sub Child Category Trash List
                </h1>
                {/* Display Success Message */}
                {flash.success && (
                    <div className="alert alert-success">{flash.success}</div>
                )}
                <div className="mb-4 text-center">
                    <Link
                        href={route("subchildcat.create")}
                        className="btn btn-primary mx-2"
                    >
                        Add New
                    </Link>
                    <Link
                        href={route("subchildcat.index")}
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
                                <th>Image</th>
                                <th>Child Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Items.length > 0 ? (
                                Items.map((data, index) => (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td>{data.sub_child_cat_name}</td>
                                        <td>
                                            {data.image && (
                                                <img
                                                    src={`/images/subchildcat/${data.image}`}
                                                    alt={
                                                        data.sub_child_cat_name
                                                    }
                                                    style={{
                                                        maxWidth: "30px",
                                                        maxHeight: "30px",
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            {data.childcategory
                                                ? data.childcategory
                                                      .child_cat_name
                                                : "Uncategorized"}
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-info mx-1"
                                                onClick={() =>
                                                    handleRestore(data.id)
                                                }
                                            >
                                                Restore
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    handleDelete(data.id)
                                                }
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
                    {subchildcats.links.map((link, index) => (
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
