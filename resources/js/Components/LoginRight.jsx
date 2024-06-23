import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function LoginRight() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    // State variable to track password visibility
    const [showPassword, setShowPassword] = useState(false);
    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="auth-full-page-content d-flex p-sm-5 p-2">
            <div className="w-75 m-auto">
                <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-6 text-center">
                        <a className="d-block auth-logo">
                            <img src="assets/images/logo.jpg" alt="Logo" height={28} />
                            {/* <span className="logo-txt">
                                                MY HR LOUNGE
                                            </span> */}
                        </a>
                    </div>
                    <div className="auth-content my-auto">
                        <div className="text-center">
                            <p className="text-muted mt-2 h3">
                                Welcome to HR LOUNGE
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-muted mt-2">
                                Please sign in with your credentials
                            </p>
                        </div>
                        <form className="mt-4 pt-2" onSubmit={submit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email or Username"
                                    value={data.email}
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <div className="input-group auth-pass-inputgroup">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="password-addon"
                                        value={data.password}
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <button
                                        onClick={togglePasswordVisibility}
                                        className="btn btn-light shadow-none ms-0"
                                        type="button"
                                        id="password-addon"
                                    >
                                        <i
                                            className={`mdi ${
                                                showPassword
                                                    ? "mdi-eye-off-outline"
                                                    : "mdi-eye-outline"
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="row mb-4 mt-4">
                                <div className="col">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="remember"
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="remember-check"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <button
                                    className="btn btn-primary w-100 waves-effect waves-light"
                                    type="submit"
                                >
                                    Log In
                                </button>
                            </div>
                        </form>
                        <div className="mt-3 text-center">
                            <p className="text-muted mb-0">
                                Forget password ?
                                <Link
                                    href={route("password.request")}
                                    className="text-primary fw-semibold m-2"
                                >
                                    Reset now
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 mt-md-3 text-center">
                        <p className="mb-0">
                            <span className="p-2">© Hr Lounge.</span>
                            {/* <i className="mdi mdi-heart text-danger" /> */}
                            Developed by{" "}
                            <Link>A &amp; A Consulting Limited</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
