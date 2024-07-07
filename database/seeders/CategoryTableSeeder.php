<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Categories
        $categories = [
            'HR Admin',
            'Security',
            'Employee Info',
            'Org Chart',
            'Employee Life Cycle',
            'Leave',
            'Attendance',
            'Payroll',
            'Claim',
            'On Demand Reports',
            'Report Viewer',
            'Workforce Planning',
            'Recruitment',
            'Performance',
            'Learning',
            'Probation Evaluation',
            'Request Tracker',
            'Grievance Handling',


        ];

        foreach ($categories as $category) {
            Category::create(['cat_name' => $category]);
        }


    }
}
