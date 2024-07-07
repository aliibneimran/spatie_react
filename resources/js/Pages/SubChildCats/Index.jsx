import Layout from "@/Layouts/Layout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Index() {
    const { subchildcats, flash = {} } = usePage().props;

    const Items = subchildcats.data || [];
    const { delete: deletedata } = useForm();

    const handleDelete = (id) => {
        if (window.confirm("Do you want to Delete?")) {
            deletedata(route("subchildcat.destroy", { subchildcat: id }));
        }
    };

    return (
        <Layout>
            <Head title="All Sub Child Category" ></Head>
            <div className="row">
                <h1 className="p-4 text-center h1">All Sub Child Category</h1>
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
                        href={route("subchildcat.trash")}
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
                                                    alt={data.sub_child_cat_name}
                                                    style={{
                                                        maxWidth: "30px",
                                                        maxHeight: "30px",
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td>{data.childcategory ? data.childcategory.child_cat_name : 'Uncategorized'}</td>
                                        <td>
                                            {/* <Link
                                                href={route(
                                                    "subcategory.show",
                                                    { subcategory: data.id }
                                                )}
                                                className="btn btn-primary"
                                            >
                                                <i className="fa-solid fa-eye"></i>
                                            </Link> */}
                                            <Link
                                                href={route(
                                                    "subchildcat.edit",
                                                    { subchildcat: data.id }
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
