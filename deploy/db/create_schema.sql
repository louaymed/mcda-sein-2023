-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2023 at 09:58 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mcda`
--

-- --------------------------------------------------------

--
-- Table structure for table `traitement`
--

CREATE TABLE `traitement` (
  `m_osseuse` varchar(9) DEFAULT NULL,
  `her2` varchar(14) DEFAULT NULL,
  `rh` varchar(7) DEFAULT NULL,
  `crise_viscerale` varchar(15) DEFAULT NULL,
  `spectre_brca` varchar(33) DEFAULT NULL,
  `menopause_output` varchar(16) DEFAULT NULL,
  `traitement_l1` varchar(133) DEFAULT NULL,
  `id_traitement_l1` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `traitement`
--

INSERT INTO `traitement` (`m_osseuse`, `her2`, `rh`, `crise_viscerale`, `spectre_brca`, `menopause_output`, `traitement_l1`, `id_traitement_l1`) VALUES
('m_osseuse', 'her2', 'rh', 'crise_viscerale', 'spectre_brca', 'menopause_output', 'traitement_l1', 'id_traitement_l1'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Capecitabine', '1'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 175', '201'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 80', '202'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Docetaxel', '203'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Doxorubicine 75', '204'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Doxorubicine 20', '205'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Epirubicine', '206'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 175 + Carboplatine', '8'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 100 + Carboplatine', '9'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Docetaxel 80 + Carboplatine', '10'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Docetaxel 35 + Carboplatine', '11'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Eribuline', '12'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 7', '13'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 21', '14'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 28', '15'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Capecitabine', '1'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 175', '201'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 80', '202'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Docetaxel', '203'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Doxorubicine 75', '204'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Doxorubicine 20', '205'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Epirubicine', '206'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 175 + Carboplatine', '8'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 100 + Carboplatine', '9'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Docetaxel 80 + Carboplatine', '10'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Docetaxel 35 + Carboplatine', '11'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Eribuline', '12'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 7', '13'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 21', '14'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 28', '15'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Capecitabine', '1'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 175', '201'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 80', '202'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Docetaxel', '203'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Doxorubicine 75', '204'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Doxorubicine 20', '205'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Epirubicine', '206'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Eribuline', '12'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 7', '13'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 21', '14'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 28', '15'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Capecitabine', '1'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 175', '201'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 80', '202'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Docetaxel', '203'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Doxorubicine 75', '204'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Doxorubicine 20', '205'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Epirubicine', '206'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Eribuline', '12'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 7', '13'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 21', '14'),
('Non', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 28', '15'),
('Non', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + palbociclib + gosereline', '16'),
('Non', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + palbociclib + leuproreline', '17'),
('Non', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + ribociclib + gosereline', '18'),
('Non', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + ribociclib + leuproreline', '19'),
('Non', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + abemaciclib + gosereline', '20'),
('Non', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + abemaciclib + leuproreline', '21'),
('Non', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + palbociclib', '22'),
('Non', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + ribociclib', '23'),
('Non', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + abemaciclib', '24'),
('Non', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + palbociclib + gosereline', '16'),
('Non', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + palbociclib + leuproreline', '17'),
('Non', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + ribociclib + gosereline', '18'),
('Non', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + ribociclib + leuproreline', '19'),
('Non', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + abemaciclib + gosereline', '20'),
('Non', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + abemaciclib + leuproreline', '21'),
('Non', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + palbociclib', '22'),
('Non', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + ribociclib', '23'),
('Non', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + abemaciclib', '24'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Capecitabine + Acide zoledronique', '1'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 175 + Acide zoledronique', '801'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 80 + Acide zoledronique', '802'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Docetaxel + Acide zoledronique', '803'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Doxorubicine 75 + Acide zoledronique', '804'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Doxorubicine 20', '805'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Epirubicine + Acide zoledronique', '806'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 175 + Carboplatine + Acide zoledronique', '8'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 100 + Carboplatine + Acide zoledronique', '9'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Docetaxel 80 + Carboplatine + Acide zoledronique', '10'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Docetaxel 35 + Carboplatine + Acide zoledronique', '11'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Eribuline + Acide zoledronique', '12'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 7 + Acide zoledronique', '13'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 21 + Acide zoledronique', '14'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 28 + Acide zoledronique', '15'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Capecitabine + Acide zoledronique', '1'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 175 + Acide zoledronique', '801'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 80 + Acide zoledronique', '802'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Docetaxel + Acide zoledronique', '803'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Doxorubicine 75 + Acide zoledronique', '804'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Doxorubicine 20', '805'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Epirubicine + Acide zoledronique', '806'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 175 + Carboplatine + Acide zoledronique', '8'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 100 + Carboplatine + Acide zoledronique', '9'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Docetaxel 80 + Carboplatine + Acide zoledronique', '10'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Docetaxel 35 + Carboplatine + Acide zoledronique', '11'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Eribuline + Acide zoledronique', '12'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 7 + Acide zoledronique', '13'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 21 + Acide zoledronique', '14'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 28 + Acide zoledronique', '15'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Capecitabine + Acide zoledronique', '1'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 175 + Acide zoledronique', '801'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Paclitaxel 80 + Acide zoledronique', '802'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Docetaxel + Acide zoledronique', '803'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Doxorubicine 75 + Acide zoledronique', '804'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Doxorubicine 20', '805'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Epirubicine + Acide zoledronique', '806'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Eribuline + Acide zoledronique', '12'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 7 + Acide zoledronique', '13'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 21 + Acide zoledronique', '14'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Non', 'Navelbine 28 + Acide zoledronique', '15'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Capecitabine + Acide zoledronique', '1'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 175 + Acide zoledronique', '801'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Paclitaxel 80 + Acide zoledronique', '802'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Docetaxel + Acide zoledronique', '803'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Doxorubicine 75 + Acide zoledronique', '804'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Doxorubicine 20', '805'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Epirubicine + Acide zoledronique', '806'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Eribuline + Acide zoledronique', '12'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 7 + Acide zoledronique', '13'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 21 + Acide zoledronique', '14'),
('Oui', 'Non surexprime', 'Positif', 'Oui', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'Navelbine 28 + Acide zoledronique', '15'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + palbociclib + gosereline + Acide zoledronique', '16'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + palbociclib + leuproreline + Acide zoledronique', '17'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + ribociclib + gosereline + Acide zoledronique', '18'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + ribociclib + leuproreline + Acide zoledronique', '19'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + abemaciclib + gosereline + Acide zoledronique', '20'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + abemaciclib + leuproreline + Acide zoledronique', '21'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + palbociclib + Acide zoledronique', '22'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + ribociclib + Acide zoledronique', '23'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + abemaciclib + Acide zoledronique', '24'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + palbociclib + gosereline + Acide zoledronique', '16'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + palbociclib + leuproreline + Acide zoledronique', '17'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + ribociclib + gosereline + Acide zoledronique', '18'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + ribociclib + leuproreline + Acide zoledronique', '19'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + abemaciclib + gosereline + Acide zoledronique', '20'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Non', 'inhibiteur de l aromatase + abemaciclib + leuproreline + Acide zoledronique', '21'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + palbociclib + Acide zoledronique', '22'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + ribociclib + Acide zoledronique', '23'),
('Oui', 'Non surexprime', 'Positif', 'Non', 'pas mutation germinale BRCA1 ou 2', 'Oui', 'inhibiteur de l aromatase + abemaciclib + Acide zoledronique', '24');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
