import Layout from "@/Layouts/Layout";
import { Link, usePage, useForm } from "@inertiajs/react";
import React from "react";

export default function ProfileManage() {
    const { user, flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        name: user.name || "",
        email: user.email || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("profileupdate"));
    };

    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Profile Manage</h1>
                <div className="col-md-8 m-auto">
                    {flash.success && (
                        <div className="alert alert-success">
                            {flash.success}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="m-3">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={data.email}
                                disabled
                            />
                            {errors.email && (
                                <div className="text-danger">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className="m-3">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            {errors.name && (
                                <div className="text-danger">{errors.name}</div>
                            )}
                        </div>
                        <div className="m-3 text-center">
                            <Link
                                href={route("dashboard")}
                                className="btn btn-danger mx-2"
                            >
                                Back
                            </Link>
                            <button
                                type="submit"
                                className="btn btn-success"
                                disabled={processing}
                            >
                                {processing ? "Updating..." : "Update"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
