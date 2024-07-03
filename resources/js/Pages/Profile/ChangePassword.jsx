import Layout from "@/Layouts/Layout";
import { Link, usePage, useForm } from "@inertiajs/react";
import React from "react";

export default function ChangePassword() {
    const { user, flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        current_password: '',
        new_password: '',
        new_confirm_password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('change.passwordupdate'));
    };

    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Change Password</h1>
                <div className="col-md-8 m-auto">
                    {flash.success && (
                        <div className="alert alert-success">
                            {flash.success}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="m-3">
                            <input
                                type="password"
                                name="current_password"
                                className="form-control"
                                placeholder="Current Password"
                                value={data.current_password}
                                onChange={(e) => setData('current_password', e.target.value)}
                            />
                            {errors.current_password && <div className="text-danger">{errors.current_password}</div>}
                        </div>
                        <div className="m-3">
                            <input
                                type="password"
                                name="new_password"
                                className="form-control"
                                placeholder="New Password"
                                value={data.new_password}
                                onChange={(e) => setData('new_password', e.target.value)}
                            />
                            {errors.new_password && <div className="text-danger">{errors.new_password}</div>}
                        </div>
                        <div className="m-3">
                            <input
                                type="password"
                                name="new_confirm_password"
                                className="form-control"
                                placeholder="New Confirm Password"
                                value={data.new_confirm_password}
                                onChange={(e) => setData('new_confirm_password', e.target.value)}
                            />
                            {errors.new_confirm_password && <div className="text-danger">{errors.new_confirm_password}</div>}
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
