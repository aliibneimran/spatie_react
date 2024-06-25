import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Edit() {
    const { subchildcat, childcats } = usePage().props;

    // Initialize the form state with useForm hook
    const { data, setData, put, processing, errors } = useForm({
        childcat_id: subchildcat.childcat_id || '',
        sub_child_cat_name: subchildcat.sub_child_cat_name || '',
        image: null,
    });

    // Populate form data when subchildcat changes
    // useEffect(() => {
    //     setData('subcat_id', subchildcat.subcat_id || '');
    // }, [subchildcat]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('subchildcat.update', subchildcat.id));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setData('image', e.target.files[0]);
    };

    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Edit Sub Child Category</h1>
                <div className="col-md-8 m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="m-3">
                            <select
                                name="childcat_id"
                                className="form-control"
                                value={data.childcat_id}
                                onChange={(e) => setData('childcat_id', e.target.value)}
                            >
                                <option value="">Select Subcategory</option>
                                {childcats.map(childcat_id => (
                                    <option key={childcat_id} value={childcat_id.id}>{childcat_id.child_cat_name}</option>
                                ))}
                            </select>

                            {errors.subcat_id && <div className="text-danger">{errors.subcat_id}</div>}
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
                            <button type="submit" className="btn btn-success" disabled={processing}>
                                {processing ? 'Updating...' : 'Update'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
