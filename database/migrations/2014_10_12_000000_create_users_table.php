<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->integer('type')->default(2)->comment('0=SuperAdmin, 1=Clients, 2=Employee');

            $table->bigInteger('client_id')->nullable();
            // $table->foreign('client_id')->references('id')->on('clients');
            $table->bigInteger('child_client_id')->nullable();
            // $table->foreign('child_client_id')->references('id')->on('employees');

            $table->bigInteger('package_id')->nullable();
            // $table->foreign('package_id')->references('id')->on('packages');
            $table->string('business_name')->nullable();
            $table->string('client_address')->nullable();
            $table->bigInteger('client_mobile')->nullable();
            $table->date('registration_date')->nullable();
            $table->date('expire_date')->nullable();

            $table->integer('status')->default(1);
            $table->softDeletes();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
