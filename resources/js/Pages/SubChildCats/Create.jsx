import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Create() {
    const { childcats } = usePage().props;

    // Initialize the form state with useForm hook
    const { data, setData, post, processing, errors } = useForm({
        childcat_id: '',
        sub_child_cat_name: '',
        image: null,
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('subchildcat.store'));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setData('image', e.target.files[0]);
    };
    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Add Sub Child Category</h1>
                <div className="col-md-8 m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="m-3">
                            <select
                                name="childcat_id"
                                className="form-control"
                                value={data.childcat_id}
                                onChange={(e) => setData('childcat_id', e.target.value)}
                            >
                                <option value="">Select Category</option>
                                {childcats.map(childcat_id => (
                                    <option key={childcat_id } value={childcat_id.id}>{childcat_id.child_cat_name}</option>
                                ))}
                            </select>
                            {errors.childcat_id && <div className="text-danger">{errors.childcat_id}</div>}
                        </div>
                        <div className="m-3">
                            <input
                                type="text"
                                name="sub_child_cat_name"
                                placeholder="Name"
                                className="form-control"
                                value={data.sub_child_cat_name}
                                onChange={(e) => setData('sub_child_cat_name', e.target.value)}
                            />
                            {errors.sub_child_cat_name && <div className="text-danger">{errors.sub_child_cat_name}</div>}
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
                                href={route("subchildcat.index")}
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
