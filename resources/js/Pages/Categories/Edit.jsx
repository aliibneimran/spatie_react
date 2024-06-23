import Layout from '@/Layouts/Layout';
import { Link, useForm, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';

export default function Edit() {
    const { category, errors } = usePage().props;

    const { data, setData, put, processing } = useForm({
        cat_name: category.cat_name || '',
        image: null
    });

    useEffect(() => {
        // Reset form data whenever category changes
        setData({
            cat_name: category.cat_name || '',
            image: null
        });
    }, [category]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = name === 'image' ? e.target.files[0] : e.target.value;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('cat_name', data.cat_name);
        if (data.image) {
            formData.append('image', data.image);
        }
        put(route('category.update', { id: category.id }), formData, {
            forceFormData: true,
        });
    };

    return (
        <Layout>
            <div className="row">
                <div className="col">
                    <h1 className="p-4 text-center h1">Edit Category</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="m-3">
                            <input
                                type="text"
                                name="cat_name"
                                value={data.cat_name}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.cat_name && (
                                <div className="text-danger">{errors.cat_name}</div>
                            )}
                        </div>
                        <div className="m-3">
                            <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.image && (
                                <div className="text-danger">{errors.image}</div>
                            )}
                        </div>
                        <div className="m-3">
                            <Link href={route('category.index')} className='btn btn-danger'>Back</Link>
                            <button
                                type="submit"
                                className="btn btn-success"
                                disabled={processing}
                            >
                                {processing ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}