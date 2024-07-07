import Layout from '@/Layouts/Layout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React from 'react';

export default function Create() {
    const { errors } = usePage().props;
    const { data, setData, post, processing } = useForm({
        name: ''
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/package');
    };

    return (
        <Layout>
            <Head title="Add Package" ></Head>
            <div className="row">
                <h1 className="p-4 text-center h1">Add Package</h1>

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
                            <label className="my-2">Package Name:</label>
                            <input
                                type="text"
                                name="package_name"
                                value={data.package_name}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Name"
                            />
                            {errors.name && <span className="text-danger">{errors.name}</span>}
                        </div>
                        <div className="form-group col-8 pb-2">
                            <label className="my-2">Package Price:</label>
                            <input
                                type="text"
                                name="package_price"
                                value={data.package_price}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Amount"
                            />
                            {errors.name && <span className="text-danger">{errors.name}</span>}
                        </div>
                        <div className="form-group col-8 pb-2">
                            <label className="my-2">Package Duration:</label>
                            <input
                                type="text"
                                name="package_duration"
                                value={data.package_duration}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Duration"
                            />
                            {errors.name && <span className="text-danger">{errors.name}</span>}
                        </div>

                        <div className="col-xs-12 mt-3 mb-3 text-center">
                            <Link href={route('package.index')} className="btn btn-danger mx-2">Back</Link>
                            <button type="submit" className="btn btn-primary" disabled={processing}>
                                {processing ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
