-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-04-2024 a las 01:15:58
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alumnos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `clave` varchar(20) NOT NULL,
  `matricula` varchar(20) NOT NULL,
  `paterno` varchar(80) NOT NULL,
  `materno` varchar(80) DEFAULT NULL,
  `nombre` varchar(80) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `student`
--

INSERT INTO `student` (`id`, `clave`, `matricula`, `paterno`, `materno`, `nombre`, `password`) VALUES
(2, 'CBSIKGIS8033', '51000125525', 'Guzman', 'Eustebio', 'Ramiro', 'administrador134'),
(3, 'VASICATM8493NDF', '20032121000', 'Ramses', 'Argelino', 'Pancracio', ''),
(4, 'VADIDFNOSDSF', '45126520411', 'Floripondio', 'Quito', 'Esteban', ''),
(5, 'HSDJFSDJFSFD', '5410032655', 'Pancracio', 'Maynez', 'Esustebio', ''),
(6, 'KJHFSDFSDFS', '515541000895', 'Enriquez', 'Si', 'Carlos', ''),
(8, 'KJDFJNSDNFSDF', '54215224223', 'Casialgo', 'Nuncanada', 'Sefiro', ''),
(23, 'VASSDNSDLFSDF', '541252332332', 'Clauds', 'Claudia', 'Claudio', ''),
(24, 'VASISLDKFSDUDD', '54112220550', 'Salvador', 'Enriquez', 'Manzanero', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
