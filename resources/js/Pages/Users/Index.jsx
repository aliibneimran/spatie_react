import Layout from "@/Layouts/Layout";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Index() {
    const { users } = usePage().props;
    console.log(users);
    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">All Users</h1>
                <div className="mt-2 mb-2">
                    <Link
                        href={route("users.create")}
                        className="btn btn-success p-2 "
                    >
                        Add User
                    </Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>SI NO.</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((data, index) => (
                            <tr key={data.id}>
                                <td>{index + 1}</td>
                                <td>{data.name}</td>
                                <td>
                                {data.type}
                                </td>
                                <td>
                                    <Link href={route('users.show',{user:data.id})} className="btn btn-primary mr-2">
                                        View
                                    </Link>
                                    <Link href={route('users.edit',{user:data.id})} className="btn btn-info mr-2">
                                        Edit
                                    </Link>
                                    <Link href="" className="btn btn-danger">
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}
