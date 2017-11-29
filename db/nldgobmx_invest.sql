-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2017 a las 18:36:41
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nldgobmx_invest`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

CREATE TABLE `galeria` (
    `idgaleria` int(255) NOT NULL,
    `idusuario` int(255) NOT NULL,
    `ruta` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
    `fecha_captura` datetime NOT NULL,
    `activo` int(1) NOT NULL,
    `iddireccion` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `galeria`
--

INSERT INTO `galeria` (`idgaleria`, `idusuario`, `ruta`, `fecha_captura`, `activo`, `iddireccion`) VALUES
(2, 1, 'img/galeria/106044400459ea444c77234.jpg', '2017-10-20 13:45:32', 0, 1),
(3, 1, 'img/galeria/87849671659ee354400c04.jpg', '2017-10-23 13:30:28', 0, 2),
(4, 1, 'img/galeria/111954719259ee354415d11.png', '2017-10-23 13:30:28', 0, 3),
(5, 1, 'img/galeria/77776529559ee354e1a709.png', '2017-10-23 13:30:38', 0, 4),
(6, 1, 'img/galeria/53070432659ee354e25e73.jpg', '2017-10-23 13:30:38', 0, 5),
(7, 1, 'img/galeria/20046109259f0f0796ec26.jpg', '2017-10-25 15:13:45', 0, 1),
(8, 1, 'img/galeria/30160063359f0f08c30fb9.png', '2017-10-25 15:14:04', 0, 1),
(9, 1, 'img/galeria/834790759f369e65f320.png', '2017-10-27 12:16:22', 0, 1),
(10, 1, 'img/galeria/48514330059f36a5eacaa9.png', '2017-10-27 12:18:22', 0, 2),
(11, 1, 'img/galeria/7349869059f36a69a98bf.png', '2017-10-27 12:18:33', 0, 3),
(12, 1, 'img/galeria/24654154459f3703f2598e.png', '2017-10-27 12:43:27', 0, 4),
(13, 1, 'img/galeria/94542838659f372cadfc1c.png', '2017-10-27 12:54:18', 0, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
    `idnoticia` int(255) NOT NULL,
    `idusuario` int(255) NOT NULL,
    `titulo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
    `contenido` varchar(3000) COLLATE utf8_spanish_ci NOT NULL,
    `fecha_captura` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `fecha_noticia` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`idnoticia`, `idusuario`, `titulo`, `contenido`, `fecha_captura`, `fecha_noticia`, `activo`) VALUES
