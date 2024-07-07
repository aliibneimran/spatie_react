<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Permissions
        $permissions = [

            'package-list',
            'package-create',
            'package-edit',
            'package-delete',

            'user-list',
            'user-create',
            'user-edit',
            'user-delete',

            'role-list',
            'role-create',
            'role-edit',
            'role-delete',

            'permission-list',
            'permission-create',
            'permission-edit',
            'permission-delete',

            'category-list',
            'category-create',
            'category-edit',
            'category-delete',

            'subcategory-list',
            'subcategory-create',
            'subcategory-edit',
            'subcategory-delete',

            'childcat-list',
            'childcat-create',
            'childcat-edit',
            'childcat-delete',

            'subchildcat-list',
            'subchildcat-create',
            'subchildcat-edit',
            'subchildcat-delete',

            'HR Admin',
            'Security',
            'Employee Info',
            'Org Chart',
            'Lifecycle',
            'Leave',
            'Attendance',
            'Payroll',
            'Claim',
            'Reports',
            'Report Viewer',
            'Workforce',
            'Recruitment',
            'Performance',
            'Learning',
            'Probation',
            'Request',
            'Grievance',



        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        // Role Seeder
        $roles = [
            'Client',
            'Employee',
        ];
        foreach ($roles as $role) {
            Role::create(['name' => $role]);
        }
    }
}
