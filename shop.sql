-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 10 2017 г., 16:52
-- Версия сервера: 5.7.16
-- Версия PHP: 5.6.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Обувь'),
(2, 'Матрешки'),
(3, 'Самовары'),
(4, 'Балалайки');

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` text,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `cost` decimal(10,2) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `cost`) VALUES
(1, 'Валенки', 'Описание валенки', 1, '1000.27'),
(3, 'matrioshka new', 'matrioshka new описание', 2, '1000.18'),
(5, 'Матрешка 3 вложения', 'Матрешка 3 вложения asd', 2, '602.10'),
(6, 'Матрешка с лидерами страны', 'Матрешка с изображениями лидеров страны, от Николая Второго до Путина', 2, '1200.00'),
(7, 'Медный самовар', 'Классический самовар', 3, '5000.00'),
(8, 'Расписной самовар', 'Расписан в стиле хохломской росписи. Термостойкая высокопрочная краска.', 3, '7000.00'),
(9, 'Лапти', 'Современные лапти из углеродного полимера', 1, '3200.00'),
(10, 'Титановый самовар', 'Прочный и легкий самовар с современным техничным дизайном', 3, '22000.00'),
(11, 'Вольфрамовый самовар', 'Спецразработка НАСА для чаепития на Меркурии', 3, '89000.14'),
(12, 'Электрический самовар', 'Самовар \"Электрический\", НПО \'Энергия-М\'', 3, '2500.00'),
(13, 'Электробалалайка Yamaha', 'Настоящее японское качество', 4, '24000.00'),
(14, 'Балалайка \"Мартын\"', 'Авторская балалайка ручной работы', 4, '16500.00');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
