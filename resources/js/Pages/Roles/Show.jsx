import Layout from "@/Layouts/Layout";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Show() {
    const { role, permissions } = usePage().props; // Assuming 'role' object is passed as a prop
    return (
        <Layout>
            <div className="row">
                <h1 className="p-4 text-center h1">{role.name}</h1>
                <h2 className="h4">Permissions:</h2>

                <ul>
                {permissions.length > 0 ? (
                    permissions.map(permission => (
                        <label key={permission.id} className="label label-success">
                            {permission.name},
                            &nbsp;
                        </label>
                    ))
                ) : (
                    <span>No permissions assigned</span>
                )}
                </ul>
                <div className="mt-4 mb-4">
                    <Link href={route('roles.index')} className="btn btn-danger p-2 ">Back</Link>
                </div>
            </div>


        </Layout>
    );
}
