import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Create() {
    const { user, roles, packages } = usePage().props;
    const type = user.type;

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        roles: [],
        package: "",
        business_name: "",
        client_mobile: "",
        registration_date: "",
        expire_date: "",
        client_address: "",
        type: type === 0 ? 1 : 2,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            ...data,
            roles: type === 1 ? ["2"] : data.roles,
            type: type === 1 ? 2 : 1,
        };
        console.log("Submitting Form Data:", formData);
        post(route("users.store"), { data: formData });
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
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <div className="text-danger">
                                        {errors.password}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                />
                                {errors.password_confirmation && (
                                    <div className="text-danger">
                                        {errors.password_confirmation}
                                    </div>
                                )}
                            </div>

                            {type === 0 && (
                                <>
                                    <div className="mb-3 col-md-6">
                                        <label className="form-label">
                                            User Role
                                        </label>
                                        <select
                                            name="roles[]"
                                            className="form-control"
                                            value={data.roles}
                                            onChange={(e) =>
                                                setData(
                                                    "roles",
                                                    Array.from(
                                                        e.target
                                                            .selectedOptions,
                                                        (option) => option.value
                                                    )
                                                )
                                            }
                                        >
                                            <option value="">
                                                Select Role
                                            </option>
                                            {roles.map((role) => (
                                                <option
                                                    key={role.id}
                                                    value={role.id}
                                                >
                                                    {role.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.roles && (
                                            <div className="text-danger">
                                                {errors.roles}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label className="form-label">
                                            Package
                                        </label>
                                        <select
                                            name="package"
                                            className="form-control"
                                            value={data.package}
                                            onChange={(e) =>
                                                setData(
                                                    "package",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">
                                                Select Package
                                            </option>
                                            {packages.map((pkg) => (
                                                <option
                                                    key={pkg.id}
                                                    value={pkg.id}
                                                >
                                                    {pkg.package_name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.package && (
                                            <div className="text-danger">
                                                {errors.package}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label className="form-label">
                                            Business Name
                                        </label>
                                        <input
                                            type="text"
                                            name="business_name"
                                            className="form-control"
                                            placeholder="Business Name"
                                            value={data.business_name}
                                            onChange={(e) =>
                                                setData(
                                                    "business_name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.business_name && (
                                            <div className="text-danger">
                                                {errors.business_name}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label className="form-label">
                                            Mobile
                                        </label>
                                        <input
                                            type="text"
                                            name="client_mobile"
                                            className="form-control"
                                            placeholder="Mobile"
                                            value={data.client_mobile}
                                            onChange={(e) =>
                                                setData(
                                                    "client_mobile",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.client_mobile && (
                                            <div className="text-danger">
                                                {errors.client_mobile}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label className="form-label">
                                            Registration Date
                                        </label>
                                        <input
                                            type="date"
                                            name="registration_date"
                                            className="form-control"
                                            value={data.registration_date}
                                            onChange={(e) =>
                                                setData(
                                                    "registration_date",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.registration_date && (
                                            <div className="text-danger">
                                                {errors.registration_date}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label className="form-label">
                                            Expire Date
                                        </label>
                                        <input
                                            type="date"
                                            name="expire_date"
                                            className="form-control"
                                            value={data.expire_date}
                                            onChange={(e) =>
                                                setData(
                                                    "expire_date",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.expire_date && (
                                            <div className="text-danger">
                                                {errors.expire_date}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-3 col-md-12">
                                        <label className="form-label">
                                            Address
                                        </label>
                                        <textarea
                                            name="client_address"
                                            className="form-control"
                                            value={data.client_address}
                                            onChange={(e) =>
                                                setData(
                                                    "client_address",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.client_address && (
                                            <div className="text-danger">
                                                {errors.client_address}
                                            </div>
                                        )}
                                    </div>
                                    <input
                                        type="hidden"
                                        name="type"
                                        value="1"
                                    />
                                </>
                            )}
                            {type === 1 && (
                                <>
                                    <div className="mb-3 col-md-4 content-center m-auto">
                                        <label className="form-label">
                                            User Role
                                        </label>
                                        <select
                                            name="roles[]"
                                            className="form-control"
                                            value={data.roles}
                                            onChange={(e) =>
                                                setData(
                                                    "roles",
                                                    Array.from(
                                                        e.target
                                                            .selectedOptions,
                                                        (option) => option.value
                                                    )
                                                )
                                            }
                                        >
                                            <option>
                                            Select
                                            </option>

                                            <option  value="2">
                                            Employee
                                            </option>

                                        </select>
                                        {errors.roles && (
                                            <div className="text-danger">
                                                {errors.roles}
                                            </div>
                                        )}
                                    </div>
                                    {/* <input type="hidden" name="roles[]" value="Employee" /> */}
                                    <input
                                        type="hidden"
                                        name="type"
                                        value="2"
                                    />
                                </>
                            )}
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
                                {processing ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
