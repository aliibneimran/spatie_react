<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $superAdmin = Role::create(['name' => 'Super Admin']);
        $admin = Role::create(['name' => 'Admin']);
        $user = Role::create(['name' => 'User']);
         // Create permissions
         Permission::create(['name' => 'create-user']);
         Permission::create(['name' => 'edit-user']);
         Permission::create(['name' => 'delete-user']);
         Permission::create(['name' => 'create-product']);
         Permission::create(['name' => 'edit-product']);
         Permission::create(['name' => 'delete-product']);

        $admin->givePermissionTo([
            'create-user',
            'edit-user',
            'delete-user',
            'create-product',
            'edit-product',
            'delete-product'
        ]);

        $user->givePermissionTo([
            'create-product',
            'edit-product',
            'delete-product'
        ]);

        $superAdmin->givePermissionTo(Permission::all());
    }
}
