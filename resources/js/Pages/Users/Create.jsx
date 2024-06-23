import Layout from "@/Layouts/Layout";
import { useForm, usePage } from '@inertiajs/react';
import React from "react";

export default function Create() {
    const { roles } = usePage().props; // Get roles from props

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '',
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/users');
    };

    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Add User</h1>
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
                                {errors.name && <div className="text-danger">{errors.name}</div>}
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
                                {errors.email && <div className="text-danger">{errors.email}</div>}
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
                                {errors.password && <div className="text-danger">{errors.password}</div>}
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    className="form-control"
                                    placeholder="Password"
                                    value={data.password_confirmation}
                                    onChange={handleChange}
                                />
                                {errors.password_confirmation && <div className="text-danger">{errors.password_confirmation}</div>}
                            </div>
                            <div className="d-flex justify-content-center align-items-center w-100 mb-3">
                                <div className="col-md-3">
                                    <label className="form-label">User Role</label>
                                    <select
                                        name="role"
                                        className="form-control"
                                        value={data.role}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Role</option>
                                        {roles.map(role => (
                                            <option key={role.id} value={role.id}>
                                                {role.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.role && <div className="text-danger">{errors.role}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="m-3 text-center">
                            <button type="submit" className="btn btn-success" disabled={processing}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
