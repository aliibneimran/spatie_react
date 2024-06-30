// resources/js/Pages/Roles/Edit.jsx

import Layout from '@/Layouts/Layout';
import { usePage, useForm, Link } from '@inertiajs/react';
import React, { useEffect } from 'react';

export default function Edit() {
    const { role, permissions } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        name: role.name,
        permissions: role.permissions.map(permission => permission.name),
    });

    const handleChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setData('permissions', [...data.permissions, value]);
        } else {
            setData('permissions', data.permissions.filter(permission => permission !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/roles/${role.id}`);
    };

    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Edit Role</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="m-3">
                            <input
                                type="text"
                                placeholder="Name"
                                className="form-control"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                            />
                            {errors.name && <div className="text-danger">{errors.name}</div>}
                        </div>
                        <div className="m-3">
                            <div className="row">
                                {permissions.map((permission) => (
                                    <div key={permission.id} className="col-md-3">
                                        <input
                                            type="checkbox"
                                            id={`permission-${permission.id}`}
                                            className="form-check-input mx-1"
                                            value={permission.name}
                                            checked={data.permissions.includes(permission.name)}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor={`permission-${permission.id}`}
                                            className="form-check-label"
                                        >
                                            {permission.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="m-3 text-center">
                        <Link href={route('roles.index')} className="btn btn-danger mx-2">Back</Link>
                            <button type="submit" className="btn btn-success" disabled={processing}>
                            {processing ? 'Updating...' : 'Update'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
