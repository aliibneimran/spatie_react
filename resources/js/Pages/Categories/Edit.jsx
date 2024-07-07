import Layout from '@/Layouts/Layout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React from 'react';

export default function Edit() {
    const { category } = usePage().props;

    // Initialize the form state using useForm
    const { data, setData, post, processing, errors } = useForm({
        cat_name: category.cat_name || '',
        image: null,
        _method: 'put',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const newValue = name === 'image' ? files[0] : value;
        setData(name, newValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('category.update',{ category: category.id }));
    };

    return (
        <Layout>
            <Head title="Edit Category" ></Head>
            <div className="row">
                <h1 className='p-4 text-center h1'>Edit Category</h1>
                <div className="col-md-8 m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className='m-3'>
                            <input
                                type="text"
                                name="cat_name"
                                value={data.cat_name}
                                onChange={handleChange}
                                placeholder='Name'
                                className='form-control'
                            />
                            {errors.cat_name && <div className="text-danger">{errors.cat_name}</div>}
                        </div>
                        <div className='m-3'>
                            <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                                className='form-control'
                            />
                            {errors.image && <div className="text-danger">{errors.image}</div>}
                        </div>
                        <div className='m-3 text-center'>
                        <Link href={route('category.index')} className='btn btn-danger mx-2'>Back</Link>
                            <button type='submit' className='btn btn-success' disabled={processing}>
                            {processing ? 'Updating...' : 'Update'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
