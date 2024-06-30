import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Edit() {
    const { subcategory, cats } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        cat_id: subcategory.cat_id || '',
        sub_cat_name: subcategory.sub_cat_name || '',
        image: null,
        _method: 'put',
    });

    useEffect(() => {
        setData('cat_id', subcategory.cat_id || '');
        setData('sub_cat_name', subcategory.sub_cat_name || '');
    }, [subcategory]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('subcategory.update', subcategory.id), {
            forceFormData: true,
        });
    };

    const handleFileChange = (e) => {
        setData('image', e.target.files[0]);
    };

    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Edit Subcategory</h1>
                <div className="col-md-8 m-auto">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="m-3">
                            <select
                                name="cat_id"
                                className="form-control"
                                value={data.cat_id}
                                onChange={(e) => setData('cat_id', e.target.value)}
                            >
                                <option value="">Select Category</option>
                                {cats.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.cat_name}</option>
                                ))}
                            </select>
                            {errors.cat_id && <div className="text-danger">{errors.cat_id}</div>}
                        </div>
                        <div className="m-3">
                            <input
                                type="text"
                                name="sub_cat_name"
                                placeholder="Name"
                                className="form-control"
                                value={data.sub_cat_name}
                                onChange={(e) => setData('sub_cat_name', e.target.value)}
                            />
                            {errors.sub_cat_name && <div className="text-danger">{errors.sub_cat_name}</div>}
                        </div>
                        <div className="m-3">
                            <input
                                type="file"
                                name="image"
                                className="form-control"
                                onChange={handleFileChange}
                            />
                            {errors.image && <div className="text-danger">{errors.image}</div>}
                        </div>
                        <div className="m-3 text-center">
                            <Link
                                href={route("subcategory.index")}
                                className="btn btn-danger mx-2"
                            >
                                Back
                            </Link>
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
