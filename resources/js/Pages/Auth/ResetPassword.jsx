import React from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Ziggy } from '@/ziggy';

export default function ResetPassword() {
    const { token,flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        password_confirmation: '',
        token: token || '',
    });
    console.log("cdfvfd",Ziggy.routes);
    const submit = (e) => {
        e.preventDefault();
        post(route('reset.password.post'));
    };

    return (
        <div className="auth-full-page-content d-flex p-sm-5 p-2 col-6 m-auto">
            <div className="w-75 m-auto">
                <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-6 text-center">
                        <a className="d-block auth-logo">
                            <img
                                src="/assets/images/logo.jpg"
                                alt="Logo"
                                height={28}
                            />
                        </a>
                    </div>
                    <div className="auth-content my-auto">
                        <div className="text-center">
                            <p className="text-muted mt-2 h3">Reset Password?</p>
                        </div>

                        <form className="mt-4 pt-2" onSubmit={submit}>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
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
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                {errors.password && (
                                    <div className="text-danger">
                                        {errors.password}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    placeholder="Confirm Password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                />
                                {errors.password_confirmation && (
                                    <div className="text-danger">
                                        {errors.password_confirmation}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <button
                                    className="btn btn-primary w-100 waves-effect waves-light"
                                    type="submit"
                                    disabled={processing}
                                >
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-4 mt-md-3 text-center">
                        <p className="mb-0">
                            <span className="p-2">© Hr Lounge.</span>
                            Developed by{' '}
                            <Link href="#">A &amp; A Consulting Limited</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
