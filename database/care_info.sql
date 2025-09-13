-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2025 at 10:56 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `care_info`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `doctor` varchar(100) DEFAULT NULL,
  `hospital` varchar(100) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `name`, `email`, `phone`, `doctor`, `hospital`, `date`, `time`) VALUES
(3, 'jeevan sai', 'jeevansai@gmail.com', '121212121', 'Dr. Priya Reddy', ' Sri Care', '2025-09-08', '11:45'),
(4, 'T VENKAT', 'venkatfreefire8@gmail.com', '08688218317', 'Naveen', 'Sri care Hospital', '2025-09-11', '11:15');

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `specialty` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `name`, `specialty`, `phone`, `email`, `location`, `education`) VALUES
(4, 'Dr. Kavitha Rao', 'Gynecology', '6543210987', 'kavitha.rao@example.com', 'Women\'s Health Clinic, Chennai', 'MD, Gynecology, Osmania Medical College'),
(5, 'Dr. Ramesh Gupta', 'Emergency Medicine', '5432109876', 'ramesh.gupta@example.com', 'Hyderabad General Hospital, Hyderabad', 'MD, Emergency Medicine, NIMS Hyderabad'),
(6, 'Dr. Sneha Patil', 'Oncology', '4321098765', 'sneha.patil@example.com', 'Banglore Specialty Clinic, Banglore', 'DM, Oncology, Tata Memorial Hospital'),
(7, 'DR JEEVAN SAI', 'CARDIOLOGY', '1234567890', 'jeevan@gmail.com', 'Narasaraopet', 'MBBS'),
(9, 'T VENKAT', 'CARDIOLOGY', '08688218317', 'venkatfreefire8@gmail.com', 'Narasaraopeta', 'MBBS'),
(10, 'GOWTHAM', 'ORTHOPEDICS', '123321231', 'gowtham@gmail.com', 'Narasaraopeta', 'MBBS'),
(11, 'sathvik', 'Gynecologist', '1234554321', 'satvik@gmail.com', 'Narasaraopeta', 'MBBS'),
(12, 'sathvik', 'Gynecologist', '1234554321', 'satvik@gmail.com', 'Narasaraopeta', 'MBBS'),
(14, 'f9isvj', 'Gynecologist', '09704692711', 'dklvwkfv@gmail.com', 'Narasaraopeta', 'MBBS'),
(15, 'Naveen', 'Gynecologist', '09704692711', 'dklvwkfv@gmail.com', 'Narasaraopeta', 'MBBS');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `created_at`) VALUES
(1, 'T VENKAT', 'venkatfreefire8@gmail.com', '$2b$10$PL1Q6IOjRfhc6SQUMgqTauxrOoNEXRMQjc9XZJsCPi75Cx/m9l3mC', '08688218317', '2025-09-12 05:32:31'),
(2, 'GOWTHAM', 'gowtham@gmail.com', '$2b$10$mx83Mkf9fbrwgz0/ibNNEu5VEIIYlJIwpr.6lk43xMnLsn9oINBK2', '8772342453', '2025-09-12 09:46:50'),
(3, 'NAVEEN', 'naveen@gmail.com', '$2b$10$OlzsfObue7mAj123Xi9VaeL.3A7WY9O21jCp/OQWJsRzEMyaYktrW', '5432234573', '2025-09-13 05:48:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
