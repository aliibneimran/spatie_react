// resources/js/Pages/Roles/Create.jsx

import Layout from '@/Layouts/Layout';
import { usePage, useForm } from '@inertiajs/react';
import React from 'react';

export default function Create() {
    const { permissions } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        permissions: []
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
        post('/roles');
    };

    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Add Role</h1>
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
                        <div className="m-4">
                            <div className="row">
                                {permissions.map((permission) => (
                                    <div key={permission.id} className="form-group p-1 col-2">
                                        <input
                                            type="checkbox"
                                            id={`permission-${permission.id}`}
                                            className="form-check-input"
                                            value={permission.name}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor={`permission-${permission.id}`}
                                            className="form-check-label mx-2"
                                        >
                                            {permission.name}
                                        </label>
                                    </div>
                                ))}
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
