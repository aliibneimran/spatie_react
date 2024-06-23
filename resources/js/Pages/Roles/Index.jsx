import Layout from '@/Layouts/Layout'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function Index() {
    const {roles} = usePage().props;
    console.log(roles)
  return (
    <Layout>
        <div className="row">
            <h1 className='p-4 text-center h1'>All Roles</h1>
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>SI NO.</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((data,index)=>(
                        <tr key={data.id}>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>
                                <Link href={route('roles.show',{role:data.id})} className='btn btn-primary'><i class="fa-solid fa-eye"></i></Link>
                                <Link href={route('roles.edit',{role:data.id})} className='btn btn-info mx-1'><i class="fa-solid fa-pen-to-square"></i></Link>
                                <Link href='' className='btn btn-danger'><i class="fa-solid fa-trash"></i></Link>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
  )
}
