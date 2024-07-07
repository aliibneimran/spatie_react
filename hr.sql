-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 07, 2024 at 07:24 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hr`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `cat_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` smallint NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `cat_name`, `image`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'HR Admin', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(2, 'Security', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(3, 'Employee Info', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(4, 'Org Chart', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(5, 'Employee Life Cycle', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(6, 'Leave', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(7, 'Attendance', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(8, 'Payroll', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(9, 'Claim', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(10, 'On Demand Reports', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(11, 'Report Viewer', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(12, 'Workforce Planning', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(13, 'Recruitment', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(14, 'Performance', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(15, 'Learning', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(16, 'Probation Evaluation', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(17, 'Request Tracker', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(18, 'Grievance Handling', NULL, 1, NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27');

-- --------------------------------------------------------

--
-- Table structure for table `childcats`
--

CREATE TABLE `childcats` (
  `id` bigint UNSIGNED NOT NULL,
  `subcat_id` bigint UNSIGNED NOT NULL,
  `child_cat_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` smallint NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint UNSIGNED NOT NULL,
  `country_id` bigint UNSIGNED NOT NULL,
  `state_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_code` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint UNSIGNED NOT NULL,
  `iso2` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `phone_code` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iso3` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `region` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subregion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `currencies`
--

CREATE TABLE `currencies` (
  `id` bigint UNSIGNED NOT NULL,
  `country_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `precision` tinyint NOT NULL DEFAULT '2',
  `symbol` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `symbol_native` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `symbol_first` tinyint NOT NULL DEFAULT '1',
  `decimal_mark` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '.',
  `thousands_separator` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ','
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` bigint UNSIGNED NOT NULL,
  `code` char(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_native` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dir` char(3) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_09_11_0000000_create_packages_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_0000002_create_permission_tables', 1),
(6, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(7, '2020_07_07_055656_create_countries_table', 1),
(8, '2020_07_07_055725_create_cities_table', 1),
(9, '2020_07_07_055746_create_timezones_table', 1),
(10, '2021_10_19_071730_create_states_table', 1),
(11, '2021_10_23_082414_create_currencies_table', 1),
(12, '2022_01_22_034939_create_languages_table', 1),
(13, '2024_06_02_174120_create_categories_table', 1),
(14, '2024_06_06_175113_create_subcategories_table', 1),
(15, '2024_06_06_175428_create_childcats_table', 1),
(16, '2024_06_09_111912_create_subchildcats_table', 1),
(17, '2024_06_22_102511_create_notifications_table', 1),
(18, '2024_06_25_052155_add_deleted_at_to_roles_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(3, 'App\\Models\\User', 1),
(1, 'App\\Models\\User', 3),
(2, 'App\\Models\\User', 4);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint UNSIGNED NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `type`, `notifiable_type`, `notifiable_id`, `data`, `read_at`, `created_at`, `updated_at`) VALUES
('08182486-27c7-4e07-b5a3-515fe3694103', 'App\\Notifications\\NewNotification', 'App\\Models\\User', 3, '{\"data\":\"New User Created - imran@gmail.com was successful.\"}', NULL, '2024-07-06 00:14:24', '2024-07-06 00:14:24'),
('3666cb2c-e1d7-40dc-a439-ab6479d38ece', 'App\\Notifications\\NewNotification', 'App\\Models\\User', 1, '{\"data\":\"New User Created - aa@gmail.com was successful.\"}', '2024-07-06 04:48:55', '2024-07-05 22:14:47', '2024-07-06 04:48:55');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` bigint UNSIGNED NOT NULL,
  `package_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_price` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_unit` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `expire_date` date DEFAULT NULL,
  `package_duration` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_entry_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` smallint NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `package_name`, `package_price`, `package_unit`, `purchase_date`, `expire_date`, `package_duration`, `package_entry_by`, `package_updated_by`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Yearly', '120000', NULL, NULL, NULL, '12', '1', '1', 1, NULL, '2024-07-07 01:16:44', '2024-07-07 01:16:44');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'package-list', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(2, 'package-create', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(3, 'package-edit', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(4, 'package-delete', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(5, 'user-list', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(6, 'user-create', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(7, 'user-edit', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(8, 'user-delete', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(9, 'role-list', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(10, 'role-create', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(11, 'role-edit', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(12, 'role-delete', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(13, 'permission-list', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(14, 'permission-create', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(15, 'permission-edit', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(16, 'permission-delete', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(17, 'category-list', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(18, 'category-create', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(19, 'category-edit', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(20, 'category-delete', 'web', NULL, '2024-07-05 21:59:27', '2024-07-05 21:59:27'),
(21, 'subcategory-list', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(22, 'subcategory-create', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(23, 'subcategory-edit', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(24, 'subcategory-delete', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(25, 'childcat-list', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(26, 'childcat-create', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(27, 'childcat-edit', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(28, 'childcat-delete', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(29, 'subchildcat-list', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(30, 'subchildcat-create', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(31, 'subchildcat-edit', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(32, 'subchildcat-delete', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(33, 'HR Admin', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(34, 'Security', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(35, 'Employee Info', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(36, 'Org Chart', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(37, 'Lifecycle', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(38, 'Leave', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(39, 'Attendance', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(40, 'Payroll', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(41, 'Claim', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(42, 'Reports', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(43, 'Report Viewer', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(44, 'Workforce', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(45, 'Recruitment', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(46, 'Performance', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(47, 'Learning', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(48, 'Probation', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(49, 'Request', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28'),
(50, 'Grievance', 'web', NULL, '2024-07-05 21:59:28', '2024-07-05 21:59:28');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Client', 'web', '2024-07-05 21:59:28', '2024-07-05 21:59:28', NULL),
(2, 'Employee', 'web', '2024-07-05 21:59:28', '2024-07-05 21:59:28', NULL),
(3, 'Admin', 'web', '2024-07-05 21:59:29', '2024-07-05 21:59:29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(5, 1),
(6, 1),
(7, 1),
(33, 1),
(34, 1),
(1, 3),
(2, 3),
(3, 3),
(4, 3),
(5, 3),
(6, 3),
(7, 3),
(8, 3),
(9, 3),
(10, 3),
(11, 3),
(12, 3),
(13, 3),
(14, 3),
(15, 3),
(16, 3),
(17, 3),
(18, 3),
(19, 3),
(20, 3),
(21, 3),
(22, 3),
(23, 3),
(24, 3),
(25, 3),
(26, 3),
(27, 3),
(28, 3),
(29, 3),
(30, 3),
(31, 3),
(32, 3),
(33, 3),
(34, 3),
(35, 3),
(36, 3),
(37, 3),
(38, 3),
(39, 3),
(40, 3),
(41, 3),
(42, 3),
(43, 3),
(44, 3),
(45, 3),
(46, 3),
(47, 3),
(48, 3),
(49, 3),
(50, 3);

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` bigint UNSIGNED NOT NULL,
  `country_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_code` varchar(3) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subcategories`
--

CREATE TABLE `subcategories` (
  `id` bigint UNSIGNED NOT NULL,
  `cat_id` bigint UNSIGNED NOT NULL,
  `sub_cat_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` smallint NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subchildcats`
--

CREATE TABLE `subchildcats` (
  `id` bigint UNSIGNED NOT NULL,
  `childcat_id` bigint UNSIGNED NOT NULL,
  `sub_child_cat_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` smallint NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `timezones`
--

CREATE TABLE `timezones` (
  `id` bigint UNSIGNED NOT NULL,
  `country_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` int NOT NULL DEFAULT '2' COMMENT '0=SuperAdmin, 1=Clients, 2=Employee',
  `client_id` bigint DEFAULT NULL,
  `child_client_id` bigint DEFAULT NULL,
  `package_id` bigint DEFAULT NULL,
  `business_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_mobile` bigint DEFAULT NULL,
  `registration_date` date DEFAULT NULL,
  `expire_date` date DEFAULT NULL,
  `status` int NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `type`, `client_id`, `child_client_id`, `package_id`, `business_name`, `client_address`, `client_mobile`, `registration_date`, `expire_date`, `status`, `deleted_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'admin@gmail.com', NULL, '$2y$10$foLv6MqkuPPt1oDHd1RUYeTl.VXl246WyV07pUUKX/2Adp8z0sP1m', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2024-07-05 21:59:29', '2024-07-05 21:59:29'),
(2, 'User', 'user@gmail.com', NULL, '$2y$10$umSm6N3WYQG2G./0ezZ36.LGeRrPRxjuumaOUytX9uX.L2i/DC7v.', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2024-07-05 21:59:29', '2024-07-05 21:59:29'),
(3, 'aa client', 'aa@gmail.com', NULL, '$2y$10$Dr8qffUBiNe4uwOwZg9tfuiKgPaahsBrat9186UudNeEjnz422OgO', 1, 1, 1988, 1, 'AA consulting', 'Dhaka', 6566546, '2024-07-06', '2025-07-06', 1, NULL, NULL, '2024-07-05 22:14:35', '2024-07-07 01:17:47'),
(4, 'Employee 01', 'imran@gmail.com', NULL, '$2y$10$OGVhpkdHok5uAEnzNgRq5e6AtJxw.yBnRiuI3RVGLZaBzmWt0MZQ2', 2, 3, 3320, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2024-07-06 00:14:18', '2024-07-07 01:13:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `childcats`
--
ALTER TABLE `childcats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `childcats_subcat_id_foreign` (`subcat_id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subcategories_cat_id_foreign` (`cat_id`);

--
-- Indexes for table `subchildcats`
--
ALTER TABLE `subchildcats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subchildcats_childcat_id_foreign` (`childcat_id`);

--
-- Indexes for table `timezones`
--
ALTER TABLE `timezones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `childcats`
--
ALTER TABLE `childcats`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `currencies`
--
ALTER TABLE `currencies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subchildcats`
--
ALTER TABLE `subchildcats`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `timezones`
--
ALTER TABLE `timezones`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `childcats`
--
ALTER TABLE `childcats`
  ADD CONSTRAINT `childcats_subcat_id_foreign` FOREIGN KEY (`subcat_id`) REFERENCES `subcategories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `subcategories`
--
ALTER TABLE `subcategories`
  ADD CONSTRAINT `subcategories_cat_id_foreign` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `subchildcats`
--
ALTER TABLE `subchildcats`
  ADD CONSTRAINT `subchildcats_childcat_id_foreign` FOREIGN KEY (`childcat_id`) REFERENCES `childcats` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
