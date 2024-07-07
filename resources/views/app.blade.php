<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title inertia>{{ config('app.name', 'HR LOUNGE') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />


     <!-- App favicon -->
	<link rel="shortcut icon" href="{{asset('assets/images/logo.png')}}">

	<!-- Daterangepicker css -->
	<link rel="stylesheet" href="{{asset('assets/vendor/daterangepicker/daterangepicker.css')}}">

	<!-- Vector Map css -->
	<link rel="stylesheet" href="{{asset('assets/vendor/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css')}}">

	<!-- Theme Config Js -->
	<script src="{{asset('assets/js/config.js')}}"></script>

	<!-- App css -->
	{{-- <link href="{{asset('assets/css/app.css')}}" rel="stylesheet" type="text/css" id="app-style" /> --}}
	<link href="{{asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css" id="app-style" />

	<!-- Icons css -->
	<link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />

     <script src="https://kit.fontawesome.com/60cd01b8da.js" crossorigin="anonymous"></script>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

     <!-- Vendor js -->
        <script src="{{asset('assets/js/vendor.min.js')}}"></script>

        <script src="{{asset('assets/vendor/lucide/umd/lucide.min.js')}}"></script>

        <!-- Apex Charts js -->
        <script src="{{asset('assets/vendor/apexcharts/apexcharts.min.js')}}"></script>

        <!-- Vector Map js -->
        <script src="{{asset('assets/vendor/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js')}}"></script>
        <script src="{{asset('assets/vendor/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js')}}"></script>

        <!-- Dashboard App js -->
        <script src="{{asset('assets/js/pages/dashboard.js')}}"></script>

        <!-- App js -->
        {{-- <script src="{{asset('assets/js/app.js')}}"></script> --}}
        <script src="{{asset('assets/js/app.min.js')}}"></script>
    </body>
</html>
