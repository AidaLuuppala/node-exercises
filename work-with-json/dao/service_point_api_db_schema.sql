CREATE DATABASE service_point_api_db CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE `office` (
	`id` varchar(255) NOT NULL,
	`name_sv` varchar(255),
	`name_fi` varchar(255),
	`description_sv` TEXT,
	`description_fi` TEXT,
	`street_sv` varchar(255),
	`street_fi` varchar(255),
	`street_number` varchar(5),
	`postal_code` varchar(5),
	`post_office_sv` varchar(255),
	`post_office_fi` varchar(255),
	`latitude` DECIMAL(10, 8),
	`longitude` DECIMAL(11, 8),
	`municipality_sv` varchar(255),
	`municipality_fi` varchar(255),
	`type` varchar(255),
	`accessibility_fi` varchar(255),
	`accessibility_sv` varchar(255),
	`accessibility_en` varchar(255),
	`open_hours` TEXT,
	`additional_information_fi` varchar(255),
	`additional_information_sv` varchar(255),
	PRIMARY KEY (`id`)
);