(12, 1, 'Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur sed lectus hendrerit faucibus arcu eget faucibus e', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lectus hendrerit, faucibus arcu eget, faucibus enim. Nullam tincidunt nunc ut velit viverra lobortis. Aliquam placerat magna vitae cursus fermentum. Duis semper molestie sem at auctor. Morbi in ornare lectus, at tincidunt lacus. Quisque id metus tempus, vulputate metus sit amet, fringilla tortor. Maecenas pharetra augue eros, sagittis posuere ipsum tempus elementum. Praesent tincidunt egestas quam, et molestie nisi finibus in. Cras ac libero lectus. Morbi a purus ac dolor maximus dapibus. Nullam ligula purus, mattis vitae justo non, sodales aliquet est. Nulla id tellus ut nibh ornare posuere nec eu felis.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin metus ipsum, varius quis ultricies non, mattis nec ligula. Vestibulum eget mi vel leo vulputate pulvinar. Pellentesque luctus viverra elit sed lacinia. Pellentesque id hendrerit mi, eget laoreet nisl. Etiam nec leo eget sapien sollicitudin vestibulum nec nec neque. Nulla fringilla consequat nisi quis lacinia. Nam pretium sodales commodo. Cras facilisis augue sit amet quam ultricies posuere.\r\n\r\nPellentesque bibendum ipsum ac nulla congue, sed fringilla urna convallis. Ut quam mauris, vulputate id pharetra at, commodo nec odio. Vestibulum semper turpis nulla, ac dictum sem blandit non. Maecenas bibendum dolor in enim tincidunt fermentum. Sed efficitur sodales sapien, ornare placerat ipsum gravida sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut finibus lectus a aliquet suscipit. Mauris rhoncus libero ut magna pulvinar mattis. Phasellus scelerisque urna quis nibh condimentum lacinia. Fusce lobortis, risus sit amet sodales rutrum, risus orci vestibulum massa, et rhoncus arcu purus vitae justo.\r\n\r\nSuspendisse consequat dolor non turpis vehicula lobortis. Proin convallis vestibulum dapibus. Praesent aliquet eros et dui semper, eget imperdiet nulla mattis. Cras sed erat eget purus blandit consectetur. Aliquam erat volutpat. Cras maximus tristique cursus. Suspendisse eget quam aliquet diam interdum finibus in non turpis. Cras finibus velit a nisl volutpat, nec ornare tortor rhoncus. Phasellus enim odio, dictum venenatis enim et, viverra mattis nisl. Maecenas molestie enim neque, in fermentum justo condimentum ac. Phasellus ultricies gravida sapien id pulvinar. Quisque ut dui feugiat metus lobortis hendrerit vel ac velit. Integer semper tempus tellus sit amet tincidunt. Donec orci mi, finibus at rhoncus vitae, ultrices ut mi.\r\n\r\nMaecenas convallis ut erat eu vehicula. Aliquam vel rhoncus tellus. Aenean vitae dui nisl. Ut vestibulum elementum lobortis. Morbi orci massa, luctus ac egestas quis, imperdiet in ante. Vestibulum eget cursus purus, sed maximus augue. Maecenas ac bibendum lacus.', '2017-05-25 23:31:48', '2017-05-26 04:05:38', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias_imagenes`
--

CREATE TABLE `noticias_imagenes` (
    `idnoticia_imagen` int(255) NOT NULL,
    `idnoticia` int(255) NOT NULL,
    `idusuario` int(255) NOT NULL,
    `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `ruta` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `noticias_imagenes`
--

INSERT INTO `noticias_imagenes` (`idnoticia_imagen`, `idnoticia`, `idusuario`, `fecha`, `ruta`) VALUES
(0, 12, 1, '2017-11-29 17:33:52', 'img/noticias/12/5146021395a1eef80f084d.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_usuarios`
--

CREATE TABLE `tipos_usuarios` (
    `idtipo_usuario` int(255) NOT NULL,
    `tipo_usuario` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
    `config` int(1) NOT NULL,
    `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipos_usuarios`
--

INSERT INTO `tipos_usuarios` (`idtipo_usuario`, `tipo_usuario`, `config`, `activo`) VALUES
(1, 'ADMINISTRADOR', 1, 1),
(2, 'MANAGER', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
    `idusuario` int(255) NOT NULL,
    `idtipo_usuario` int(255) NOT NULL,
    `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
    `correo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
    `password` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
    `ip` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
    `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `idtipo_usuario`, `nombre`, `correo`, `password`, `ip`, `activo`) VALUES
(1, 1, 'admin', 'admin@hotmail.com', '21232f297a57a5a743894a0e4a801fc3', '', 1),
(2, 2, '1', '1@1.com', 'c4ca4238a0b923820dcc509a6f75849b', '', 1),
(3, 2, 'manager', '1@11.com', 'c4ca4238a0b923820dcc509a6f75849b', '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videos`
--

CREATE TABLE `videos` (
    `idvideo` int(255) NOT NULL,
    `idusuario` int(255) NOT NULL,
    `titulo` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
    `url` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
    `fecha_captura` datetime NOT NULL,
    `principal` int(1) NOT NULL,
    `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `videos`
--

INSERT INTO `videos` (`idvideo`, `idusuario`, `titulo`, `url`, `fecha_captura`, `principal`, `activo`) VALUES
(1, 1, 'httpswwwfacebookcom146120188911322videos626269670896369', 'https://www.facebook.com/146120188911322/videos/626269670896369/', '2017-05-26 11:05:49', 0, 0),
(2, 1, 'httpswwwfacebookcom146120188911322videos626269670896369', 'https://www.facebook.com/146120188911322/videos/626269670896369/', '2017-05-26 11:05:43', 0, 0),
(3, 1, 'httpswwwfacebookcom146120188911322videos626269670896369', 'https://www.facebook.com/146120188911322/videos/626269670896369/', '2017-05-26 11:05:46', 0, 0),
(4, 1, 'video', 'https://www.facebook.com/146120188911322/videos/626269670896369/', '2017-05-31 10:05:30', 0, 0),
(5, 1, 'video', 'https://www.facebook.com/146120188911322/videos/626269670896369/', '2017-05-31 10:05:35', 1, 1),
(6, 1, 'sdss', 'https://www.facebook.com/146120188911322/videos/626269670896369/', '2017-05-31 10:05:41', 0, 0),
(7, 1, 'cc', 'https://www.facebook.com/146120188911322/videos/626269670896369/', '2017-05-31 10:05:45', 0, 1),
(8, 1, 'en vivo', 'https://www.facebook.com/elshowdepiolin/videos/10155033671529442/', '2017-06-12 09:06:37', 0, 0),
(9, 1, 'video envivo 2', 'https://www.facebook.com/kardenaz.dz/videos/10212722825887644/', '2017-06-12 10:06:52', 0, 0),
(10, 1, 'Naturaleza y TradiciÃ³n', 'https://www.facebook.com/146120188911322/videos/626269670896369/', '2017-10-25 12:10:49', 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `galeria`
--
ALTER TABLE `galeria`
  ADD PRIMARY KEY (`idgaleria`),
  ADD KEY `idusuario` (`idusuario`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`idnoticia`),
  ADD KEY `idusuario` (`idusuario`);

--
-- Indices de la tabla `noticias_imagenes`
--
ALTER TABLE `noticias_imagenes`
  ADD PRIMARY KEY (`idnoticia_imagen`),
  ADD KEY `idnoticia` (`idnoticia`),
  ADD KEY `idusuario` (`idusuario`);

--
-- Indices de la tabla `tipos_usuarios`
--
ALTER TABLE `tipos_usuarios`
  ADD PRIMARY KEY (`idtipo_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`),
  ADD KEY `idtipo_usuario` (`idtipo_usuario`);

--
-- Indices de la tabla `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`idvideo`),
  ADD KEY `idusuario` (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `galeria`
--
ALTER TABLE `galeria`
  MODIFY `idgaleria` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `idnoticia` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `tipos_usuarios`
--
ALTER TABLE `tipos_usuarios`
  MODIFY `idtipo_usuario` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `videos`
--
ALTER TABLE `videos`
  MODIFY `idvideo` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `galeria`
--
ALTER TABLE `galeria`
  ADD CONSTRAINT `galeria_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`);

--
-- Filtros para la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `noticias_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`idtipo_usuario`) REFERENCES `tipos_usuarios` (`idtipo_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `videos_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
