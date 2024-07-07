import Layout from '@/Layouts/Layout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';

export default function Edit() {
    const { permission, errors } = usePage().props;
    const { data, setData, put, processing } = useForm({
        name: permission.name || '',
    });

    useEffect(() => {
        setData('name', permission.name || '');
    }, [permission]);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('permissions.update', { id: permission.id }));
    };

    return (
        <Layout>
            <Head title="Edit Permission" ></Head>
            <div className="row">
                <h1 className="p-4 text-center h1">Edit Permission</h1>

                {Object.keys(errors).length > 0 && (
                    <div className="alert alert-danger">
                        <strong>Whoops!</strong> There were some problems with your input.<br /><br />
                        <ul>
                            {Object.values(errors).map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="row justify-content-center">
                        <div className="form-group col-8 pb-2">
                            <label className="my-2">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.name && <span className="text-danger">{errors.name}</span>}
                        </div>

                        <div className="col-xs-12 mt-3 mb-3 text-center">
                            <Link href={route('permissions.index')} className="btn btn-danger mx-2">Back</Link>
                            <button type="submit" className="btn btn-primary" disabled={processing}>
                                {processing ? 'Updating...' : 'Update'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
