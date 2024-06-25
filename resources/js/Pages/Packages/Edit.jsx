import Layout from '@/Layouts/Layout';
import { Link, useForm, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';

export default function Edit() {
    const { package: pkg, errors } = usePage().props;
    console.log(pkg)

    const { data, setData, put, processing } = useForm({
        package_name: '',
        package_price: '',
        package_duration: ''
    });

    useEffect(() => {
        if (pkg) {
            setData({
                package_name: pkg.package_name || '',
                package_price: pkg.package_name || '',
                package_duration: pkg.package_name || ''
            });
        }
    }, [pkg]);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('package.update', { id: pkg.id }));
    };

    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Edit Package</h1>

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
                            />
                            {errors.package_name && <span className="text-danger">{errors.package_name}</span>}
                        </div>
                        <div className="form-group col-8 pb-2">
                            <label className="my-2">Package Price:</label>
                            <input
                                type="text"
                                name="package_price"
                                value={data.package_price}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.package_price && <span className="text-danger">{errors.package_price}</span>}
                        </div>
                        <div className="form-group col-8 pb-2">
                            <label className="my-2">Package Duration:</label>
                            <input
                                type="text"
                                name="package_duration"
                                value={data.package_duration}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.package_duration && <span className="text-danger">{errors.package_duration}</span>}
                        </div>

                        <div className="col-xs-12 mt-3 mb-3 text-center">
                            <Link href={route('package.index')} className="btn btn-danger mx-2">Back</Link>
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
