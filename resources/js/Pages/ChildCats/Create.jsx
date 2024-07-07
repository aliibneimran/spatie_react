import Layout from "@/Layouts/Layout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Create() {
    const { subcats } = usePage().props;

    // Initialize the form state with useForm hook
    const { data, setData, post, processing, errors } = useForm({
        subcat_id: '',
        child_cat_name: '',
        image: null,
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('childcat.store'));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setData('image', e.target.files[0]);
    };

    return (
        <Layout>
             <Head title="Add Child Category" ></Head>
            <div className="row">
                 <h1 className="p-4 text-center h1">Add Child Category</h1>
                <div className="col-md-8 m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="m-3">
                            <select
                                name="subcat_id"
                                className="form-control"
                                value={data.cat_id}
                                onChange={(e) => setData('subcat_id', e.target.value)}
                            >
                                <option value="">Select Category</option>
                                {subcats.map(subcat => (
                                    <option key={subcat.id} value={subcat.id}>{subcat.sub_cat_name}</option>
                                ))}
                            </select>
                            {errors.subcat_id && <div className="text-danger">{errors.subcat_id}</div>}
                        </div>
                        <div className="m-3">
                            <input
                                type="text"
                                name="child_cat_name"
                                placeholder="Name"
                                className="form-control"
                                value={data.sub_cat_name}
                                onChange={(e) => setData('child_cat_name', e.target.value)}
                            />
                            {errors.child_cat_name && <div className="text-danger">{errors.child_cat_name}</div>}
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
                                href={route("childcat.index")}
                                className="btn btn-danger mx-2"
                            >
                                Back
                            </Link>
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
