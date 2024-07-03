import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function ForgotPassword() {
    const {flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });


    const submit = (e) => {
        e.preventDefault();
        post(route("forget.password.post"));
    };



    return (
        <div className="auth-full-page-content d-flex p-sm-5 p-2 col-6 m-auto">
            <div className="w-75 m-auto">
                <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-6 text-center">
                        <a className="d-block auth-logo">
                            <img
                                src="assets/images/logo.jpg"
                                alt="Logo"
                                height={28}
                            />
                        </a>
                    </div>
                    <div className="auth-content my-auto">

                            <>
                                <div className="text-center">
                                    <p className="text-muted mt-2 h3">
                                    Forgot Password?
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted mt-2">
                                    Enter your email address and we'll send you an email with instructions to reset your password.
                                    </p>
                                </div>
                                {/* Display error message if account is inactive */}
                                {flash.success && (
                                    <div className="alert alert-success">{flash.success}</div>
                                )}
                                <form className="mt-4 pt-2" onSubmit={submit}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            isFocused={true}
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                        {errors.email && (
                                            <div className="text-danger">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>


                                    <div className="mb-3">
                                        <button
                                            className="btn btn-primary w-100 waves-effect waves-light"
                                            type="submit"
                                            disabled={processing}
                                        >
                                            Send Password Reset Link
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-3 text-center">
                                    <p className="text-muted mb-0">
                                        Remember password?
                                        <Link
                                            href={route("login")}
                                            className="text-primary fw-semibold m-2"
                                        >
                                            Login Now
                                        </Link>
                                    </p>
                                </div>
                            </>

                    </div>
                    <div className="mt-4 mt-md-3 text-center">
                        <p className="mb-0">
                            <span className="p-2">© Hr Lounge.</span>
                            Developed by{" "}
                            <Link>A &amp; A Consulting Limited</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
