import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Edit() {
    const { subchildcat, childcats } = usePage().props;
    const { data, setData, put } = useForm({
        childcat_id: subchildcat.childcat_id,
        sub_child_cat_name: subchildcat.sub_child_cat_name,
        image: null, // Initialize image if needed
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('subchildcat.update', subchildcat.id), {
            data,
            onSuccess: () => {
                // Handle success if needed
                console.log('Updated successfully.');
            },
            onError: (errors) => {
                // Handle errors if needed
                console.log(errors);
            },
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">Edit Sub Child Category</h1>
                <div className="col-md-8 m-auto">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="m-3">
                            <select
                                name="childcat_id"
                                className="form-control"
                                value={data.childcat_id}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Subcategory</option>
                                {childcats.map((childcat) => (
                                    <option key={childcat.id} value={childcat.id}>
                                        {childcat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="m-3">
                            <input
                                type="text"
                                name="sub_child_cat_name"
                                placeholder="Name"
                                className="form-control"
                                value={data.sub_child_cat_name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="m-3">
                            <input
                                type="file"
                                name="image"
                                className="form-control"
                                onChange={(e) => setData('image', e.target.files[0])}
                            />
                        </div>
                        <div className="m-3 text-center">
                            <Link
                                href={route("subchildcat.index")}
                                className="btn btn-danger mx-2"
                            >
                                Back
                            </Link>
                            <button type="submit" className="btn btn-success">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
