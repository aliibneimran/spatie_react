<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChildcatController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LangController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SubcategoryController;
use App\Http\Controllers\SubchildcatController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Auth/Login', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/', [AuthenticatedSessionController::class, 'create']);

// password Forget & reset

Route::get('forget-password', [ForgotPasswordController::class, 'showForgetPasswordForm'])->name('forget.password.get');
Route::post('forget-password', [ForgotPasswordController::class, 'submitForgetPasswordForm'])->name('forget.password.post');
Route::get('reset-password/{token}', [ForgotPasswordController::class, 'showResetPasswordForm'])->name('reset.password.get');
Route::post('reset-password', [ForgotPasswordController::class, 'submitResetPasswordForm'])->name('reset.password.post');



Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');
// profile manage
Route::get('/profile-manage', [HomeController::class, 'profileUpdateShow'])->name('profile.edit');
Route::post('/profile-manage', [HomeController::class, 'profileUpdate'])->name('profileupdate');

Route::get('change-password', [HomeController::class, 'passwordChangeindex'] )->name('change.password');
Route::post('change-password', [HomeController::class, 'passwordChangeStore'])->name('change.passwordupdate');

Route::resource('category', CategoryController::class);
    Route::get('/trash',[CategoryController::class, 'trash'])->name('category.trash');
    Route::patch('category/{id}/restore', [CategoryController::class, 'restore'])->name('category.restore');
    Route::delete('category/{id}/delete', [CategoryController::class, 'delete'])->name('category.delete');

Route::resource('subcategory', SubcategoryController::class);
    Route::get('/subcat-trash',[SubcategoryController::class, 'subtrash'])->name('subcategory.trash');
    Route::patch('subcategory/{id}/restore', [SubcategoryController::class, 'restore'])->name('subcategory.restore');
    Route::delete('subcategory/{id}/delete', [SubcategoryController::class, 'delete'])->name('subcategory.delete');


Route::resource('childcat', ChildcatController::class);
    Route::get('/child-trash',[ChildcatController::class, 'childtrash'])->name('childcat.trash');
    Route::patch('childcat/{id}/restore', [ChildcatController::class, 'restore'])->name('childcat.restore');
    Route::delete('childcat/{id}/delete', [ChildcatController::class, 'delete'])->name('childcat.delete');

Route::resource('subchildcat', SubchildcatController::class);
    Route::get('/subchild-trash',[SubchildcatController::class, 'subchildtrash'])->name('subchildcat.trash');
    Route::patch('subchildcat/{id}/restore', [SubchildcatController::class, 'restore'])->name('subchildcat.restore');
    Route::delete('subchildcat/{id}/delete', [SubchildcatController::class, 'delete'])->name('subchildcat.delete');

Route::resource('roles', RoleController::class);
    Route::get('/roletrash',[RoleController::class, 'trash'])->name('roles.trash');
    Route::patch('role/{id}/restore', [RoleController::class, 'restore'])->name('roles.restore');
    Route::delete('role/{id}/delete', [RoleController::class, 'delete'])->name('roles.delete');

Route::resource('users', UserController::class);
    Route::get('/usertrash',[UserController::class, 'usertrash'])->name('users.trash');
    Route::patch('user/{id}/restore', [UserController::class, 'restore'])->name('users.restore');
    Route::delete('user/{id}/delete', [UserController::class, 'delete'])->name('users.delete');
    Route::put('/changeStatus/{id}', [UserController::class, 'changeStatus'])->name('changeStatus');
    Route::get('/mark-as-read', [UserController::class, 'markAsRead'])->name('mark-as-read');

Route::resource('permissions', PermissionController::class);
    Route::get('/pertrash',[PermissionController::class, 'pertrash'])->name('permissions.trash');
    Route::patch('permissions/{id}/restore', [PermissionController::class, 'restore'])->name('permissions.restore');
    Route::delete('permissions/{id}/delete', [PermissionController::class, 'delete'])->name('permissions.delete');

// Route::get('/category', [CategoryController::class, 'index'])->name('category.index');

Route::resource('package', PackageController::class);
    Route::get('/pkgtrash',[PackageController::class, 'pkgtrash'])->name('package.trash');
    Route::patch('package/{id}/restore', [PackageController::class, 'restore'])->name('package.restore');
    Route::delete('package/{id}/delete', [PackageController::class, 'delete'])->name('package.delete');

Route::get('lang/change', [LangController::class, 'change'])->name('change.lang');

// Route::middleware(['auth', 'role:Super Admin'])->group(function () {
//     Route::get('/admin', function () {
//         return Inertia::render('Admin/Dashboard');
//     })->name('admin.dashboard');
// });


require __DIR__.'/auth.php';
