import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Index() {
    const { categories, flash = {} } = usePage().props;

    const categoryItems = categories.data || [];
    const { delete: deletecategory } = useForm();

    const handleDelete = (id) => {
        if (window.confirm("Do you want to Delete?")) {
            deletecategory(route("category.destroy", { category: id }));
        }
    };
    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">All categories</h1>
                {/* Display Success Message */}
                {flash.success && (
                    <div className="alert alert-success">{flash.success}</div>
                )}
                <div className="mb-4 text-center">
                    <Link
                        href={route("category.create")}
                        className="btn btn-primary"
                    >
                        Add New
                    </Link>
                    <Link
                        href={route("category.trash")}
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryItems.length > 0 ? (
                                categoryItems.map((data, index) => (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td>{data.cat_name}</td>
                                        <td>
                                            {data.image && (
                                                <img
                                                    src={data.image}
                                                    alt={data.cat_name}
                                                    style={{
                                                        maxWidth: "50px",
                                                        maxHeight: "50px",
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            {/* <Link
                                                href={route(
                                                    "categories.show",
                                                    { category: data.id }
                                                )}
                                                className="btn btn-primary"
                                            >
                                                <i className="fa-solid fa-eye"></i>
                                            </Link> */}
                                            <Link
                                                href={route(
                                                    "category.edit",
                                                    { category: data.id }
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
                                    <td colSpan="3">No categories found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination Links */}
                <div className="pagination justify-content-center mb-4">
                    {categories.links.map((link, index) => (
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
