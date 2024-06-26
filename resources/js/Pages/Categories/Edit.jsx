import Layout from '@/Layouts/Layout';
import { Link, useForm, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';

export default function Edit() {
    const { category } = usePage().props;
    const { data, setData, put, processing, errors } = useForm({
        cat_name: category.cat_name,
        cat_des: category.cat_des,
        image: category.image
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('category.update', category.id));
    };

    return (
        <Layout>
            <div className="row">
                <h1 className='p-4 text-center h1'>Edit Category</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className='m-3'>
                            <input
                                type="text"
                                name="cat_name"
                                placeholder='Name'
                                className='form-control'
                                value={data.cat_name}
                                onChange={(e) => setData('cat_name', e.target.value)}
                            />
                        </div>
                        <div className='m-3'>
                            <input
                                type="text"
                                name="cat_des"
                                placeholder='Describe'
                                className='form-control'
                                value={data.cat_des}
                                onChange={(e) => setData('cat_des', e.target.value)}
                            />
                        </div>
                        <div className='m-3'>
                            <input
                                type="file"
                                name="image"
                                className='form-control'
                                onChange={(e) => setData('image', e.target.files[0])}
                            />
                        </div>
                        <div className='m-3 text-center'>
                            <Link href={route('category.index')} className='btn btn-danger mx-2'>Back</Link>
                            <button type='submit' className='btn btn-success' disabled={processing}>
                                {processing ? 'Updating...' : 'Update'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
