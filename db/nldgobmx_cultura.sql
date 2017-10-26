-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-10-2017 a las 20:46:18
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nldgobmx_cultura`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `convocatorias`
--

CREATE TABLE `convocatorias` (
    `idconvocatoria` int(255) NOT NULL,
    `idusuario` int(255) NOT NULL,
    `ruta` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
    `fecha_captura` datetime NOT NULL,
    `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `convocatorias`
--

INSERT INTO `convocatorias` (`idconvocatoria`, `idusuario`, `ruta`, `fecha_captura`, `activo`) VALUES
(41, 1, 'img/convocatorias/118109909959ea43e25c6c8.jpg', '2017-10-20 13:43:46', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
    `idevento` int(255) NOT NULL,
    `idusuario` int(255) NOT NULL,
    `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
    `tipo_evento` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
    `lugar` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
    `detalles` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
    `latitud` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
    `longitud` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
    `fecha_captura` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `fecha_evento` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `principal` int(1) NOT NULL,
    `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`idevento`, `idusuario`, `nombre`, `tipo_evento`, `lugar`, `detalles`, `latitud`, `longitud`, `fecha_captura`, `fecha_evento`, `principal`, `activo`) VALUES
(6, 1, 'BALLET LA BELLA DURMIENTE', 'Publico', 'Teatro principal del Centro Cultural', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.', '27.469992029422', '-99.507592023583', '2017-05-08 21:05:47', '2017-05-08 22:05:38', 0, 0),
(7, 1, 'MUESTRA GASTRONOMICA', 'Publico', 'Cueva leonistica', 'Lorem ipsum dolor sit amet consectetuer adipiscing elit Aenean commodo ligula eget dolor Aenean massa Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus Donec quam felis ultricies nec pellentesque eu pretium', '27.470658236875', '-99.510955587029', '2017-05-08 22:05:19', '2017-05-09 00:05:16', 0, 1),
(8, 1, 'CARRERA 10K', 'Privado', 'Eva samano-catedral del espiritu', 'La carrera se llevara acabo a las 7:00 am, en la calle eva samano, enfrente de la catedral del espiritu el dia ', '27.469934780653', '-99.507307782769', '2017-05-08 22:05:19', '2017-05-03 12:05:00', 0, 1),
(9, 1, 'obra musical lo siento mi amor', 'Publico', 'Teatro principal del centro cultural', 'Va aser al as 7 pm organizado por la direccion de comercio y turismo', '27.485507078369', '-99.529072567821', '2017-05-26 20:05:20', '2017-06-25 12:06:00', 0, 1),
(10, 1, 'torneo de golf', 'Privado', 'Club campestre', 'Se llevara a cabo a las 8:00 am', '27.47078020878955', '-99.51963856816292', '2017-05-26 21:05:35', '2017-05-27 02:05:36', 0, 1),
(11, 1, 'xcvxcv', 'Publico', 'xcv', 'cxvcxv', '27.4548277916609', '-99.4855134934187', '2017-05-30 21:05:42', '2017-05-30 22:05:25', 0, 1),
(12, 1, 'cxv', 'Publico', 'cxv', 'xcvxv', '27.474862481507213', '-99.53233413398266', '2017-05-30 21:05:56', '2017-05-30 22:05:43', 0, 1),
(13, 1, 'xcv', 'Publico', 'cxb', 'cxv', '27.46943978155436', '-99.52353648841381', '2017-05-30 21:05:08', '2017-05-30 22:05:57', 0, 1),
(14, 1, 'Honores por el aniversario de fundacion de la ciudad', 'Publico', 'xcvbzx', 'bxzcbcvb', '27.471990906957306', '-99.51349429786205', '2017-05-30 21:05:22', '2017-05-30 23:05:11', 0, 1),
(15, 1, 'Paseando por la paseo', 'Publico', 'xcb', 'xcb', '27.469923073394348', '-99.52933743596077', '2017-05-30 21:05:43', '2017-05-31 00:05:23', 0, 1),
(16, 1, 'Concierto por aniversario 150 aÃ±os de Nuevo Laredo', 'Publico', 'xcb', 'xcb', '27.468190627062732', '-99.5119996368885', '2017-05-31 18:05:25', '2017-05-31 21:05:13', 0, 1),
(17, 1, 'Ballet bella durmiente', 'Publico', 'xcb', 'xcb', '27.47054101742417', '-99.51775029301642', '2017-05-31 18:05:40', '2017-05-31 21:05:27', 0, 1),
(18, 1, 'Feria Expo mex Nuevo Laredo', 'Publico', 'xcvbvb', 'vbbv', '27.45451366828467', '-99.44337062537669', '2017-05-31 18:05:58', '2017-05-31 21:05:43', 1, 1),
(19, 1, 'Carrera 10 km', 'Publico', 'xcvbvc', 'cvbv', '27.472866652807', '-99.516455456614', '2017-06-06 19:06:21', '2017-06-07 00:06:09', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos_imagenes`
--

CREATE TABLE `eventos_imagenes` (
    `idevento_imagen` int(255) NOT NULL,
    `idevento` int(255) NOT NULL,
    `idusuario` int(255) NOT NULL,
    `fecha` datetime NOT NULL,
    `ruta` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `eventos_imagenes`
--

INSERT INTO `eventos_imagenes` (`idevento_imagen`, `idevento`, `idusuario`, `fecha`, `ruta`) VALUES
(1, 9, 1, '2017-05-26 13:53:20', 'img/eventos/9/1002342566592887b0e5d28.jpeg'),
(2, 9, 1, '2017-05-26 13:53:20', 'img/eventos/9/143695319592887b0e6d5a.jpeg'),
(5, 9, 0, '2017-05-26 14:01:15', 'img/eventos/9/128001255928898b041e9.jpg'),
(6, 9, 0, '2017-05-26 14:01:19', 'img/eventos/9/9224252625928898fb50a2.jpg'),
(7, 9, 0, '2017-05-26 14:02:09', 'img/eventos/9/436873842592889c137bb4.jpg'),
(8, 9, 0, '2017-05-26 14:02:17', 'img/eventos/9/645608639592889c9799dd.jpeg'),
(9, 10, 1, '2017-05-26 14:06:35', 'img/eventos/10/120855444059288acb08ee0.jpg'),
(10, 7, 1, '2017-05-29 08:29:28', 'img/eventos/7/678555048592c3048ad966.jpeg'),
(11, 7, 1, '2017-05-29 08:29:28', 'img/eventos/7/88673331592c3048ae4fb.jpg'),
(12, 6, 1, '2017-05-29 08:34:46', 'img/eventos/6/575634620592c318665c16.jpg'),
(13, 8, 1, '2017-05-29 08:34:54', 'img/eventos/8/533969285592c318ea2541.jpeg'),
(14, 11, 1, '2017-05-30 14:53:42', 'img/eventos/11/1116393538592ddbd680278.jpg'),
(15, 12, 1, '2017-05-30 14:53:56', 'img/eventos/12/683675098592ddbe4c0767.jpg'),
(16, 13, 1, '2017-05-30 14:54:08', 'img/eventos/13/760735563592ddbf092557.jpg'),
(17, 14, 1, '2017-05-30 14:54:22', 'img/eventos/14/251142168592ddbfe847fa.jpg'),
(18, 15, 1, '2017-05-30 14:54:43', 'img/eventos/15/915004899592ddc13c6a06.jpg'),
(19, 16, 1, '2017-05-31 11:10:25', 'img/eventos/16/35135416592ef901c88fb.jpg'),
(20, 17, 1, '2017-05-31 11:10:40', 'img/eventos/17/735506331592ef91096935.jpg'),
(21, 18, 1, '2017-05-31 11:10:58', 'img/eventos/18/692505330592ef9226d9d7.jpg'),
(22, 18, 1, '2017-05-31 13:42:48', 'img/eventos/18/545470847592f1cb8b015c.jpg'),
(23, 18, 1, '2017-05-31 13:42:48', 'img/eventos/18/380479087592f1cb8b0ce9.jpg'),
(24, 18, 1, '2017-05-31 13:42:48', 'img/eventos/18/765633002592f1cb8b18c0.jpg'),
(25, 18, 1, '2017-05-31 13:42:48', 'img/eventos/18/101102439592f1cb8b2405.jpg'),
(26, 18, 1, '2017-05-31 13:42:48', 'img/eventos/18/1201282485592f1cb8b2e38.jpg'),
(27, 17, 1, '2017-05-31 13:43:01', 'img/eventos/17/514490833592f1cc521cfd.jpeg'),
(28, 17, 1, '2017-05-31 13:43:01', 'img/eventos/17/859871606592f1cc5228a0.jpg'),
(29, 17, 1, '2017-05-31 13:43:01', 'img/eventos/17/419139175592f1cc52344b.jpg'),
(30, 16, 1, '2017-05-31 13:43:09', 'img/eventos/16/78581638592f1ccd70581.jpeg'),
(31, 16, 1, '2017-05-31 13:43:09', 'img/eventos/16/95240352592f1ccd7111f.jpg'),
(32, 16, 1, '2017-05-31 13:43:09', 'img/eventos/16/220384766592f1ccd71f14.jpg'),
(33, 15, 1, '2017-05-31 13:43:25', 'img/eventos/15/1000747188592f1cdd7bb3f.jpeg'),
(34, 15, 1, '2017-05-31 13:43:25', 'img/eventos/15/938601652592f1cdd7c695.jpg'),
(35, 15, 1, '2017-05-31 13:43:25', 'img/eventos/15/604425627592f1cdd7d18e.jpg'),
(37, 19, 1, '2017-06-08 15:18:30', 'img/eventos/19/4546085085939bf2630da5.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

CREATE TABLE `galeria` (
    `idgaleria` int(255) NOT NULL,
    `idusuario` int(255) NOT NULL,
    `ruta` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
    `fecha_captura` datetime NOT NULL,
    `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `galeria`
--

INSERT INTO `galeria` (`idgaleria`, `idusuario`, `ruta`, `fecha_captura`, `activo`) VALUES
(2, 1, 'img/galeria/106044400459ea444c77234.jpg', '2017-10-20 13:45:32', 0);

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
(12, 1, 'Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur sed lectus hendrerit faucibus arcu eget faucibus e', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lectus hendrerit, faucibus arcu eget, faucibus enim. Nullam tincidunt nunc ut velit viverra lobortis. Aliquam placerat magna vitae cursus fermentum. Duis semper molestie sem at auctor. Morbi in ornare lectus, at tincidunt lacus. Quisque id metus tempus, vulputate metus sit amet, fringilla tortor. Maecenas pharetra augue eros, sagittis posuere ipsum tempus elementum. Praesent tincidunt egestas quam, et molestie nisi finibus in. Cras ac libero lectus. Morbi a purus ac dolor maximus dapibus. Nullam ligula purus, mattis vitae justo non, sodales aliquet est. Nulla id tellus ut nibh ornare posuere nec eu felis.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin metus ipsum, varius quis ultricies non, mattis nec ligula. Vestibulum eget mi vel leo vulputate pulvinar. Pellentesque luctus viverra elit sed lacinia. Pellentesque id hendrerit mi, eget laoreet nisl. Etiam nec leo eget sapien sollicitudin vestibulum nec nec neque. Nulla fringilla consequat nisi quis lacinia. Nam pretium sodales commodo. Cras facilisis augue sit amet quam ultricies posuere.\r\n\r\nPellentesque bibendum ipsum ac nulla congue, sed fringilla urna convallis. Ut quam mauris, vulputate id pharetra at, commodo nec odio. Vestibulum semper turpis nulla, ac dictum sem blandit non. Maecenas bibendum dolor in enim tincidunt fermentum. Sed efficitur sodales sapien, ornare placerat ipsum gravida sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut finibus lectus a aliquet suscipit. Mauris rhoncus libero ut magna pulvinar mattis. Phasellus scelerisque urna quis nibh condimentum lacinia. Fusce lobortis, risus sit amet sodales rutrum, risus orci vestibulum massa, et rhoncus arcu purus vitae justo.\r\n\r\nSuspendisse consequat dolor non turpis vehicula lobortis. Proin convallis vestibulum dapibus. Praesent aliquet eros et dui semper, eget imperdiet nulla mattis. Cras sed erat eget purus blandit consectetur. Aliquam erat volutpat. Cras maximus tristique cursus. Suspendisse eget quam aliquet diam interdum finibus in non turpis. Cras finibus velit a nisl volutpat, nec ornare tortor rhoncus. Phasellus enim odio, dictum venenatis enim et, viverra mattis nisl. Maecenas molestie enim neque, in fermentum justo condimentum ac. Phasellus ultricies gravida sapien id pulvinar. Quisque ut dui feugiat metus lobortis hendrerit vel ac velit. Integer semper tempus tellus sit amet tincidunt. Donec orci mi, finibus at rhoncus vitae, ultrices ut mi.\r\n\r\nMaecenas convallis ut erat eu vehicula. Aliquam vel rhoncus tellus. Aenean vitae dui nisl. Ut vestibulum elementum lobortis. Morbi orci massa, luctus ac egestas quis, imperdiet in ante. Vestibulum eget cursus purus, sed maximus augue. Maecenas ac bibendum lacus.', '2017-05-25 23:31:48', '2017-05-26 04:05:38', 1),
(13, 1, 'Esta es una noticia hecha por Dulce', 'lalalalal lalalalla lalalal allal la la lalalala lalala lalalal looo looo lololo loollalakla vhgzxfcghxvzbc jbvcxvzb hjnhbn mnhjmm jmnmn zxcnnmbcbnv\r\nnb xc nkmn mjn k knmmn xzvcbnm nx k,jzxv  zklxjv,m v lkjvnm ncv kv mcxvjkxcvh cv kzxhvm cvkzxhcvm cvhjkc vnmbdnv mcmbcvnbc vncvb ncvbn bcxjnv \r\nbxzvbc bncxv nhvxcb hncv nnvn vhnc hnc nxvzcc vzxbv zvb bxcz vzxbncv nzxcvc nhvbdnszx v', '2017-06-09 16:23:31', '2017-06-09 17:06:13', 1),
(14, 1, 'Se gana el ingeniero Agustin 40 tacos', 'Se gana el ingeniero Agustin 40 tacos por ser el cliente numero 10,000', '2017-06-09 19:04:08', '2017-06-09 20:06:25', 1),
(15, 1, 'Cardenas y Diego gastan dinero en la inscripcion del gym y no van', 'Cardenas y Diego gastan dinero en la inscripcion del gym y no van\r\nO.o', '2017-06-09 19:04:52', '2017-06-09 20:06:09', 1),
(16, 1, 'Dulce tarda 2 dias en aprender a armar la cara blanca del cubo', 'Dulce tarda 2 dias en aprender a armar la cara blanca del cubo', '2017-06-09 19:05:43', '2017-06-09 20:06:53', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `slider`
--

CREATE TABLE `slider` (
    `idslider` int(255) NOT NULL,
    `idusuario` int(255) NOT NULL,
    `ruta` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
    `fecha_captura` datetime NOT NULL,
    `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `slider`
--

INSERT INTO `slider` (`idslider`, `idusuario`, `ruta`, `fecha_captura`, `activo`) VALUES
(40, 1, 'img/slider/28609207659ea3f7c40498.png', '2017-10-20 13:25:00', 0);

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
(1, 1, 'admin', 'diego@correo.com', '21232f297a57a5a743894a0e4a801fc3', '', 1),
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
(9, 1, 'video envivo 2', 'https://www.facebook.com/kardenaz.dz/videos/10212722825887644/', '2017-06-12 10:06:52', 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `convocatorias`
--
ALTER TABLE `convocatorias`
  ADD PRIMARY KEY (`idconvocatoria`),
  ADD KEY `idusuario` (`idusuario`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`idevento`),
  ADD KEY `idusuario` (`idusuario`);

--
-- Indices de la tabla `eventos_imagenes`
--
ALTER TABLE `eventos_imagenes`
  ADD PRIMARY KEY (`idevento_imagen`);

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
-- Indices de la tabla `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`idslider`),
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
-- AUTO_INCREMENT de la tabla `convocatorias`
--
ALTER TABLE `convocatorias`
  MODIFY `idconvocatoria` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `idevento` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT de la tabla `eventos_imagenes`
--
ALTER TABLE `eventos_imagenes`
  MODIFY `idevento_imagen` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT de la tabla `galeria`
--
ALTER TABLE `galeria`
  MODIFY `idgaleria` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `idnoticia` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `slider`
--
ALTER TABLE `slider`
  MODIFY `idslider` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
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
  MODIFY `idvideo` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`) ON DELETE CASCADE ON UPDATE CASCADE;

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
