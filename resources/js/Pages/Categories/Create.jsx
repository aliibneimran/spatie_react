import Layout from '@/Layouts/Layout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React from 'react';

export default function Create() {
    const { categories } = usePage().props;
    // Initialize the form state using useForm
    const { data, setData, post, processing, errors } = useForm({
        cat_name: '',
        image: null,
        status: 1,
    });

    // Handle input changes
    const handleChange = (e) => {
        const key = e.target.name;
        const value = key === 'image' ? e.target.files[0] : e.target.value;
        setData(key, value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('category.store'));
    };

    return (
        <Layout>
            <Head title="Add Category" ></Head>
            <div className="row">
                <h1 className='p-4 text-center h1'>Add Category</h1>
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
                                {processing ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
