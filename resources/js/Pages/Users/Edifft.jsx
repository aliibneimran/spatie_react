import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Edit() {
    const { user, roles } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        name: user.name || "",
        email: user.email || "",
        password: "",
        password_confirmation: "",
        role:  "",
    });

    useEffect(() => {
        setData({
            name: user.name || "",
            email: user.email || "",
            password: "",
            password_confirmation: "",
            role:  "",
        });
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('users.update', { user: user.id }), {
            onSuccess: () => {
                console.log('User updated successfully');
            },
            onError: (errors) => {
                console.error('Error updating user:', errors);
            },
        });
    };

    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Edit User</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Name"
                                    value={data.name}
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <div className="text-danger">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <div className="text-danger">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={handleChange}
                                />
                                {errors.password && (
                                    <div className="text-danger">
                                        {errors.password}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    value={data.password_confirmation}
                                    onChange={handleChange}
                                />
                                {errors.password_confirmation && (
                                    <div className="text-danger">
                                        {errors.password_confirmation}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3 col-md-4 m-auto">
                                <label className="form-label">User Role</label>
                                <select
                                    name="role"
                                    className="form-control"
                                    value={data.role}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Role</option>
                                    {roles.map((role) => (
                                        <option key={role.id} value={role.id}>
                                            {role.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.role && (
                                    <div className="text-danger">
                                        {errors.role}
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="m-3 text-center">
                            <Link
                                href={route("users.index")}
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
