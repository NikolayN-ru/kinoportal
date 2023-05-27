--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-05-27 10:49:16

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3393 (class 1262 OID 25737)
-- Name: movie; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE movie WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc;


ALTER DATABASE movie OWNER TO postgres;

\connect movie

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 27731)
-- Name: comment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comment (
    id integer NOT NULL,
    text character varying NOT NULL,
    "reviewId" integer
);


ALTER TABLE public.comment OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 27730)
-- Name: comment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comment_id_seq OWNER TO postgres;

--
-- TOC entry 3394 (class 0 OID 0)
-- Dependencies: 214
-- Name: comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comment_id_seq OWNED BY public.comment.id;


--
-- TOC entry 221 (class 1259 OID 27760)
-- Name: country; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.country (
    id integer NOT NULL,
    country character varying NOT NULL
);


ALTER TABLE public.country OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 27759)
-- Name: country_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.country_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.country_id_seq OWNER TO postgres;

--
-- TOC entry 3395 (class 0 OID 0)
-- Dependencies: 220
-- Name: country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.country_id_seq OWNED BY public.country.id;


--
-- TOC entry 219 (class 1259 OID 27749)
-- Name: genre; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.genre (
    id integer NOT NULL,
    genre character varying NOT NULL
);


ALTER TABLE public.genre OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 27748)
-- Name: genre_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.genre_id_seq OWNER TO postgres;

--
-- TOC entry 3396 (class 0 OID 0)
-- Dependencies: 218
-- Name: genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.genre_id_seq OWNED BY public.genre.id;


--
-- TOC entry 223 (class 1259 OID 27771)
-- Name: movie; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movie (
    id integer NOT NULL,
    title character varying NOT NULL,
    "titleEng" character varying NOT NULL,
    year integer NOT NULL,
    quality character varying NOT NULL,
    "imgVideo" character varying NOT NULL,
    rating real NOT NULL,
    votes integer NOT NULL,
    description character varying NOT NULL,
    "time" integer
);


ALTER TABLE public.movie OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 27786)
-- Name: movie_countries_country; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movie_countries_country (
    "movieId" integer NOT NULL,
    "countryId" integer NOT NULL
);


ALTER TABLE public.movie_countries_country OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 27779)
-- Name: movie_genres_genre; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movie_genres_genre (
    "movieId" integer NOT NULL,
    "genreId" integer NOT NULL
);


ALTER TABLE public.movie_genres_genre OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 27770)
-- Name: movie_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movie_id_seq OWNER TO postgres;

--
-- TOC entry 3397 (class 0 OID 0)
-- Dependencies: 222
-- Name: movie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movie_id_seq OWNED BY public.movie.id;


--
-- TOC entry 217 (class 1259 OID 27740)
-- Name: review; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.review (
    id integer NOT NULL,
    title character varying NOT NULL,
    "userName" character varying NOT NULL,
    data integer NOT NULL,
    "like" integer NOT NULL,
    description character varying NOT NULL,
    "movieId" integer
);


ALTER TABLE public.review OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 27739)
-- Name: review_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.review_id_seq OWNER TO postgres;

--
-- TOC entry 3398 (class 0 OID 0)
-- Dependencies: 216
-- Name: review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.review_id_seq OWNED BY public.review.id;


--
-- TOC entry 3201 (class 2604 OID 27734)
-- Name: comment id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment ALTER COLUMN id SET DEFAULT nextval('public.comment_id_seq'::regclass);


--
-- TOC entry 3204 (class 2604 OID 27763)
-- Name: country id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country ALTER COLUMN id SET DEFAULT nextval('public.country_id_seq'::regclass);


--
-- TOC entry 3203 (class 2604 OID 27752)
-- Name: genre id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genre ALTER COLUMN id SET DEFAULT nextval('public.genre_id_seq'::regclass);


--
-- TOC entry 3205 (class 2604 OID 27774)
-- Name: movie id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie ALTER COLUMN id SET DEFAULT nextval('public.movie_id_seq'::regclass);


--
-- TOC entry 3202 (class 2604 OID 27743)
-- Name: review id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.review ALTER COLUMN id SET DEFAULT nextval('public.review_id_seq'::regclass);


--
-- TOC entry 3377 (class 0 OID 27731)
-- Dependencies: 215
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3383 (class 0 OID 27760)
-- Dependencies: 221
-- Data for Name: country; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.country (id, country) VALUES (1, 'США');
INSERT INTO public.country (id, country) VALUES (2, 'Австралия');
INSERT INTO public.country (id, country) VALUES (3, 'Канада');
INSERT INTO public.country (id, country) VALUES (4, 'Германия');
INSERT INTO public.country (id, country) VALUES (5, 'Швейцария');
INSERT INTO public.country (id, country) VALUES (6, 'Новая Зеландия');
INSERT INTO public.country (id, country) VALUES (7, 'Великобритания');
INSERT INTO public.country (id, country) VALUES (8, 'Франция');
INSERT INTO public.country (id, country) VALUES (9, 'Италия');
INSERT INTO public.country (id, country) VALUES (10, 'Япония');
INSERT INTO public.country (id, country) VALUES (11, 'Польша');
INSERT INTO public.country (id, country) VALUES (12, 'Германия (ФРГ)');
INSERT INTO public.country (id, country) VALUES (13, 'Тайвань');
INSERT INTO public.country (id, country) VALUES (14, 'Гонконг');
INSERT INTO public.country (id, country) VALUES (15, 'Китай');
INSERT INTO public.country (id, country) VALUES (16, 'Мексика');
INSERT INTO public.country (id, country) VALUES (17, 'Швеция');
INSERT INTO public.country (id, country) VALUES (18, 'Бразилия');
INSERT INTO public.country (id, country) VALUES (19, 'Испания');
INSERT INTO public.country (id, country) VALUES (20, 'Дания');
INSERT INTO public.country (id, country) VALUES (21, 'Мальта');
INSERT INTO public.country (id, country) VALUES (22, 'Марокко');
INSERT INTO public.country (id, country) VALUES (23, 'Индия');
INSERT INTO public.country (id, country) VALUES (24, 'ЮАР');
INSERT INTO public.country (id, country) VALUES (25, 'Ирландия');
INSERT INTO public.country (id, country) VALUES (26, 'Чехия');


--
-- TOC entry 3381 (class 0 OID 27749)
-- Dependencies: 219
-- Data for Name: genre; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.genre (id, genre) VALUES (1, 'мелодрама');
INSERT INTO public.genre (id, genre) VALUES (2, 'комедия');
INSERT INTO public.genre (id, genre) VALUES (3, 'приключения');
INSERT INTO public.genre (id, genre) VALUES (4, 'семейный');
INSERT INTO public.genre (id, genre) VALUES (5, 'музыка');
INSERT INTO public.genre (id, genre) VALUES (6, 'фантастика');
INSERT INTO public.genre (id, genre) VALUES (7, 'боевик');
INSERT INTO public.genre (id, genre) VALUES (8, 'драма');
INSERT INTO public.genre (id, genre) VALUES (9, 'детектив');
INSERT INTO public.genre (id, genre) VALUES (10, 'триллер');
INSERT INTO public.genre (id, genre) VALUES (11, 'криминал');
INSERT INTO public.genre (id, genre) VALUES (12, 'фэнтези');
INSERT INTO public.genre (id, genre) VALUES (13, 'спорт');
INSERT INTO public.genre (id, genre) VALUES (14, 'биография');
INSERT INTO public.genre (id, genre) VALUES (15, 'фильм-нуар');
INSERT INTO public.genre (id, genre) VALUES (16, 'военный');
INSERT INTO public.genre (id, genre) VALUES (17, 'история');
INSERT INTO public.genre (id, genre) VALUES (18, 'мюзикл');
INSERT INTO public.genre (id, genre) VALUES (19, 'аниме');
INSERT INTO public.genre (id, genre) VALUES (20, 'мультфильм');
INSERT INTO public.genre (id, genre) VALUES (21, 'вестерн');
INSERT INTO public.genre (id, genre) VALUES (22, 'ужасы');
INSERT INTO public.genre (id, genre) VALUES (23, 'документальный');


--
-- TOC entry 3385 (class 0 OID 27771)
-- Dependencies: 223
-- Data for Name: movie; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (2, 'Матрица', 'The Matrix', 1999, 'fullHD', '34cbc13d-9ccc-4fad-885b-7d945c3a9050.jpg', 8.5, 681558, 'Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.', 170);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (4, 'Управление гневом', 'Anger Management', 2003, 'fullHD', '41a6a6bb-9b01-4df5-b56d-2da90beb3996.jpg', 7.1, 101562, 'Скромному клерку отчаянно не везет. Парня по обвинению в нападении на бортпроводницу приговаривают к лечению у психиатра. Но верно говорят, что большинство психиатров сами немного безумны. Или сильно не в себе...', 118);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (16, 'Матрица: Революция', 'The Matrix Revolutions', 2003, 'fullHD', '1f975d52-c43b-428d-aba7-c6547b4fc3be.jpg', 7.6, 227190, 'Пока армия машин пытается уничтожить Зион, его жители из последних сил держат оборону.', 171);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (113, 'Бен-Гур', 'Ben-Hur', 1959, 'fullHD', '8ad110c1-99f8-42e4-a009-2f90a45f198e.jpg', 8.1, 19851, 'Действие фильма начинается в Палестине в 26 году от Рождества Христова. Два друга, иудей Бен Гур и римлянин Мессала, встречаются после долгой разлуки взрослыми людьми и понимают, что дружба уже невозможна...', 130);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (193, '8 с половиной', '8½', 1963, 'fullHD', '4cf46068-eea9-419e-9829-3df3657d336f.jpg', 8, 29464, 'Измотанный режиссёр погружается в водоворот воспоминаний и фантазий, где невозможно отличить вымысел от реальности.', 149);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (187, 'Лора', 'Laura', 1944, 'fullHD', '7e0810f1-4846-428d-a482-e296472eb13f.jpg', 7.4, 3748, 'Детектив МакФерсон ведет расследование убийства красавицы Лоры...', 132);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (56, '2001 год: Космическая одиссея', '2001: A Space Odyssey', 1968, 'fullHD', '9b0f8289-6b91-4045-9768-32a85ff9abcc.jpg', 7.9, 105887, 'Экипаж космического корабля «Дискавери» — капитаны Дэйв Боумэн, Фрэнк Пул и их бортовой компьютер HAL 9000 — должны исследовать район галактики и понять, почему инопланетяне следят за Землей. На этом пути их ждет множество неожиданных открытий.', 135);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (221, 'Страсти Жанны д''Арк', 'La passion de Jeanne d''Arc', 1928, 'fullHD', '6ecb1ec0-2e12-48b2-acad-eb633d82f29b.jpg', 8, 10410, '1431 год. Жанна д`Арк предстает перед судом по обвинению в ереси.', 169);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (26, 'Славные парни', 'Goodfellas', 1990, 'fullHD', '047acba1-39bf-4857-862e-6c16921205e5.jpg', 8.1, 188209, 'История о Генри Хилле — начинающем гангстере, занимающемся грабежами вместе с подельниками Джими Конвеем и Томми Де Вито, которые с легкостью убивают любого, кто встаёт у них на пути.', 184);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (45, 'Мост через реку Квай', 'The Bridge on the River Kwai', 1957, 'fullHD', 'cfc80f01-0f51-465f-a42e-a65a145992f3.jpg', 7.8, 8459, 'Захваченные в плен японцами британские солдаты и их командир полковник Николсон вынуждены строить железнодорожный мост через реку Квай в Бирме. Несмотря на свирепый характер полковника Сайто, Николсон проявляет настоящее мужество.Тем временем командование назначает группу коммандос для уничтожения этого стратегически важного объекта.', 169);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (1, 'Лиззи Магуайр', 'The Lizzie McGuire Movie', 2003, 'fullHD', '69e41c06-0121-4aeb-9dd9-99614a0fa13b.jpg', 6.3, 10862, 'Тринадцатилетняя школьница Лиззи Магуайер и ее приятели Гордо, Кейт и Эсан собираются оттянуться по полной программе во время их поездки с классом в Италию.Но там случается весьма неожиданное происшествие: девочку ошибочно принимают за итальянскую поп-звезду Изабеллу, да к тому же девушка влюбляется в бывшего дружка Изабеллы Паоло. Когда родители Лизи обо всем узнают, они вместе с ее братом Мэттом срочно вылетают в Италию.Но Лиззи уже не та закомплексованная девочка-подросток, кем была раньше, она до такой степени вжилась в роль певицы, что и на самом деле стала самой настоящей звездой.', 109);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (3, 'Клад', 'Holes', 2003, 'fullHD', 'a24b6576-eeb5-4cbb-b0bf-429860368744.jpg', 7.2, 8793, 'Стэнли арестован по ложному обвинению в краже кроссовок и отправлен в трудовой лагерь, расположенный в техасской пустыне. Воспитатели «закаляют характер» подростков странным наказанием. Ребята копают ямы в иссушенной земле, но не знают, что их на самом деле используют для раскопок таинственного клада. Однако Стэнли удается раскрыть загадочную связь между сокровищами и проклятием, тяготеющим долгие годы над его семьей…', 160);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (5, 'Афера', 'Confidence', 2003, 'fullHD', '8ec369ca-ebe7-452f-bedf-3e17900cbcc4.jpg', 7, 6855, 'Джейк Вига – хитроумный и обаятельный мошенник. Последняя афера Джейка привела к тому, что его дорожки пересеклись с мафией – при помощи своей команды он лишил нескольких тысяч долларов Лайонела Долби, – счетовода эксцентричного мафиозного босса Уинстона Кинга по прозвищу «Король».Мафия шутить не любит, а любит выбивать долги из тех, кто пытается ее надуть. Чтобы сохранить жизнь и расквитаться с долгами, Джейку приходится устроить новую, еще более изощренную аферу – сложнейшую схему, в которой требуется «творческий подход к бухгалтерии».Неожиданные помехи появляются одна за другой: палки в колеса Джейку вставляют его старый враг, агент ФБР Гюнтер Бутан, Трэвис, правая рука «Короля» и хитроумная карманщица Лили на которую Джейк успел положить глаз...', 181);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (6, 'Телефонная будка', 'Phone Booth', 2002, 'fullHD', '1eb8a7cf-8410-403f-810b-ea44712191eb.jpg', 7.6, 166876, 'Один телефонный звонок может изменить всю жизнь человека или даже оборвать ее. Герой фильма Стью Шеферд становится пленником телефонной будки.Что вы сделаете, если услышите, как в телефонной будке зазвонил телефон? Скорее всего, инстинктивно поднимете трубку, хотя прекрасно знаете, что кто-то просто ошибся номером. Вот и Стью кажется, что на звонок надо обязательно ответить, а в результате он оказывается втянутым в чудовищную игру. «Только положи трубку, и ты – труп», – говорит ему невидимый собеседник.', 111);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (7, 'Разыскиваются в Малибу', 'Malibu''s Most Wanted', 2003, 'fullHD', '140f74e5-bd17-4872-800f-89fe3ebccf63.jpg', 5.7, 1014, 'Не стоит ненавидеть его за то, кем он является. Или кем он не является. Все, чем хочет заниматься Брэд - или Би-рэд - разъезжать со своими дружками по Малибу и вести себя, как самый крутой черный рэппер в округе.Но все вокруг знают, что паренек, лихо читающий рэп, родом из респектабельного квартала Малибу. И отец Брэда, Билл Глакман, кандидат в губернаторы, серьезно боится, что увлечение Би-рэда «черной» культурой может разнести в пух и прах его предвыборную кампанию.', 197);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (8, 'Рекрут', 'The Recruit', 2003, 'fullHD', 'a09c8c49-ec5a-45be-8d4f-e12faddc0ec1.jpg', 7.3, 66638, 'Джеймс Клэйтон - студент и опытный хакер. Он привлекает внимание спецслужб, и его вербуют в ЦРУ, упоминая таинственное исчезновение его отца в 90-х. Джеймс обучается у Уолтера Бёрка. Он отлично сдает все тесты, кроме последнего. Так он становится агентом без прикрытия и получает задание: найти «крота», который похищает опасный вирус из Лэнгли.', 126);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (9, 'Тупой и еще тупее тупого: Когда Гарри встретил Ллойда', 'Dumb and Dumberer: When Harry Met Lloyd', 2003, 'fullHD', 'ed8e45a0-3333-4e4a-bb20-20c1cde49f15.jpg', 4.3, 14511, 'Как же встретились два героя-недоумка Гарри и Ллойд, известные по фильму «Тупой и еще тупее»? Оба несколько лет не ходили в школу, а учились на дому. Пришло время отправляться в школу, и прямо на улице Гарри и Ллойд столкнулись лбами...А в это время школьный директор Коллинз и мисс Хеллер, буфетчица-официантка школьной столовой, задумали провернуть аферу - получить благотворительную премию в сто тысяч долларов за организацию класса для умственно отсталых. Злоумышленники решили создать липовый класс. Два кандидата в спецкласс нашлись сразу - Гарри и Ллойд, а они разыскали остальных...', 154);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (10, 'Эквилибриум', 'Equilibrium', 2002, 'fullHD', 'a533e78e-0592-4c0a-aa0d-d4c56ee466a9.jpg', 7.9, 300090, 'В будущем люди лишены возможности выражать эмоции. Это цена, которую человечество платит за устранение из своей жизни войны. Теперь книги, искусство и музыка находятся вне закона, а любое чувство — преступление, наказуемое смертью.Для приведения в жизнь существующего правила используется принудительное применение лекарства прозиум. Правительственный агент Джон Престон борется с теми, кто нарушает правила. В один прекрасный момент он забывает принять очередную дозу лекарства, и с ним происходит духовное преображение, что приводит его к конфликту не только с режимом, но и с самим собой.', 176);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (11, 'Дежурный папа', 'Daddy Day Care', 2003, 'fullHD', '8688ddb6-fbec-4b2c-a5a2-b9c8e7d0dc59.jpg', 6.8, 28279, 'Чарли и Фила увольняют с работы в крупной корпорации. Теперь им самим придётся сидеть со своими сыновьями, так как оплачивать счета дорогостоящего детского центра уже не на что. Промучившись пару недель со своими отпрысками, папаши так увлекаются этим делом, что решают поставить дело на деловые рельсы и открывают новый центр дневного пребывания для детей. Чарли и Филл находят всё новые и новые нетрадиционные и забавные способы воспитательного воздействия на малышей, и центр «Дежурный папа» становится всё более популярным. Почувствовав жёсткое соперничество со стороны усатых няней, директриса дорогого детского центра решает выжить конкурентов-новичков из бизнеса.', 193);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (12, 'Пуленепробиваемый', 'Bulletproof Monk', 2003, 'fullHD', '358d0390-695a-4b27-b7af-9db79b8e9b00.jpg', 6.7, 19657, 'Монах - мастер боевых искусств, который охраняет могущественный древний свиток - таинственный артефакт, содержащий ключ к безграничной власти. Монаху нужно найти следующего хранителя свитка, и поиски приводят его в Америку. Согласно древнему пророчеству и к изумлению Монаха его преемником оказывается обаятельный хулиган по имени Кар.Пока Монах обучает Кара, как выполнять свою работу, этому невероятному дуэту приходится защищать свиток от одержимого жаждой власти человека, который гоняется за ним 60 лет.В суматохе невероятной акробатики, схваток с применением боевых искусств и остроумных шуток эта комическая странная парочка должна сделать всё, чтобы свиток не попал в руки злодея.', 152);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (13, 'Властелин колец: Две крепости', 'The Lord of the Rings: The Two Towers', 2002, 'fullHD', 'd7cbc75f-01ea-4232-8133-d9a5829cb9a6.jpg', 8.6, 544644, 'Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены довериться Голлуму, который взялся провести их к вратам Мордора. Громадная армия Сарумана приближается: члены братства и их союзники готовы принять бой. Битва за Средиземье продолжается.', 110);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (14, 'Играй, как Бекхэм', 'Bend It Like Beckham', 2002, 'fullHD', 'b7956f0f-72d6-455b-8c26-8fd6d69ad6f4.jpg', 6.7, 18353, 'Джесс только 18, но она твердо знает, что сделает ее счастливой: футбольная карьера, такая же, как у знаменитого игрока «Манчестер Юнайтед» Дэвида Бекхема. Пока она гоняет мяч в лондонском парке, доказывая соседским мальчишкам, что девушки играют в футбол не хуже, ее родители и многочисленные родственники, как и положено традиционной индийской семье, подыскивают для нее достойного мужа и строят планы о ее будущей карьере юриста.Однажды, во время очередной разминки, Джесс знакомится с Джулз и та приглашает ее на тренировку в женскую футбольную секцию. С замиранием сердца она следует за своей новой приятельницей, и мечта становится реальностью: Джесс принимают в настоящую футбольную команду. В довершение ко всему она влюбляется в своего тренера Джо.Понимая, что семья никогда не примирится с ее выбором, Джесс наслаждается своим кратковременным счастьем и готовится отстаивать свои права до конца...', 142);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (15, 'Цыпочка', 'The Hot Chick', 2002, 'fullHD', '09cd67c4-2e1e-43ec-a0bb-f1f9f906a16a.jpg', 6.9, 71942, 'Популярная, но неприятная в общении старшеклассница Джессика однажды утром просыпается в теле 30-летнего мужчины с не самой привлекательной внешностью. Девушка отправляется на поиски своего тела, и это приключение помогает ей увидеть себя со стороны и понять, насколько поверхностной и недалёкой она была.', 143);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (17, 'Любовь с уведомлением', 'Two Weeks Notice', 2002, 'fullHD', '20182fec-a1c4-4b5d-be8f-d9f23f2fdfdc.jpg', 7.1, 32441, 'Джордж Уэйд и шага не может сделать без Люси Келсон, работающей главным консультантом в его корпорации. Однако обращается он с ней скорее как с няней, а не как с блестящим юристом, окончившим Гарвард. По прошествии года все это надоедает Люси, и она решает уволиться. Джордж соглашается ее отпустить, но с одним условием — она должна найти себе достойную замену...', 160);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (18, 'Ограбление по-итальянски', 'The Italian Job', 2003, 'fullHD', 'b654cf02-a387-433c-b136-e89da0d6021b.jpg', 7.6, 129297, 'Джон Бриджер всегда умел спланировать идеальное ограбление. Вместе со своей командой опытных бандитов он провернул не одно дело, но теперь решил уйти на покой. Впереди у Бриджера последнее задание: кража золотых слитков, в которой принимают участие инсайдер Стив, водитель Роб, взрыватель Левое ухо, технарь Лайл и Чарли - верный друг Бриджера и второй «планировщик» в их команде. Ограбление, изящное и быстрое, было разыграно как по нотам, но после его завершения веселье преступников было омрачено предательством...', 103);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (19, 'Звездный путь: Возмездие', 'Star Trek: Nemesis', 2002, 'fullHD', '802a9ded-9f39-4b01-9b31-b3b4df50a09f.jpg', 6.7, 5711, 'После свадьбы командира Уильяма Райкера и советника Дианы Трой экипаж корабля «Энтерпрайз» обнаруживает позитронный сигнал на одной из планет около нейтральной зоны, где они находят B-4 — менее совершенный, чем Дейта, прототип андроида, созданного доктором Сунгом.Эта загадка остается неразгаданной, так как в то же время адмирал Джейнвей приказывает «Энтерпрайзу» отправиться к Ромулу, где сенат был свергнут в результате государственного переворота Шинзоном и его последователями. По прибытии на Ромул «Энтерпрайз» обнаруживает не только самый мощный из всех встреченных ими кораблей, но и страшную тайну, касающуюся нового лидера Ромуланской империи, который планирует использовать смертельное оружие для уничтожения всего живого на главной планете Федерации — Земле.', 114);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (20, 'Гарри Поттер и узник Азкабана', 'Harry Potter and the Prisoner of Azkaban', 2004, 'fullHD', '6e4bcd0e-f193-4768-b772-b4321242b9e9.jpg', 8.2, 607646, 'В третьей части истории о юном волшебнике полюбившиеся всем герои — Гарри Поттер, Рон и Гермиона — возвращаются уже на третий курс школы чародейства и волшебства Хогвартс. На этот раз они должны раскрыть тайну узника, сбежавшего из зловещей тюрьмы Азкабан, чье пребывание на воле создает для Гарри смертельную опасность...', 200);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (21, 'Поймай меня, если сможешь', 'Catch Me If You Can', 2002, 'fullHD', '272f015e-5abc-4ae2-8a1e-9152a2a977dd.jpg', 8.5, 672138, 'Фрэнк Эбегнейл успел поработать врачом, адвокатом и пилотом на пассажирской авиалинии – и все это до достижения полного совершеннолетия в 21 год. Мастер в обмане и жульничестве, он также обладал искусством подделки документов, что в конечном счете принесло ему миллионы долларов, которые он получил по фальшивым чекам.Агент ФБР Карл Хэнрэтти отдал бы все, чтобы схватить Фрэнка и привлечь к ответственности за свои деяния, но Фрэнк всегда опережает его на шаг, заставляя продолжать погоню.', 193);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (22, 'Крестный отец 2', 'The Godfather: Part II', 1974, 'fullHD', '8782cb09-a11f-47e0-9808-89fef5344e5c.jpg', 8.5, 198272, 'Для дона Корлеоне и его сына не существует моральных преград на пути к достижению целей. Они превращают мафию, построенную по патриархальным сицилийским законам, в весьма прагматичную, жесткую корпорацию, плавно интегрируя её в большой бизнес Америки.', 171);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (23, 'Властелин колец: Братство Кольца', 'The Lord of the Rings: The Fellowship of the Ring', 2001, 'fullHD', 'ea424d8e-db1c-4a6a-8a5e-ce3a5bdf028c.jpg', 8.6, 617556, 'Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.', 126);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (24, 'Семь самураев', 'Shichinin no samurai', 1954, 'fullHD', '5073f5b1-1927-482c-96c1-44b042318637.jpg', 8.2, 47553, 'Япония, XVI век. В стране полыхает гражданская война, повсюду орудуют банды разбойников и мародеров. Бедные крестьяне нанимают для защиты деревни семерых самураев, которые немного сплачивают раздробленных и малодушных селян в процессе подготовки и укрепления деревни.', 101);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (25, 'Мементо', 'Memento', 2000, 'fullHD', '1d1cf941-5c7d-4e17-b800-569f2a59afb6.jpg', 7.9, 240955, 'Леонард Шелби изысканно и дорого одет, ездит на новеньком «Ягуаре», но проживает в дешевых мотелях. Его цель в жизни — найти убийцу жены. Его проблема — редкая форма амнезии, потеря короткой памяти, помня все до убийства, он не помнит, что было пятнадцать минут назад.', 113);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (27, 'Красота по-американски', 'American Beauty', 1999, 'fullHD', '28c4dd72-cd6b-4164-8385-867f214f656c.jpg', 8, 232969, 'Лестер Бернэм переживает кризис среднего возраста. Его не уважают и не ценят на работе, а от счастливой семьи осталась лишь видимость. У жены Кэролайн страстный роман с коллегой по работе, а угрюмая дочь-подросток Джейн увлечена соседским парнем, побывавшим в психиатрической больнице.Терзаемый душевными муками Лестер впадает в депрессию. Но неожиданно для себя влюбляется в одноклассницу дочери Анджелу, и эта страсть дает Лестеру мощный жизненный импульс. Он ощущает прилив сил и желаний и готов снова радоваться красоте.', 122);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (28, 'Головокружение', 'Vertigo', 1958, 'fullHD', '3e12496a-f6cf-40fd-894b-d61bf5cebab0.jpg', 7.9, 47505, 'Скотти Фергюсон - отставной сыщик, которого не назовешь баловнем судьбы: одинокий, оставшийся за бортом своей профессии, да еще и страдающий патологическим страхом высоты. Бывший коллега Гейвин Элстер просит его последить за своей женой Мэделин, одержимой идеей самоубийства.', 143);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (29, 'Сансет бульвар', 'Sunset Blvd.', 1950, 'fullHD', '2dd1bc55-4245-46ec-9bfc-8ef68e2ee426.jpg', 8, 21537, 'Молодой сценарист Джо Гиллис сидит на мели, его преследуют кредиторы, ему не на что поесть, ему кажется, что жизнь кончилась. Машина, на которой он отправляется бездумно и бесцельно неизвестно куда, вдруг из-за лопнувшей шины резко виляет в сторону и влетает во двор особняка знаменитой в прошлом и увядающей в настоящем кинозвезды Нормы Десмонд.', 122);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (30, 'Апокалипсис сегодня', 'Apocalypse Now', 1979, 'fullHD', '8afa7938-ca60-4203-8dd7-08926905d52f.jpg', 8.1, 120634, 'Во время Вьетнамской войны капитан Уиллард отправляется вверх по реке в Камбоджу со спецзаданием: найти и убить сумасшедшего полковника Курца, создавшего в отдалённом районе нечто вроде собственного культа. По пути капитан становится свидетелем безумия и ужасов войны.', 103);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (31, 'Пианист', 'The Pianist', 2002, 'fullHD', 'f2a0f8b5-7e4c-4b85-9499-06da456d2424.jpg', 8.5, 340148, 'Фильм снят по автобиографии Владислава Шпильмана, одного из лучших пианистов Польши 30-х годов прошлого века. Главный герой фильма — Владек — занимается искусством до тех пор, пока территорию Польши не занимают нацисты. Жизнь всех евреев меняется: их помещают в Варшавское гетто, запрещают работать, унижают, заставляют носить отличительные повязки, а через некоторое время отправляют в концлагерь.', 188);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (32, 'В джазе только девушки', 'Some Like It Hot', 1959, 'fullHD', 'e3cad527-8561-451c-8da2-948dd9cb9efe.jpg', 8.5, 301674, 'Когда чикагские музыканты Джо и Джерри случайно становятся свидетелями бандитской перестрелки, они в срочном порядке смываются на поезде во Флориду, прикинувшись женщинами. Теперь они — Джозефина и Дафна, новенькие и хорошенькие инструменталистки женского джаз-бэнда.До поры до времени их маскировка срабатывает. Но вскоре любвеобильная солистка влюбляется в «переодетого» мужчиной Джозефину, престарелый миллионер подкатывает к Дафне, а босс мафии, разгадав тайну маскарада, решает срочно разделаться со свидетелями.', 103);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (33, 'Убить пересмешника', 'To Kill a Mockingbird', 1962, 'fullHD', 'cd33a3bf-f40a-40d2-ac74-abf7869a7133.jpg', 8, 40917, 'Юрист из Алабамы в одиночку воспитывает двоих детей. В обстановке экономической депрессии, преисполненной фанатизма и ненависти он должен защищать в суде афроамериканца, ложно обвиненного в изнасиловании.', 177);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (34, 'Таксист', 'Taxi Driver', 1976, 'fullHD', '5553c64c-8e98-4ebb-9d85-6d3c01d81fb2.jpg', 7.8, 169662, 'Тусклый свет слепых фонарей, скелеты фабричных труб, задыхающихся в собственном дыму. Вавилонские башни небоскребов, все это — ад Нового времени, Нью-Йорк.Ветеран вьетнамской войны Трэвис Бикл ведет свое одинокое такси по ночным улицам бесконечного города, и перед ним разворачивается мрачная панорама человеческих грехов. Как ветхозаветный пророк, он надеется, что однажды небеса пошлют на землю спасительный дождь, который очистит Нью-Йорк от вековой грязи.А когда умирает надежда, остается только ненависть. Огненный ливень обрушится на головы грешников. Таксист позаботится об этом.', 176);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (35, 'Третий человек', 'The Third Man', 1949, 'fullHD', '221130db-91ab-4bd1-a209-b28fb3ca7dd9.jpg', 7.6, 8892, 'Холли Мартинс, автор бульварных романов, в надежде получить работу приезжает в послевоенную Вену по приглашению старинного приятеля Гарри Лайма. Увы, буквально накануне тот погиб в результате несчастного случая.По мнению полицейского Кэллоуэя, Лайм был темной личностью, рэкетиром и спекулянтом. Мартинс решает провести собственное расследование, чтобы снять с друга обвинения в преступлениях, которые, как он уверен, тот не совершал.Более того, Мартинс уверен, что его друг был убит, а его убийца где-то рядом...', 128);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (36, 'Тропы славы', 'Paths of Glory', 1957, 'fullHD', '4c33be32-995e-4d8a-8243-d425d68a353d.jpg', 8.1, 17284, 'Действие киноромана развертывается в 1916 году на Западном фронте. Полковник Дэкс командует пехотным полком французской армии. Уже два года союзники пытаются переломить ход войны с немцами. Начальник корпуса генерал Брулард приказывает дивизионному генералу Миро атаковать неприступную вражескую позицию, прозванную Муравьиным холмом.Провал операции был очевиден изначально, но когда атака закончилась полной неудачей, генерал приказал судить и расстрелять за трусость троих человек. Полковник Дэкс тщетно пытался защитить солдат, выбранных произвольно. Они отдали свои жизни, чтобы прикрыть глупость и амбиции начальства…', 141);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (37, 'Бойцовский клуб', 'Fight Club', 1999, 'fullHD', '3a2b95b4-845d-420a-a164-faf3e934e9a6.jpg', 8.7, 836479, 'Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить, — саморазрушение.Проходит немного времени, и вот уже новые друзья лупят друг друга почем зря на стоянке перед баром, и очищающий мордобой доставляет им высшее блаженство. Приобщая других мужчин к простым радостям физической жестокости, они основывают тайный Бойцовский клуб, который начинает пользоваться невероятной популярностью.', 120);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (38, 'Подводная лодка', 'Das Boot', 1981, 'fullHD', '80a00ea2-bccd-4a22-b08c-e58b92aed229.jpg', 8.1, 24215, 'Осень 1941 года. Немецкая подводная лодка отправляется в Атлантический океан - место противостояния германского и британского флотов. Жизнь по строгому распорядку, учебные тревоги, воспоминания о семьях и любимых девушках, солёные мужские шуточки. Скоро всё это закончится. Потому что впереди – ад и никакой надежды на спасение.', 161);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (39, 'Секреты Лос-Анджелеса', 'L.A. Confidential', 1997, 'fullHD', '659d718e-612f-4c74-bcd4-2c003ccbb5f3.jpg', 7.9, 98640, 'Бад Уайт и Эд Эксли работают в полиции Лос-Анджелеса. Они настолько разные, что порой ненавидят друг друга. Но их объединяет общее дело — расследование массового убийства. Оба пришли в полицию, чтобы бороться со злом, и оба — по личным причинам.', 128);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (40, 'Двойная страховка', 'Double Indemnity', 1944, 'fullHD', 'f1705944-702d-488c-ba8f-f3286de67787.jpg', 8, 12454, 'Сластолюбивый страховой агент Уолтер Нефф отправляется продлить полис на машину некоему мистеру Дитрихсону. В его доме он встречается с миссис Дитрихсон и мгновенно воспламеняется. Красотка делает Уолтеру предложение, от которого он не может отказаться.', 188);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (41, 'Китайский квартал', 'Chinatown', 1974, 'fullHD', 'b42ed8d8-e0a3-4a59-9a64-d32080379e94.jpg', 7.7, 33115, 'Частный детектив Гиттес принимает предложение загадочной богатой красавицы заняться расследованием обстоятельств тайного романа ее мужа-инженера. Взявшись за дело, детектив оказывается в центре скандалов, беспредела коррупции и скрытых махинаций, правда о которых всплывет однажды ночью вместе с телом несчастного инженера.', 101);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (42, 'Мальтийский сокол', 'The Maltese Falcon', 1941, 'fullHD', '28fffa29-4be3-4ee4-81d9-55789256e71b.jpg', 7.7, 12568, 'Частный детектив Сэм Спэйд начинает смертельную охоту за таинственно исчезнувшей бесценной статуэткой «мальтийского сокола».', 119);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (43, 'Реквием по мечте', 'Requiem for a Dream', 2000, 'fullHD', '011239fe-933f-4721-af83-c3858948a7fc.jpg', 8, 345965, 'Каждый стремится к своей заветной мечте. Сара Голдфарб мечтала сняться в известном телешоу, ее сын Гарольд с другом Тайроном — сказочно разбогатеть, подруга Гарольда Мэрион грезила о собственном модном магазине, но на их пути были всевозможные препятствия. Все они выбирают неочевидные пути достижения своих целей, и мечты по-прежнему остаются недостижимыми, а жизни героев рушатся безвозвратно.', 100);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (44, 'Поющие под дождем', 'Singin'' in the Rain', 1951, 'fullHD', 'a407d4d9-155c-4e51-9c35-486362e11bfb.jpg', 8, 27942, 'Основа этого легендарного фильма – дюжина старых песен, написанных для различных бродвейских шоу. Дон Локвуд – популярная звезда немого кино вспоминает о том, как он пришел к славе… но вдруг счастье покидает его – наступила эра звукового кино. Нужно осваивать новые горизонты.', 100);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (55, 'Волшебник страны Оз', 'The Wizard of Oz', 1939, 'fullHD', '36949df4-e789-40b1-b4c6-52243fbd4b4e.jpg', 7.6, 15914, 'Усаживайтесь поудобнее и приготовьтесь отправиться в долгое путешествие. Поднявшись выше радуги, вы окажетесь на дороге из желтого кирпича. Дорога проведет вас через заколдованные леса, царства злых ведьм и добрых фей в Изумрудный Город в далекой стране Оз. В мир, где любая мечта становится реальностью.', 156);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (46, 'Унесённые призраками', 'Sen to Chihiro no kamikakushi', 2001, 'fullHD', '9241ac4c-4a17-4069-86fa-48b26e8c0b30.jpg', 8.5, 517720, 'Тихиро с мамой и папой переезжает в новый дом. Заблудившись по дороге, они оказываются в странном пустынном городе, где их ждет великолепный пир. Родители с жадностью набрасываются на еду и к ужасу девочки превращаются в свиней, став пленниками злой колдуньи Юбабы. Теперь, оказавшись одна среди волшебных существ и загадочных видений, Тихиро должна придумать, как избавить своих родителей от чар коварной старухи.', 144);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (47, 'Спасти рядового Райана', 'Saving Private Ryan', 1998, 'fullHD', 'db785fbe-e9f5-4661-b07b-7d5bccb99afa.jpg', 8.2, 290502, 'Вторая мировая. Капитан Джон Миллер получает тяжелое задание. Вместе с отрядом из восьми человек он должен отправиться в тыл врага на поиски рядового Джеймса Райана, три родных брата которого почти одновременно погибли на полях сражений.Командование приняло решение демобилизовать Райана и отправить его на родину к безутешной матери. Но чтобы найти и спасти солдата, крошечному отряду придется пройти через все круги ада.', 137);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (48, 'Всё о Еве', 'All About Eve', 1950, 'fullHD', '739ad685-dd2a-4fef-a247-92dc22443de7.jpg', 8, 13695, 'Стареющая звезда Бродвея Марго Ченнинг имела все: успех, друзей, молодого любовника. Скромная и трудолюбивая Ева становится ее помощницей, выполняющей все желания хозяйки. Быстрее всех понимает, что Евой движет желание стать «новой Марго Ченнинг», циничный театральный критик Аддисон Де Витт.Пресыщенный жизнью и презирающий окружающую его благопристойность, он решает помочь молодой карьеристке. Она становится его благодарной ученицей и упорно, не гнушаясь ничем, идет к вершинам славы, предавая окружающих ее людей... ', 192);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (49, 'М убийца', 'M - Eine Stadt sucht einen Mörder', 1931, 'fullHD', '2f995b41-632b-40fe-baf5-ccc718be219c.jpg', 7.9, 13960, 'Маньяк-убийца наводит ужас на жителей Города. Маленькие девочки не успевают домой к обеду и не возвращаются вовсе. Полиция сбилась с ног в поисках преступника, однако все усилия тщетны. Обеспокоенный активностью полицейских преступный мир Города сам объявляет охоту на маньяка.', 200);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (50, 'Бешеный бык', 'Raging Bull', 1980, 'fullHD', '31489327-7be8-4741-8f2c-99768f17b630.jpg', 7.8, 33442, 'Джейк ЛаМотта, получивший прозвище Бронксский Бык, - боксер. И все его психологические и сексуальные комплексы яростно извергаются на боксерском ринге. Под горячую руку ему попадается родной брат, ставший жертвой навязчивой паранойи и ревности Джейка, а также пятнадцатилетняя девочка, которой суждено было стать самой главной наградой Джейка... и преследующим его наваждением.', 158);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (51, 'Монти Пайтон и Священный Грааль', 'Monty Python and the Holy Grail', 1975, 'fullHD', 'b78509d5-2bd6-4fee-bd01-f229c4e7abec.jpg', 7.8, 30296, 'Король Артур и рыцари Круглого стола отправляются в невероятное путешествие на поиски Святого Грааля. В пути они попадают в самые нелепые и абсурдные ситуации.', 164);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (52, 'Однажды на Диком Западе', 'C''era una volta il West', 1968, 'fullHD', '07abfdfd-6421-4198-94bd-36bf36919b71.jpg', 8, 26825, 'Молодая вдова отказывается продать ферму дельцу, задумавшему проложить по этой земле железную дорогу, и тогда он заказывает ее убийство, наняв лучшего стрелка на Диком Западе. На защиту красавицы встают известный бандит Шайен и таинственный бродяга. Трое сильных мужчин сойдутся в смертельном хороводе, выхода из которого может и не быть.', 125);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (53, 'Семь', 'Se7en', 1995, 'fullHD', 'e9a87e67-770c-4835-86b8-f7e4603bd3d0.jpg', 8.3, 471372, 'Детектив Уильям Сомерсет - ветеран уголовного розыска, мечтающий уйти на пенсию и уехать подальше от города и грешных обитателей. За 7 дней до пенсии на Сомерсета сваливаются две неприятности: молодой напарник Миллс и особо изощренное убийство. Острый ум опытного сыщика сразу определяет, что за этим преступлением, скорее всего, последуют другие. Новости подтверждают его догадку. Поняв, что убийца наказывает свои жертвы за совершенные ими смертные грехи, детектив встает перед выбором: вернуться к работе либо уйти и передать дело своему менее опытному напарнику?', 108);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (54, 'Крадущийся тигр, затаившийся дракон', 'Wo hu cang long', 2000, 'fullHD', '07feb3df-a96b-4115-9eb7-7db6c78684b0.jpg', 7.4, 42749, 'Легендарный мастер боевых искусств Ли Мубай отправляется на поиски магического меча зеленой стали, похищенного злоумышленниками. Впереди его ждет зловещая фигура давнего противника, наемного убийцы, который после долгого отсутствия снова вернулся на тропу войны.', 147);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (68, 'Большой побег', 'The Great Escape', 1963, 'fullHD', 'a9653b28-be63-49e6-8454-8e256c5121a5.jpg', 7.3, 6126, 'Американские, британские и канадские военнопленные осуществляют массовый побег из немецкого лагеря во время Второй мировой войны.', 144);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (57, 'Жизнь прекрасна', 'La vita è bella', 1997, 'fullHD', '4d5a3d84-1bbc-438d-a64b-36d32a6e8d45.jpg', 8.6, 238182, 'Во время Второй мировой войны из Италии в концлагерь были отправлены евреи - отец с маленьким сыном. Жена-итальянка добровольно последовала за ними. В лагере отец сказал мальчику, что всё происходящее вокруг является большой интересной игрой за приз в виде настоящего танка. И этот классный приз достанется тому мальчику, который сможет не попасться на глаза надзирателям.', 111);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (58, 'Американская история X', 'American History X', 1998, 'fullHD', 'f01d8a44-208b-4d34-b2b5-e5b08fe869c5.jpg', 8.3, 344922, 'Лидер местной банды скинхедов Дерек Виньярд прочно удерживает авторитет в своём районе. Убеждённый в своей правоте, он беспощадно расправляется с теми, кто имеет не белый цвет кожи. Независимость и смелость Дерека вызывают восхищение у его младшего брата Дэнни, который уже тоже сделал свой выбор.Но совершённое Дереком зверское убийство двух чернокожих парней разделяет дороги братьев: Дерек оказывается в тюрьме, где существует свой расклад сил, а Дэнни на свободе успешно продолжает дело брата. До тех пор, пока их пути не пересекаются вновь.', 139);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (59, 'Афера', 'The Sting', 1973, 'fullHD', '33416c41-bf6f-4d29-9d13-8bde727cf834.jpg', 8.1, 53126, 'В 1930-е годы двое отпетых мошенников пытаются отомстить главарю мафии за смерть их общего друга с помощью одной из самых неожиданных афер в истории кино, которая к тому же заканчивается удивительным и забавным образом.', 149);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (60, 'Печать зла', 'Touch of Evil', 1958, 'fullHD', '48806294-4b86-470d-924f-2fb5d3abaef1.jpg', 7.6, 6891, 'Печатью зла отмечен маленький городок на американо-мексиканской границе. Её оттиск ложится и на главных героев этого мрачного триллера. В частности, на мексиканского агента отдела по борьбе с наркотиками Мигеля Варгаса, превращающегося из законопослушного мужа и полицейского в мстительного безумца, на его невинную жену Сьюзан, погруженную преступниками в пучину наркотического транса, и на американского полицейского Хэнка Куинлана, продавшего душу дьяволу ради наживы.', 170);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (61, 'Маньчжурский кандидат', 'The Manchurian Candidate', 1962, 'fullHD', 'c326e386-e0b4-4e53-82a9-be47387a03fc.jpg', 7, 2311, 'Южная Корея, 1952 год. Отряд американских солдат попадает в окружение, и только чудом спасшиеся девять человек под командованием Раймонда Шоу возвращаются на родину. Раймонд за эту операцию получает Медаль Почёта, но не помнит, ни как они выходили из окружения, ни многих подробностей боя.', 182);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (62, 'Чужой', 'Alien', 1979, 'fullHD', '22cfd925-8b87-468e-a4bb-ce0f9b7eeeac.jpg', 8.1, 290250, 'В далеком будущем возвращающийся на Землю грузовой космический корабль перехватывает исходящий с неизвестной планеты сигнал. Экипаж, в соответствии с основными инструкциями, обязан найти и исследовать источник сигнала. Оказавшись на планете, астронавты повсюду обнаруживают предметы, по виду напоминающие гигантские коконы.', 141);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (63, 'Мистер Смит едет в Вашингтон', 'Mr. Smith Goes to Washington', 1939, 'fullHD', 'f5297f6a-a7dc-4119-8c28-a0c817a3272b.jpg', 7.9, 4145, 'Наивный идеалист Джефферсон Смит, лидер организации бойскаутов, назначен представителем в сенат. Он объединяется со старшим сенатором от своего штата, однако не подозревает, как много людей вокруг него ведут двойную игру и выполняют приказания вышестоящих. Наивный молодой сенатор сталкивается с коррупцией, грязной игрой, лживостью и ангажированностью прессы.', 139);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (64, 'Расёмон', 'Rashomon', 1950, 'fullHD', 'd7b972a2-9f58-46f4-ab10-36756fb7e291.jpg', 8, 25863, 'Древняя Япония. В лесу изнасилована женщина, а её муж убит. Есть четыре точки зрения на это происшествие, у каждого из четырех свидетелей — своя. Каждая сторона проливает свет на случившееся, добавляя дополнительные детали.', 109);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (65, 'Леон', 'Léon', 1994, 'fullHD', 'cfe3f21d-cb1c-43f2-9f3e-0719f62c3cfb.jpg', 8.7, 604577, 'Профессиональный убийца Леон неожиданно для себя самого решает помочь 12-летней соседке Матильде, семью которой убили коррумпированные полицейские.', 192);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (66, 'Энни Холл', 'Annie Hall', 1977, 'fullHD', '39a8a3fb-2e50-4bbd-b509-d1808755587d.jpg', 7.8, 32382, 'Комик Элви Сингер с юмором и иронией рассказывает о своей жизни, о людях, которые его окружают. Он скептически анализирует свои неудачи в личной жизни, в которой было несколько любимых женщин.', 189);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (67, 'Заводной апельсин', 'A Clockwork Orange', 1971, 'fullHD', '776bc1d7-5cab-48be-b9a4-ee394953f176.jpg', 7.9, 158119, 'Безжалостный лидер банды подростков, совершающей убийства и изнасилования, попадает в тюрьму и подвергается специальной обработке по подавлению подсознательного стремления к насилию. Но жизнь за воротами тюрьмы такова, что меры, принятые по «исправлению жестокости характера», не могут ничего изменить.', 199);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (69, 'Сокровища Сьерра Мадре', 'The Treasure of the Sierra Madre', 1947, 'fullHD', '00378381-363c-4c69-b1d2-480a5b879b8f.jpg', 8, 8179, 'В небольшом мексиканском городке Тампико знакомятся два бедняка Доббс и Кертин. От местного старика они узнают о золотой жиле в окрестностях Сьерра Мадре. Вложив все свои деньги в дело, трое друзей отправляются в опасное путешествие.Дойти туда стоит огромных трудов, но сохранить трезвый разум при виде жёлтого металла и вернуться живым ещё сложнее.', 105);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (70, 'Бешеные псы', 'Reservoir Dogs', 1991, 'fullHD', '630290bb-4b16-4535-9ac1-c9e4b3e29c28.jpg', 8.1, 271656, 'Это должно было стать идеальным преступлением. Задумав ограбить ювелирный магазин, криминальный босс Джо Кэбот собрал вместе шестерых опытных и совершенно незнакомых друг с другом преступников. Но с самого начала все пошло не так, и обычный грабеж превратился в кровавую бойню.', 127);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (71, 'Шестое чувство', 'The Sixth Sense', 1999, 'fullHD', '3ed8efec-a64a-4ff6-aeb6-f1ce19df86d1.jpg', 8.2, 348708, 'Детский психиатр Малкольм Кроу сталкивается со странным случаем: девятилетнего Коула посещают страшные видения - призраки умерших. Все эти люди когда-то были убиты, и теперь они обрушивают на малыша свой гнетущий страх и отчаянный гнев.Как врач Малкольм бессилен помочь. Но как человек он пытается найти ключ к ужасному миру Коула, в котором веет дыханием смерти, и распускаются страшные цветы боли.', 176);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (72, 'Челюсти', 'Jaws', 1975, 'fullHD', 'd631d79d-3fef-4d1f-bd8f-0fd9c798bb75.jpg', 7.3, 85491, 'Действие картины протекает в течение пяти дней — на острове Э́мити, где расположен небольшой курортный городок. В этом тихом и солнечном месте произошли ужасные трагические события, начало которым было положено ранним утром, когда шеф местной полиции Мартин Броуди и его помощник находят на берегу остатки тела девушки. Она стала первой жертвой огромной белой акулы, которая появилась у берегов Эмити…С каждым днем число жертв кровожадной акулы продолжает увеличиваться. Сможет ли отважный охотник на акул, ветеран Второй мировой войны, рыбак Квинт на своём судне выловить и убить акулу-людоеда? В опасную морскую экспедицию вместе с ним отправляются Мартин Броуди и прибывший на остров эксперт из национального института океанографии Мэтт Хупер.', 110);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (73, 'Амадей', 'Amadeus', 1984, 'fullHD', '3d1e7326-8192-46ef-a2f9-fc2415e84617.jpg', 8.2, 62133, '1781 год. Антонио Сальери успешно справляется с обязанностями придворного композитора при императоре Иосифе II. Когда же при дворе появляется Моцарт, Сальери к своему ужасу обнаруживает, что божественный музыкальный дар, которым он так желает обладать, был отпущен какому-то непристойному, проказливому шуту. Ослепленный завистью, он замышляет во что бы то ни стало уничтожить Моцарта...', 186);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (74, 'В порту', 'On the Waterfront', 1954, 'fullHD', '04244cc5-6923-492b-94be-1c1be444b349.jpg', 7.7, 9050, 'В центре сюжета судьба простого докера - Терри Мэллоу, терзающегося сомнениями и решающего встать на путь восстановления справедливости, после того как выясняется, что он работает на настоящего гангстера - коррумпированного босса портовых докеров Джонни Фрэндли.', 107);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (75, 'Храброе сердце', 'Braveheart', 1995, 'fullHD', '3243dea2-fca9-4ee2-8105-d2fa486a893e.jpg', 8.3, 293778, 'Действие фильма начинается в 1280 году в Шотландии. Это история легендарного национального героя Уильяма Уоллеса, посвятившего себя борьбе с англичанами при короле Эдварде Длинноногом.Он рано лишился отца, погибшего от рук англичан, и его забрал к себе дядя Оргайл, который дал ему хорошее образование в Европе. На родину Уильям возвращается уже взрослым человеком, мечтающим завести семью и жить мирной жизнью.Но судьба распорядилась иначе. Его невесту убили англичане, и он начал свой крестовый поход за свободу.', 187);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (76, 'Ран', 'Ran', 1985, 'fullHD', '40538f25-ae5b-4ed5-89b4-0416a2a5422b.jpg', 7.9, 12332, 'Япония, XVI век. Стареющий правитель Хидэтора объявляет о разделе своих владений между тремя сыновьями.Обманутый фальшивыми уверениями в верности двух старших сыновей Хидэтора прогоняет младшего, осмелившегося утверждать, что решение отца навлечет гибель на весь их род. Став жертвой коварного предательства, правитель лишается рассудка, а между его наследниками начинается беспощадная братоубийственная война.', 132);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (95, 'Цельнометаллическая оболочка', 'Full Metal Jacket', 1987, 'fullHD', '58c09a0a-d373-4d13-bb4d-a8e7aa642a17.jpg', 8, 173979, 'Американская база подготовки новобранцев корпуса морской пехоты. Жесточайшая, бесчеловечная система призвана превратить домашних мальчишек в натренированных хладнокровных убийц. Их готовят к войне во Вьетнаме, где им придется часто задавать себе вопрос «Разве война - это не ад?», а иначе просто невозможно убивать каждый день, не понимая, для чего это?', 170);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (78, 'Ровно в полдень', 'High Noon', 1952, 'fullHD', '1fceafd2-0fa6-42fc-b64a-25bb07a7094d.jpg', 7.5, 5901, 'Только что поженившись, Уилл и его прекрасная блондинка-квакерша Эми собираются навсегда покинуть городок, намереваясь оставить в прошлом опасную работу и обзавестись собственным ранчо, чтобы пустить корни. Однако, в городке узнают, что свирепый убийца Фрэнк Миллер должен очень скоро приехать в Хэдливиль и отомстить Уиллу и всему городу за то, что они засадили его в тюрьму несколько лет тому назад. Брат Миллера и еще два бандита-ганфайтера уже ждут поезд, на котором едет Миллер, а поезд должен прийти ровно в полдень. В минуту паники Уилл покидает город вместе с невестой и скачет по дороге в открытые прерии, но внезапно останавливает коня.', 147);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (79, 'Фарго', 'Fargo', 1995, 'fullHD', 'e2e2345f-be00-463d-81b8-096fa79c024c.jpg', 7.6, 117444, 'Для робкого менеджера по продажам, работающего у собственного тестя, похищение собственной жены — отличная идея. Он нанимает двух преступников, чтобы по результатам разделить с ними крупный выкуп за заложницу. Но дело сразу идет не так, как замышлялось, проливается кровь... Вызов преступникам бросает отважная женщина-полицейский...', 193);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (80, 'Бегущий по лезвию', 'Blade Runner', 1982, 'fullHD', '7aee94b3-ae10-4524-9d2c-91faa4b7b976.jpg', 7.7, 184917, 'Ноябрь 2019 года. Бывший охотник на андроидов Рик Декард восстановлен в полиции Лос-Анджелеса для поиска возглавляемой Роем Батти группы репликантов, совершившей побег из космической колонии на Землю. В полиции считают, что андроиды пытаются встретиться с Эндолом Тайреллом — руководителем корпорации, которая разрабатывает кибернетический интеллект. Декард получает задание выяснить мотивы репликантов и уничтожить их.', 150);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (81, 'Квартира', 'The Apartment', 1960, 'fullHD', '7e858949-2958-4ae4-bfc6-1c5c82009bd8.jpg', 8, 23798, 'Скромный служащий страховой компании Бакстер, чтобы хоть как-то продвинуться по карьерной лестнице, одалживает ключи от своей холостяцкой квартиры не только приятелям, желающим «погулять на сторону», но и боссу. Когда дела начинают идти в гору, случается непредвиденное: Бакстер влюбляется в любовницу босса.', 174);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (82, 'История игрушек 2', 'Toy Story 2', 1999, 'fullHD', '0e4beb67-abc1-4445-a6d7-1d93a6aca398.jpg', 7.8, 162320, 'Ковбой Вуди и другие игрушки мальчика по имени Энди продолжают жить, радуясь каждому дню. Но неожиданно все меняется, когда Вуди похищает коварный коллекционер. Оказывается, что Вуди - очень ценная игрушка из коллекции, за которую японский музей игрушек готов заплатить огромную сумму. В доме коллекционера он находит своих родственников. В это время игрушки во главе с Баззом Лайтером отправляются спасать Вуди.Вуди узнает о своем знаменитом прошлом, Базз и другие игрушки проходят опасный и тернистый путь. Перед Вуди встает непростой вопрос - каково же его предназначение? Блистать в витрине музея или же вернуться к любимому хозяину?', 159);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (83, 'Чужие', 'Aliens', 1986, 'fullHD', 'ee0c195b-bf91-4be0-8505-8a4f33580c29.jpg', 8.1, 242197, 'Чужой – совершенный организм. Идеальная машина для убийства, чье физическое превосходство сочетается с его феноменальной жаждой уничтожения. Офицер Элен Рипли и команда космического корабля Ностромо один раз уже встретилась с такой тварью. В живых осталась только Элен.Капсула с Элен найдена спасателями после многих лет блуждания в космосе. Ей сообщают, что планета L.V. 426 колонизирована, и ей придется вернуться туда, где начался ее кошмар, ибо связь с колонистами прервалась. И вот в составе группы космического десанта Рипли отправляется на проклятую планету. Но теперь их там поджидает не один Чужой, а тысячи. Кто сможет выжить в этой войне: чудовища, способные только убивать, или люди, способные мыслить?', 112);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (84, 'Незнакомцы в поезде', 'Strangers on a Train', 1951, 'fullHD', '4d56ebaf-c45f-408e-8186-aea6a06309df.jpg', 7.8, 13479, 'Невероятные события начинают происходить в жизни звезды тенниса Гая Хэйнса после неожиданной встречи в поезде с обаятельным незнакомцем Бруно.До этой встречи молодые люди имели разные, но серьезные причины чувствовать себя несчастными. Решение личных проблем двух случайных попутчиков состоит из небольшого обмена услугами: «Я убью для тебя, а ты убьешь для меня».', 133);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (154, 'Магнолия', 'Magnolia', 1999, 'fullHD', '8392dcd2-5d48-43c4-b3d7-c6718b8a3ec4.jpg', 7.4, 39201, 'Эта история произошла в долине Сан-Фернандо в дождливый день, когда на небе не было ни облачка. Благодаря вмешательству высших сил, а также нагромождению совпадений, случайностей, действий разных людей, их жизни и судьбы переплетутся и проникнут друг в друга в течение одного дня, финал которого будет незабываемым.', 162);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (85, 'Новые времена', 'Modern Times', 1936, 'fullHD', '89f9b3a3-74f8-4304-ae2b-05dc62aeca7b.jpg', 8.1, 24368, '«Новые времена» - это эмоциональный, выдержанный в комическом ключе, отклик на перекосы машинной эпохи. Маленький Бродяга не желает быть «винтиком» в огромной мега-машине промышленного производства и так похожего на него человеческого общества. Чарли сражается с тупыми богачами, всесильными полицейскими, бездушными начальниками конвейерного производства.Иногда он выигрывает в этих сражениях, но чаще проигрывает, в конце концов, бесстрашно идет навстречу рассвету. Хотя «Новые времена» считается последним немым фильмом Чарли Чаплина, в нем Маленький Бродяга в первый и в последний раз обрел голос.Правда, он не заговорил, а запел в финальных кадрах картины, символизируя прощание с прекрасным периодом немого кинематографа.', 112);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (86, 'Сияние', 'The Shining', 1980, 'fullHD', 'b3177de3-d3ff-4d17-bcdb-d2d339307c01.jpg', 7.8, 243576, 'Джек Торренс с женой и сыном приезжает в элегантный отдалённый отель, чтобы работать смотрителем во время мертвого сезона. Торренс здесь раньше никогда не бывал. Или это не совсем так? Ответ лежит во мраке, сотканном из преступного кошмара.', 189);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (87, 'Донни Дарко', 'Donnie Darko', 2001, 'fullHD', 'ab66f092-417a-4341-a4c9-ef9ceae1ef6d.jpg', 7.6, 149190, 'Донни Дарко — обычный старшеклассник, живет с родителями и двумя сестрами. Однажды он встречает человека в костюме кролика, который сообщает парню, что через 28 дней, 6 часов, 42 минуты и 12 секунд наступит конец света.', 163);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (88, 'Утиный суп', 'Duck Soup', 1933, 'fullHD', '448c6118-63e8-4599-bf48-2aef513bef94.jpg', 6.9, 2772, 'Чтобы спасти маленькую страну Фридонию от банкротства, богатая вдова госпожа Тисдейл соглашается пожертвовать на это 20 миллионов долларов. Но только при условии, что ухлестывающий за ней Руфус Т. Файрфлай станет лидером страны.Файрфлай - циничный и бесцеремонный диктатор - провоцирует посла соседней Сильвании, и между странами начинается война. Военную «игру» осложняют и запутывают два друга-неумехи, которых посол Сильвании отправил шпионить за Файрфлаем с целью выкрасть его тайные планы сражения...', 200);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (89, 'Принцесса-невеста', 'The Princess Bride', 1987, 'fullHD', '2135fcc4-f2d2-41e6-8e2a-f04d53f0ac4f.jpg', 7.2, 14648, 'Добро пожаловать в фантастический мир прекрасных замков, жутких подземелий, бескрайних океанов, лесов и гор. Чтобы спасти свою возлюбленную, прекрасную невесту, отважный герой преодолевает немыслимые препятствия и совершает невероятные подвиги.', 194);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (90, 'Беги, Лола, беги', 'Lola rennt', 1998, 'fullHD', '2de0ac18-2100-4418-9351-19f78c4ea803.jpg', 7.5, 56563, 'Лола и Манни живут в Берлине и безумно любят друг друга. И когда Манни — маленький курьер большого бандита — теряет сумку с деньгами своего босса, спасти его может только Лола. Но чтобы раздобыть совсем не маленькую сумму в сто тысяч марок, у девушки есть только 20 минут. Каждая секунда может означать разницу между жизнью и смертью.', 128);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (91, 'Огни большого города', 'City Lights', 1931, 'fullHD', '12c22716-a1f9-4d96-9200-bd6bc0aaa479.jpg', 8.5, 58649, 'Маленький Бродяга встречает красивую слепую девушку, торгующую цветами на улице, которая по ошибке принимает его за богатого герцога. Узнав о том, что операция может вернуть ей зрение, маленький Бродяга пускается на поиски денег.', 162);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (92, 'Паровоз Генерал', 'The General', 1926, 'fullHD', '451fdb87-17ce-451b-9997-801accbbf4e1.jpg', 7.9, 7725, 'Юного Джонни Грэя в армию Конфедерации не взяли, а его возлюбленная Аннабел Ли отвергает его, обозвав трусом. Тем не менее, он со своим «напарником» паровозом утирает всем нос, выигрывая сражение. Джонни воюет с угонщиками поезда, непослушной пушкой и непредсказуемой силой судьбы.', 135);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (93, 'Искатели', 'The Searchers', 1956, 'fullHD', 'fc23203d-eea2-4949-99a1-11101a7544f2.jpg', 7.2, 5729, 'Джон Уэйн  играет   бывшего солдата армии конфедерации Итана Эдвардса, который  больше  верит  пулям, чем   словам. Он разыскивает свою племянницу, похищенную команчами, которые убили всю его семью.Ему не страшны ни голод, ни жажда, ни одиночество. За время своих отчаянных пятилетних поисков Итан находит то, что найти не ожидал: свою собственную человечность.', 107);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (94, 'Метрополис', 'Metropolis', 1927, 'fullHD', 'a33d35f7-42eb-4ac4-b0a0-29e4079393be.jpg', 8.1, 23348, 'Метрополис - город будущего, разделен на две части. Под землей находятся жилища рабочих, над ними цеха с машинами. В верхнем городе расположены офисы, богатые кварталы и сады развлечений. Вся власть в городе принадлежит магнату Иогану Фендерсону.Его сын - Фредер догадывается о несправедливости, царящей в метрополисе. Спустившись в машинную зону, Фредер приходит в ужас: он видит страшного Молоха, пожирающего людей. Не в силах смириться с увиденным, он начинает борьбу со злом.', 128);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (96, 'Дурная слава', 'Notorious', 1946, 'fullHD', '7aa4d9bd-edcb-494e-ae2a-e206b4707227.jpg', 7.5, 6842, '1946 г. американский суд приговаривает Иогана Губермана к двадцати годам тюрьмы как германского шпиона за измену Родине. Его дочь Алисия знакомится на вечеринке с агентом ФБР Дэвлином, который получает задание от руководства раскрыть нацистский заговор в Рио де Жанейро.Дэвлин решает воспользоваться помощью девушки для выполнения своего задания, и она принимает его предложение. Так начинается их бурный «шпионский» роман.Они вступают в контакт с нацистским агентом Александром, за которого Алисия должна выйти замуж, чтобы узнать о секретных планах немецкой организации, в которой состоит Александр.', 156);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (97, 'Манхэттен', 'Manhattan', 1979, 'fullHD', 'ac35101b-a4a0-4434-a528-df58e2ccf9e3.jpg', 7.8, 25088, 'Желая бросить опостылевшую работу и привычный круг знакомств, телевизионный сценарист заводит роман с любовницей друга. И вновь оказывается в замкнутом круге лжи, лицемерия, пустословия. Неожиданно для себя он делает открытие, что надо больше доверять людям.', 190);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (98, 'Буч Кэссиди и Сандэнс Кид', 'Butch Cassidy and the Sundance Kid', 1969, 'fullHD', '93a9be13-aec5-4744-ba9a-fe08fe1c61f3.jpg', 8, 20405, 'Два друга Буч Кэссиди и Сандэнс Кид известны всей округе. Они верховодят бандой «Дыра в стене». Буч - мозговой центр, Сандэнс - идеальный исполнитель и первоклассный стрелок. Они дважды грабят один и тот же поезд, перевозящий деньги. За налетчиками организована погоня, которой руководит опытный следопыт Балтимор. От него не удавалось уйти никому. С трудом оторвавшись от преследования, приятели укрываются в доме подружки Сандэнса. И тогда Буч понимает: раз удача отвернулась от них в Америке, может стоит попытать счастья в Боливии?', 172);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (99, 'Выпускник', 'The Graduate', 1967, 'fullHD', '9e5a58dc-271e-4427-82ba-054e222fcf4f.jpg', 7.9, 26317, 'После окончания колледжа в родительский дом возвращается Бенджамин Брэддок. На торжественном приёме в его честь Бен встречает давнюю приятельницу родителей, элегантную даму бальзаковского возраста миссис Робинсон, которая позже соблазняет его. Робкий, неуклюжий, безвольный Бен бессилен против чар властной и сексуальной женщины, пока не влюбляется в её дочь Элейн.', 144);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (100, 'Глубокий сон', 'The Big Sleep', 1946, 'fullHD', 'e9fee91c-099d-4c1d-96c7-c62046b7f99b.jpg', 7.4, 5171, 'Пожилой генерал Стернвуд нанимает частного детектива Филипа Марлоу, чтобы тот разобрался с шантажистами его распутной младшей дочери Кармен. Начав копать, Марлоу ввязывается в опасную и запутанную криминальную игру. Да и старшая дочь генерала Вивиан добавляет хлопот. Загадочная, жёсткая, непредсказуемая и сексапильная красавица постоянно оказывается там, где не надо.', 167);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (101, 'Новый кинотеатр «Парадизо»', 'Nuovo Cinema Paradiso', 1988, 'fullHD', '29d04585-a046-47c6-9cbe-fa16f2310b04.jpg', 8, 19374, 'Это рассказ о счастливых днях, когда итальянское кино еще не знало о том, что такое «кризис итальянского кинематографа». В центре разделенной как бы на три части картины - сицилийский мальчишка Сальваторе.', 132);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (102, 'Седьмая печать', 'Det sjunde inseglet', 1957, 'fullHD', '170dfe84-a27f-4eb9-8e30-48377fb6c44d.jpg', 8.1, 33459, 'В середине XIV века рыцарь Антониус Блок и его оруженосец возвращаются после десяти лет крестовых походов в родную Швецию. Блок устал от жизни, и не видит вокруг себя ничего, ради чего стоило бы продолжать влачить свое существование. Но прежде он хочет убедиться в том, что Бог - есть...', 198);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (103, 'Ребекка', 'Rebecca', 1940, 'fullHD', 'ad834853-c4a4-43cd-bd15-add85dcb77fb.jpg', 7.9, 19002, 'Максимиллиан Де Уинтер - богатый мужчина, примерно год назад потерявший жену Ребекку. Он приезжает в Монте-Карло, где встречает миссис Ван Хоппер и её юную компаньонку. Постепенно Максимиллиан так увлекается молодой особой, что в конце концов женится на ней, и вскоре супруги возвращаются в Мэндэрли, владение семьи Де Уинтеров в Корнуэлле. Там девушку начинает преследовать и подавлять присутствие Ребекки, которое она видит абсолютно во всём.', 114);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (104, 'Доблесть', 'Glory', 1989, 'fullHD', 'da873aba-cd01-4651-b49e-c32a36a5e63b.jpg', 7.4, 5655, 'Полковник Шоу был офицером армии Федералов во времена Гражданской войны в США. Он добровольно вызвался стать командиром первого в истории США подразделения чернокожих солдат. Полковник должен обучить их и повести в бой, но времени на подготовку слишком мало, а впереди — решающее сражение с регулярными войсками южан.', 129);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (105, 'Охотник на оленей', 'The Deer Hunter', 1978, 'fullHD', '41161789-5fc3-476b-864c-6420c11d5921.jpg', 7.9, 48119, 'История о трех американцах русского происхождения - их жизни до, во время и после войны во Вьетнаме.', 136);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (106, 'Лучшие годы нашей жизни', 'The Best Years of Our Lives', 1946, 'fullHD', '9ff3d448-e8ee-4235-9593-d3e01be62c1c.jpg', 7.8, 3632, 'Фильм рассказывает историю о трех офицерах американской армии, которые с войны возвращаются домой к своим семьям. Эл, Фред и Хомер — эта история о них, у Эла дома жена и двое уже подросших детей, которые как раз вступают во взрослую жизнь, он пытается наверстать упущенное, узнать их заново и вновь завоевать семейную любовь и доверие, по возвращению его приглашают работать в банке на более высокую должность, нежели он был до того как отправился на войну. У Фреда в свою очередь красавица жена, которая начала самостоятельную жизнь, уехав от родителей Фреда и поселившись в отеле и как видимо не очень то скучала без мужа, к тому же на работу Фреда брать не торопятся и у него, серьезные финансовые проблемы, после совместной выпивки в баре Фред попадает домой к Элу и там он влюбляется в дочь Эла, Пегги. А вот у Хомера дела еще сложнее, он потерял на войне обе руки, но его ждет семья и любимая девушка на которой он обещал по возвращению жениться, но серьезное увечье все усложняет, поэтому Хомера и его девушку ждет большое испытание их чувств, готовы ли его близкие принять его таким.', 195);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (107, 'Шрэк', 'Shrek', 2001, 'fullHD', 'b5b34082-d1e8-4fbb-9eac-4c6adc4a1324.jpg', 8.1, 656706, 'Жил да был в сказочном государстве большой зеленый великан по имени Шрэк. Жил он в гордом одиночестве в лесу, на болоте, которое считал своим. Но однажды злобный коротышка — лорд Фаркуад, правитель волшебного королевства, безжалостно согнал на Шрэково болото всех сказочных обитателей.И беспечной жизни зеленого великана пришел конец. Но лорд Фаркуад пообещал вернуть Шрэку болото, если великан добудет ему прекрасную принцессу Фиону, которая томится в неприступной башне, охраняемой огнедышащим драконом.', 172);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (108, 'Великий диктатор', 'The Great Dictator', 1940, 'fullHD', 'e1406e02-bdea-4fed-98d8-202dc000923a.jpg', 8.1, 29090, 'Главный герой фильма, еврейский цирюльник, сражается в рядах армии своего государства Томании. Однажды, во время одного из сражений, он спасает жизнь летчику Шульцу, но в результате довольно жесткого приземления ударяется головой, теряет память и долгое время находится в больнице.Шли годы, война давно уже закончилась, и в Томании приходит к власти диктатор Аденоид Хинкель, который яро ненавидит евреев и очень сильно похож на того самого еврейского цирюльника. Хинкель жаждет завоевать весь мир, а в это время цирюльник выходит из больницы и, ни о чем не подозревая, пытается наладить старую жизнь. Однако впереди его ждут невероятные приключения…', 110);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (109, 'Похитители велосипедов', 'Ladri di biciclette', 1948, 'fullHD', '7da2db2c-168b-4424-8a2b-30a38fd12730.jpg', 8, 16752, 'Послевоенный Рим, давно неработающий Антонио вне себя от радости - он наконец-то находит работу. Но в первый же трудовой день у него украли велосипед, без которого невозможно работать! Вместе с маленьким сыном Бруно он пытается  найти  в огромном  городе украденный  велосипед,  от которого зависит жизнь его семьи...', 169);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (110, 'Паттон', 'Patton', 1970, 'fullHD', 'ac80c851-8e3f-4260-a2e5-16a666228a89.jpg', 7, 3491, 'По книгам «Паттон: испытания и триумф» и «История солдата» генерала Омара Н. Брэдли. Биография генерала Джорджа Паттона, чей темперамент часто оказывал влияние на ход военных действий во время второй мировой войны.', 167);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (111, 'Африканская королева', 'The African Queen', 1951, 'fullHD', '1b29a9b6-be00-4d0e-9995-4de8c4e50a61.jpg', 7.2, 2846, '1914 год, Восточная Африка. Пропахший джином капитан Чарли приплывает на своем пароходике в деревню, где находится христианская миссия преподобного Сэмюэла и его незамужней сестры Розы, которые среди диких африканских джунглей ведут себя так, будто по-прежнему находятся в старой доброй Англии. Но война докатывается и до Африки.Ворвавшиеся в миссию немецкие солдаты сжигают деревню и угоняют жителей. Пережитое плохо отразилось на состоянии преподобного, вскоре он умирает, а Розе приходится бежать вместе с Чарли. Беспрерывно ссорясь друг с другом, чопорная миссионерка и бесшабашный капитан плывут по реке навстречу опасным и романтическим приключениям.', 173);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (112, 'Зеленая миля', 'The Green Mile', 1999, 'fullHD', 'f5a3f17f-1841-4489-8326-86d31cfb86c2.jpg', 9.1, 893036, 'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.', 192);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (114, 'Это случилось однажды ночью', 'It Happened One Night', 1934, 'fullHD', 'dff89ea1-2a4c-45c5-a5b0-83ff1007b06c.jpg', 7.9, 10788, 'Элли собирается замуж за знаменитого летчика Кинга Вестли, но ее отец презирает того, считая светским бездельником, поэтому он сажает дочь под замок и ищет основания для аннулирования помолвки. Элли удается бежать, и она отправляется навстречу суженому в Нью-Йорк на автобусе. В том же автобусе едет только что уволенный репортер Питер. Ему необходима сенсация, чтобы восстановить отношения с редактором. В лице беглой наследницы миллионов, которую ищет полиция всей страны, судьба улыбается ему.', 125);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (115, 'Филадельфийская история', 'The Philadelphia Story', 1940, 'fullHD', '392c1c14-2f55-4e31-99db-66a630e895c7.jpg', 7.6, 6284, 'Холодная красавица миссис Трейси разведена и готовится вновь выйти замуж за Джорджа, управляющего нефтяной компанией ее отца. Казалось бы, сомнений нет, но вдруг накануне торжества неожиданно появляется ее бывший муж Декстер в сопровождении двух корреспондентов - симпатичного молодого человека по имени Коннор и мисс Имбири - которые должны осветить в желтой прессе это светское событие.', 125);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (116, 'Город бога', 'Cidade de Deus', 2002, 'fullHD', '6379a312-70b8-497e-b918-7cb0ebc0008f.jpg', 8, 166256, 'Город Бога — самая опасная фавела Рио-де-Жанейро, и именно здесь растут трое детей: Ракета, Малыш Фишка и Бенни. Поначалу они только наблюдают, как другие подростки грабят мотели и мелкие лавки, но круговорот насилия затягивает и их. Фишка — теперь Малыш Зе, главный наркоторговец и гроза всего района. Бенни — его лучший друг и правая рука, но его тяготит криминальный образ жизни. И только Ракете удается оставаться в стороне. Он мечтает стать фотографом и становится свидетелем и собирателем хроники гангстерских разборок, утопивших Город Бога в крови.', 154);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (117, 'Воспитание Крошки', 'Bringing Up Baby', 1938, 'fullHD', '51b3014e-f98c-47b6-8cb5-e0716ada3af0.jpg', 7.7, 5147, 'Дэвид Хаксли — чудаковатый палеонтолог, последние четыре года жизни по косточке воссоздающий скелет бронтозавра. За день до свадьбы злодейка-судьба сталкивает его со Сьюзан, неуемной молодой девицей, которая тут же положила на него глаз и начала причинять бесконечные неприятности, пытаясь заполучить его.', 137);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (118, 'Принцесса Мононоке', 'Mononoke-hime', 1997, 'fullHD', '1a7c05a5-b01c-4320-adb3-7cca9f3e5ac0.jpg', 8.2, 154976, 'Убив вепря, юный принц Аситака навлек на себя смертельное проклятие. Старая знахарка предсказала, что только он сам способен изменить свою судьбу, и отважный воин отправился в опасное путешествие. Так он оказался в загадочной стране, где люди под предводительством злой госпожи Эбоси воевали с обитателями леса: духами, демонами и гигантскими существами, каких Аситака раньше никогда не видел. И была с ними принцесса Мононоке - повелительница зверей и дочь волчицы. Теперь судьба всех зависит только от одного воина - принца Аситаки.', 179);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (119, 'Простая история', 'The Straight Story', 1999, 'fullHD', '223da9dc-e3b3-46b7-a67d-8744068dd075.jpg', 7.8, 29044, 'Семидесятитрехлетний Элвин Стрэйт, доживающий последние годы вместе с полоумной дочкой в тихом провинциальном городке, отправляется в путь, чтобы повидаться со своим старшим братом Лайлом, пережившим сердечный приступ. Элвин покупает подержанную газонокосилку (у него нет прав на вождение автомобиля) и отправляется в путь через два штата. Его ждут случайные придорожные знакомства, помощь добрых людей и, наконец, встреча с братом.', 118);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (120, 'Хладнокровный Люк', 'Cool Hand Luke', 1967, 'fullHD', 'ec4d6fa5-86f8-4557-bcff-7b4777f6adef.jpg', 7.7, 6503, 'Однажды ночью Люк, выпив, решил развлечься и свинтил газовым ключом дюжину монетоприемников на автостоянке, за что и получил два года ремонтно-строительных работ на дорогах в южных штатах. Еще во время войны он много раз испытывал свою судьбу на прочность, и тюрьма стала очередной проверкой, которую Люк, похоже, и искал…За свой упрямый и упорный характер Люк получил от сокамерников уважительное прозвище Люк Хладнокровный, а с ним и ненависть надзирателей лагеря за стремление к свободе и непокорный нрав. Три побега, три ареста и три жестоких наказания не сломили его волю к жизни, он стал героем для остальных заключенных, героем-одиночкой, поставившим себя против системы…', 150);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (121, 'Терминатор 2: Судный день', 'Terminator 2: Judgment Day', 1991, 'fullHD', '4be39a69-08d2-40ae-b587-1cf11a22c4e4.jpg', 8.3, 456548, 'Прошло более десяти лет с тех пор, как киборг из 2029 года пытался уничтожить Сару Коннор — женщину, чей будущий сын выиграет войну человечества против машин.Теперь у Сары родился сын Джон и время, когда он поведёт за собой выживших людей на борьбу с машинами, неумолимо приближается. Именно в этот момент из постапокалиптического будущего прибывает новый терминатор — практически неуязвимая модель T-1000, способная принимать любое обличье. Цель нового терминатора уже не Сара, а уничтожение молодого Джона Коннора.Однако шансы Джона на спасение существенно повышаются, когда на помощь приходит перепрограммированный сопротивлением терминатор предыдущего поколения. Оба киборга вступают в смертельный бой, от исхода которого зависит судьба человечества.', 159);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (122, 'Телохранитель', 'Yojinbo', 1961, 'fullHD', 'ace5edc4-c4f4-4476-b156-2ab2dbb8b0d3.jpg', 8, 14129, 'В некий японский городок приходит самурай. Самурай выглядит совершенно не по-самурайски: плохо пострижен, не причёсан. А в городе две организованные преступные группировки, созданные местечковыми олигархами из лиц, находящихся под следствием и в розыске, терроризируют жителей городка, жестоко страдающих от бандитского беспредела. Проявляя недюжинную оперативную смекалку и мастерски работая мечом, попеременно нанимаясь телохранителем то в одну, то в другую банду, самурай искусно сокращает поголовье уродов, попутно решая свои собственные задачи.', 171);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (123, 'Гроздья гнева', 'The Grapes of Wrath', 1940, 'fullHD', '4a43f0f0-28b7-4c85-a8ac-6e5ff8b6aebb.jpg', 7.6, 5324, 'После тюремного срока за убийство Том Джоад возвращается на своё семейное ранчо, которое к тому времени полностью разорилось и пребывает в запустении. В отсутствие какой-либо перспективы найти работу в засушливой Оклахоме вся семья собирает свой скарб и отправляется на «землю обетованную» - в Калифорнию. Но трудный путь и тяжкие условия не приносят искомой надежды, и даже единство семьи подвергается испытаниям.', 102);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (124, 'Звёздные войны: Эпизод 6 — Возвращение Джедая', 'Star Wars: Episode VI - Return of the Jedi', 1983, 'fullHD', '6ba448c4-9f88-4db5-86b0-3246bda3ee0c.jpg', 8.2, 276414, 'В шестом эпизоде «Звездных войн» Дарт Вейдер создает вторую «Звезду Смерти». Он объединяет все силы зла, чтобы с помощью этого смертоносного оружия нанести последний сокрушительный удар по повстанцам и их союзникам.Люк Скайуокер вместе с принцессой Лейей и верными дроидами R2D2 и C-3PO отправляется спасать своего друга Хана Соло, который попал в плен к отвратительному Джаббе Хатту - могущественному повелителю преступников.Повстанцы высаживаются на планету Эндор, чтобы оттуда вместе с Люком и его отрядом предпринять последнюю атаку на Имперский флот, атаку, от которой зависит судьба Галактики. В этом эпизоде Люк Скайуокер и Дарт Вейдер встречаются в последний раз... ибо из поединка между отцом и сыном живым выйдет только один...', 118);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (125, 'Форрест Гамп', 'Forrest Gump', 1994, 'fullHD', 'c2becc2e-32e4-4898-8d76-9ca4291bcd91.jpg', 8.9, 820235, 'Сидя на автобусной остановке, Форрест Гамп — не очень умный, но добрый и открытый парень — рассказывает случайным встречным историю своей необыкновенной жизни.С самого малолетства парень страдал от заболевания ног, соседские мальчишки дразнили его, но в один прекрасный день Форрест открыл в себе невероятные способности к бегу. Подруга детства Дженни всегда его поддерживала и защищала, но вскоре дороги их разошлись.', 104);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (126, 'Мышьяк и старые кружева', 'Arsenic and Old Lace', 1944, 'fullHD', '59b1f328-513f-4583-810d-e2518f823ab6.jpg', 7.8, 5458, 'Не зря возражал отец Элейн против брака его дочери с Мортимером в канун Хэллоуина. Всё сразу пошло наперекосяк. Молодожёны переезжают в большой мрачный дом семьи Брюстер в Бруклине, неподалёку от старинного кладбища. В доме живут две милые старые тётушки Мортимера и абсолютно сумасшедший двоюродный брат, считающий себя президентом Рузвельтом.Неожиданно появляется ещё один брат – убийца-маньяк, только что сбежавший из тюрьмы. Может, хотя бы старушки нормальны? Увы…', 179);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (127, 'Дикая банда', 'The Wild Bunch', 1969, 'fullHD', 'a5339b39-448a-4ca5-91a2-75f9f1800914.jpg', 7.7, 7310, 'Год 1913-й. Мир на грани Первой мировой, и давно состарившийся Дикий Запад ощущает себя уходящей натурой. Вместе с ним на покой собралась шайка грабителей, «дикая банда», шестеро ловцов удачи, слишком старых для дерзких налетов. Но они готовы еще тряхнуть стариной, и на излете легендарной карьеры порох в пороховницах этих бандолерос обернется последней кровавой бойней…', 189);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (128, 'Непрощенный', 'Unforgiven', 1992, 'fullHD', '752d5cce-9266-403a-b9df-47d3a1ef8539.jpg', 7.8, 48609, 'История Уильяма Мунни — бывшего хладнокровного убийцы, нашедшего в себе силы покончить с грязным ремеслом. Он стал фермером, завел семью. Но все складывается совсем не так, как ему хотелось.', 108);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (129, 'Рождественская история', 'A Christmas Story', 1983, 'fullHD', '89550f66-01d8-43e9-a0eb-b1da00e483b9.jpg', 6.9, 2994, 'Индиана, 1940 год. Девятилетний Ральфи мечтает об идеальном рождественском подарке - настоящей двухсотзарядной пневматической винтовке Красного Наездника.Ворчливый папаша и заботливая мамочка, естественно, против, полагая, что их драгоценный сынуля может себя покалечить! И тогда Ральфи решает обратиться за помощью к самому Санта-Клаусу.', 186);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (130, 'Ночь охотника', 'The Night of the Hunter', 1955, 'fullHD', '62a52566-dc03-48fb-ab9e-6ce199ed0af5.jpg', 7.2, 4661, 'Мальчику Джону и его сестричке Перл «посчастливилось» увидеть, как их отца увозит полиция, схватив его за ограбление и убийство двух человек. Отца приговаривают к смерти и вешают, в наследство детям остаются украденные деньги, которые отец спрятал, взяв с Джона и Перл слово, что они никому не расскажут о тайнике, даже матери. В тюрьме он познакомился с проповедником Гарри Пауэллом, а на деле — безжалостным убийцей, помешанном на религии, со словами «любовь» и «ненависть», вытатуированными на пальцах рук. Пауэлл решает добраться до тайника и для этого женится на доверчивой вдове.', 171);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (131, 'Почти знаменит', 'Almost Famous', 2000, 'fullHD', 'c10671c6-10e7-4750-acb2-5332dcd149ca.jpg', 7.6, 24606, 'История о том, как простой американский мальчишка Уильям Миллер волею случая стал корреспондентом авторитетного музыкального журнала «Роллинг Стоун» и отправился по заданию редакции в турне с группой «Стиллуотер».В компании суровых рокеров, юных фанаток и бурлящих в крови гормонов парень делает свой первый шаг в полную удивительных приключений взрослую жизнь расклешенных семидесятых. И уж, поверьте, эти самые приключения не заставят себя ждать!', 188);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (132, 'Молодой Франкенштейн', 'Young Frankenstein', 1974, 'fullHD', 'f3090388-b5ac-4871-bdd7-9f29d354e338.jpg', 7.3, 4368, 'Молодой доктор Фредерик Франкентшейн, внук Виктора Франкенштейна, невероятно стыдящийся близкого родства со знаменитым бароном, отправляется в Трансильванию, чтобы вступить во владение замком, оставленным дедом ему в наследство. Фредерик долгие годы был уверен, что работа его дедушки — полнейшая ерунда, но найдя в замке книгу с описанием его экспериментов и внимательно изучив её, молодой человек резко меняет мнение.', 193);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (133, 'Унесённые ветром', 'Gone with the Wind', 1939, 'fullHD', '7fb9a8c2-87b1-4fb8-9fe1-c9d43528a2a1.jpg', 8.4, 190193, 'Могучие ветры Гражданской войны в один миг уносят беззаботную юность южанки Скарлетт О`Хара, когда привычный шум балов сменяется грохотом канонад на подступах к родному дому. Для молодой женщины, вынужденной бороться за новую жизнь на разоренной земле, испытания и лишения становятся шансом переосмыслить идеалы, обрести веру в себя и найти настоящую любовь.', 130);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (134, 'Лагерь для военнопленных №17', 'Stalag 17', 1952, 'fullHD', '9b9e9f58-0766-4a9f-8397-90330cb76fba.jpg', 7.3, 1521, 'Когда двое сбежавших американских заключённых Второй мировой были убиты, немецкий военнопленный, спекулянт лагерных казарм, Джей Джей Сефтон стал подозреваться в доносе.', 129);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (135, 'Корпорация монстров', 'Monsters, Inc.', 2001, 'fullHD', '8418d452-4843-476e-8e1f-7fc52592c664.jpg', 8.1, 480576, 'Склизкий гад в сливном бачке, мохнатый зверь, похожий на чудовище из «Аленького цветочка», гигантские мокрицы под кроватью — все они существуют на самом деле. Все, что им нужно — пугать детей, потому что из детских криков они получают электричество.Полнометражный мультфильм рассказывает о кризисах в мире монстров, их жизни. Но однажды вся мирная жизнь монстров оказывается под угрозой: в их мир попадает ребенок. А с детьми столько хлопот, что они могут довести даже монстров.', 146);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (136, 'Бильярдист', 'The Hustler', 1961, 'fullHD', '1d2e683b-991d-4f87-93e9-c1aab5e88064.jpg', 7.9, 6051, 'Бильярдист и кидала Эдди Фелсон вместе с напарником действуют по проверенной схеме. Сначала Эдди позволяет противнику выигрывать, потом взвинчивает ставки и обирает соперника до нитки. Вскоре Эдди решает бросить вызов одному из сильнейших бильярдистов страны по прозвищу Толстяк Миннесота.', 149);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (137, 'На Западном фронте без перемен', 'All Quiet on the Western Front', 1930, 'fullHD', 'd0c57b49-5c01-46b3-ba9b-dd545a660d69.jpg', 8, 7554, 'Рассказ о простых немецких школьниках старших классов, которые под действием патриотической пропаганды идут на войну, принимая её как игру, и не знают, что впереди их ждет только смерть.', 106);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (138, 'Разговор', 'The Conversation', 1974, 'fullHD', 'a7af0e92-9da8-49f6-bbc7-3b4542e63aa1.jpg', 7.6, 12843, 'Гарри Коул — лучший на Западном побережье эксперт по прослушивающим устройствам. Записав по заказу крупного бизнесмена беседу некой парочки, гуляющей по площади, Коул нарушает свое главное правило — не совать нос в дела заказчика — и пытается предотвратить убийство, которое, как ему кажется, вот-вот должно произойти.', 186);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (155, 'Золотая лихорадка', 'The Gold Rush', 1925, 'fullHD', '9763f938-81bd-449b-8bdf-db717b3bc5dc.jpg', 8, 24634, 'История о злоключениях извечного любимца публики, маленького бродяги, который на этот раз отправляется на золотые прииски Аляски и как всегда порадует вас бесконечным калейдоскопом трюков и комических ситуаций.', 149);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (139, 'Быть Джоном Малковичем', 'Being John Malkovich', 1999, 'fullHD', 'a0110050-6123-4199-8a1b-e242b632fe9b.jpg', 7.3, 46167, 'Кукольник-неудачник по имени Шварц устраивается на работу в странную и невероятно тесную контору. В своем кабинете новоиспеченный клерк Крэйг обнаруживает крошечную потайную дверцу. Удивлению не было границ, когда он обнаружил, что за дверцей скрыт ход... в мозг голливудской звезды Джона Малковича! И тогда предприимчивый кукловод решает организовать доходное предприятие по организации экскурсий в голову звезды для всех желающих.', 147);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (140, 'Поговори с ней', 'Hable con ella', 2002, 'fullHD', 'a3b32bf7-d280-432e-8816-ef9fa5ad8fd1.jpg', 7.8, 21923, 'В поисках интересного персонажа для статьи журналист Марко встречается со знаменитой женщиной-тореро Лидией. Их знакомство перерастает в страстную любовь, но все надежды рушит трагедия на корриде: удар разъяренного быка повергает Лидию в кому. Проводя дни и ночи в больнице, Марко знакомится с медбратом Бениньо. Он не первый год заботится о впавшей в кому Алисии, которую страстно любит, не надеясь на взаимность.Схожие судьбы объединяют мужчин, но Бениньо счастлив, а Марко страдает, будучи не в силах выразить Лидии свои чувства. Видя отчаяние друга, Бениньо дает ему совет: «Поговори с ней». Теперь только сокровенные разговоры связывают любимых, и может быть, простые слова однажды сотворят чудо, на которое так надеются Марко и Бениньо…', 165);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (141, 'Человек-слон', 'The Elephant Man', 1980, 'fullHD', '532122a8-092e-4592-8bcd-e4100585b74f.jpg', 8.1, 67483, 'Доктор Тривз находит Меррика в «фрик-шоу». Внешность его настолько ужасающая, что ему приходится носить просторное одеяние, чтобы никто не увидел его пугающих наростов по всему телу. Забрав Меррика в больницу после очередного избиения хозяином, Тривз с удивлением обнаруживает в нем человека интеллектуально развитого и духовного. Профессиональный интерес сменяется состраданием, феномен становится моден в высшем свете, сама королева благословляет оставить его в больнице навсегда.', 163);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (142, 'Торжество', 'Festen', 1998, 'fullHD', '77276f0a-0462-4ddc-93d4-38858c924809.jpg', 7.4, 9755, 'В шикарном загородном особняке намечается торжество. На юбилей почтенного отца большого семейства съезжаются дети и родственники. В зале накрыт изумительный стол, откупорены изысканные вина. За столом нет только одной из дочерей юбиляра, покончившей с собой при таинственных обстоятельствах. Праздник начинается. Старший сын произносит первый тост. Никто не подозревает, что собравшимся нарядным гостям предстоит услышать шокирующую и жуткую правду...', 192);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (143, 'Малхолланд Драйв', 'Mulholland Dr.', 2001, 'fullHD', 'feadb2af-2f8c-4712-88b5-501d3bd1e433.jpg', 7.7, 137841, 'Загадочная девушка, после автомобильной аварии страдающая потерей памяти, выбирает себе имя Рита с рекламного плаката к фильму с Ритой Хейворт и пытается начать новую жизнь в Голливуде. Но тайны прошлого неотступно преследуют ее.Кто были те двое мужчин, что сидели в одной машине с ней и погибли в аварии? Почему полиция подозревает, что она была ими похищена? И случайно ли в ее жизни появляется новая подруга, начинающая актриса Бетти?', 175);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (144, 'Свой человек', 'The Insider', 1999, 'fullHD', '495ef1a4-60e1-4a7b-997c-dbc4b144d992.jpg', 7.6, 29091, 'Джеффри Уайгэнда увольняют с поста вице-президента крупнейшей табачной компании за то, что он протестует против использования в табачной продукции компонента, вызывающего у курильщиков наркотическую зависимость. Лоуэлл Бергман, продюсер популярного телешоу, узнает об этом и убеждает Уайгэнда выступить с разоблачительным интервью по телевидению...Естественно, это очень не нравится столпам табачной индустрии, заверяющих в безвредности производимой продукции. Олигархи принимают самые суровые меры, чтобы информация не стала достоянием гласности. От Уайгэнда уходит жена, Лоуэлла Бергмана отправляют в отпуск. Там, где задействованы большие деньги, бесполезно бороться за справедливость, но Лоуэлл и Уайгэнд не прекращают борьбу.', 151);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (145, 'Взвод', 'Platoon', 1986, 'fullHD', '5c56a885-f2b2-49f4-9997-214c8471af50.jpg', 8, 74745, 'В сентябре 1967 года куда-то в приграничный район между Вьетнамом и Камбоджей прибыл рядовой 25-го пехотного полка Крис Тэйлор. Прибыл, чтобы своими глазами увидеть, как выглядит подлинный ад. Не потусторонний, вымышленный, сочинённый писателями или художниками, а натуральный, вполне земной ад, на территории которого схлестнулись друг с другом сержант Боб Барнс и сержант Илайес Гродин. Они тоже думали, что будут воевать с партизанами-вьетконговцами, но оказалось, что иногда приходится драться со своими.', 170);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (146, 'Однажды в Америке', 'Once Upon a Time in America', 1983, 'fullHD', 'e43c6dab-223e-4ee3-92c9-cd632c2d27e6.jpg', 8.3, 152436, 'В бурные двадцатые годы, когда Америка веселилась под звуки джаза, и каждый бродяга мечтал стать миллионером, в трущобах Нью-Йорка встретились несколько отчаянных парней. Убирая с дороги конкурентов, безжалостно карая предателей и нагло проворачивая хитроумные аферы, они стали королями преступного мира золотой эры «сухого закона». Они поклялись отдать жизнь друг за друга, зная, что самое главное для них — это дружба, долг и справедливость — не утопить в реках крови и бездонном океане денег. Спустя много лет судьба жестоко обошлась с легендарными гангстерами, заставив их исполнить свою клятву. Это случилось однажды в Америке…', 192);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (147, 'Его девушка Пятница', 'His Girl Friday', 1940, 'fullHD', '433344b2-2489-461e-8b39-75a50d9d1c15.jpg', 7.5, 6367, 'Уолтер Берне — главный редактор газеты, Хильди Джонсон — его бывшая жена и лучший репортер. Однажды она сообщает Уолтеру, что выходит замуж и покидает газету. Уолтер все еще любит Хильди, да и лучшего сотрудника терять не хочет, поэтому он дает ей последнее задание — взять интервью у приговоренного к смерти Эрла Уильямса. Это будет ее лучший репортаж, вершина карьеры.', 161);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (148, 'Крепкий орешек', 'Die Hard', 1988, 'fullHD', '04d2a2cc-4b2e-4a9a-a346-60b831fd9f1c.jpg', 8, 302854, 'В суперсовременном небоскребе Лос-Анджелеса полицейский Джон Макклейн ведет смертельную схватку с бандой политических террористов, взявших в заложники два десятка человек, в число которых попадает и его жена. Началось все с того, что парень приехал в город к жене, оказался на рождественском приеме, а кончилось настоящей войной...', 123);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (149, 'Индиана Джонс и последний крестовый поход', 'Indiana Jones and the Last Crusade', 1989, 'fullHD', '755ad0c5-1070-4389-86af-cef3a45467d2.jpg', 8.1, 172758, 'На этот раз бесстрашный Индиана разыскивает самую таинственную реликвию в истории человечества — Святой Грааль. В этом археологу помогает его отец, профессор Джонс старший. Теперь под бдительным оком своего отца Индиане предстоит совершить много благородных подвигов и потрясающих открытий. В новых странствиях храброму археологу доведется добыть чашу, которую держал в руках Иисус Христос и получить автограф… самого Адольфа Гитлера.', 135);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (150, 'Великая иллюзия', 'La grande illusion', 1937, 'fullHD', '4d86046e-43b1-4d5a-8cde-cfde600e1b7b.jpg', 7.8, 4530, 'Первая мировая война. Самолет французских летчиков Морешаля и Больде сбит немецким асом фон Рауффенштайном, но оба пилота остались живы и попали в лагерь для военнопленных. Там же находятся несколько британских офицеров, с которыми новички объединяются в работе над тоннелем для побега.После победы французов на Западном фронте Морешаля, Болдье и остальных французских военнопленных переводят в другую тюрьму, где комендантом назначен их «старый знакомый» фон Рауффенштайн. Комендант тепло встречает французов, замечая, что из «его» тюрьмы побег невозможен...', 123);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (151, 'Гладиатор', 'Gladiator', 2000, 'fullHD', '186886d0-2ebc-41c1-8442-d49a7c292e2c.jpg', 8.6, 620263, 'В великой Римской империи не было военачальника, равного генералу Максимусу. Непобедимые легионы, которыми командовал этот благородный воин, боготворили его и могли последовать за ним даже в ад.Но случилось так, что отважный Максимус, готовый сразиться с любым противником в честном бою, оказался бессилен против вероломных придворных интриг. Генерала предали и приговорили к смерти. Чудом избежав гибели, Максимус становится гладиатором.Быстро снискав себе славу в кровавых поединках, он оказывается в знаменитом римском Колизее, на арене которого он встретится в смертельной схватке со своим заклятым врагом...', 102);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (152, 'Спартак', 'Spartacus', 1960, 'fullHD', 'a6f29d99-7994-40d3-922a-a4436a8b79a9.jpg', 7.9, 26471, 'История гладиатора Спартака, его возлюбленной Варинии и честолюбивого римского полководца Красса. Непреодолимая тяга к свободе заставляет Спартака поднять легендарное восстание рабов, ставшее важнейшей вехой мировой истории.', 114);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (153, 'Назад в будущее', 'Back to the Future', 1985, 'fullHD', '8b2cd16e-ab4e-4e6b-93d9-f5cf6e053407.jpg', 8.6, 610911, 'Подросток Марти с помощью машины времени, сооружённой его другом-профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, ещё подростками, и другом-профессором, совсем молодым.', 171);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (194, 'Красавица и чудовище', 'Beauty and the Beast', 1991, 'fullHD', '4d7604e0-49bd-4f18-b115-d1728b561f2f.jpg', 8.3, 312975, 'В заколдованном замке, скрытом в темном лесу, живет ужасное Чудовище. Растопить лед в его сердце и вернуть ему человеческий облик, сняв заклятие, может только прекрасная девушка, которая полюбит его таким, какой он есть.', 198);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (156, 'Отточенное лезвие', 'Sling Blade', 1995, 'fullHD', '3f387747-1108-40a5-94f0-ec280702bf93.jpg', 7.7, 8344, 'Карл после совершенного им жестокого преступления провел двадцать пять лет в сумасшедшем доме. Возвратившись в город своей молодости, в один из южных штатов Америки, он ведет себя спокойно и разумно. Это помогает ему найти работу и подружиться с мальчиком и его матерью-вдовой. Однако появление отвратительного и грубого любовника этой женщины ставит Карла перед мучительным выбором и ведет к резким переменам в жизни всех, вовлеченных в эту историю.', 165);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (157, 'Шарада', 'Charade', 1963, 'fullHD', '5c0c1d6d-27cb-45a1-b969-f45bf0456b25.jpg', 7.9, 22930, 'Очаровательная американка Регги Ламберт, подав на развод, уезжает на курорт, где знакомится с привлекательным незнакомцем Питером Джошуа. По возвращении в Париж ее ждет ужасная новость: ее муж убит при загадочных обстоятельствах, а все семейные сбережения были сняты с банковского счета и исчезли в неизвестном направлении.И вот в жизни героини во второй раз появляется ее недавний знакомый под другим именем, а за ним - целая толпа «однополчан» ее покойного супруга, жаждущих заполучить кругленькую сумму, которую ее благоверный украл во время Второй мировой войны. Все ее преследователи уверены, что она-то уж точно знает о местонахождении злосчастного наследства. По мере того как охотники за «военным трофеем» начинают погибать один за другим, Регине становится все сложней разобраться, кому она может доверять.', 137);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (158, 'История игрушек', 'Toy Story', 1995, 'fullHD', '19b5ed4f-005e-4add-a99f-d409528b3375.jpg', 7.9, 254265, 'В спальне Энди его игрушки начинают жить своей жизнью, как только он выходит из комнаты. В день рождения мальчика царит паника — все боятся появления новой игрушки, которая перетянет внимание на себя. И только любимчик Эдди, ковбой Вуди, ни о чем не переживает. Однако, когда мальчик получает в подарок фигурку астронавта Базза Лайтера, Вуди очень быстро оказывается забыт. И тогда ковбой решает вернуть себе первое место в сердце Энди.', 127);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (159, 'Собачий полдень', 'Dog Day Afternoon', 1975, 'fullHD', '2d624862-bb12-456e-b611-494e7af3a7f2.jpg', 7.7, 19721, 'В жаркий бруклинский полдень трое воодушевленных неудачников решают ограбить банк. Их план практически сразу выходит из под контроля — один из них трусит и сбегает, а через некоторое время банк оказывается окружён полицией, толпами зевак и тележурналистами. Так «хорошо спланированное» ограбление превращается в цирк.', 140);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (160, 'Три цвета: Красный', 'Trois couleurs: Rouge', 1994, 'fullHD', 'ab5ca212-2299-4c34-b5c9-1b34255a8db8.jpg', 7.8, 12839, 'Красивая девушка-модель выясняет, что её новый знакомый, судья на пенсии, очень любит вторгаться в личную жизнь других людей.', 162);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (161, '12 обезьян', 'Twelve Monkeys', 1995, 'fullHD', '0740309c-5d25-40c8-8f92-f1e803d98344.jpg', 7.8, 165644, '2035 год... Чудовищный, неизлечимый вирус уничтожил пять миллиардов человек, то есть 99% населения Земли. Оставшиеся в живых люди вынуждены обитать под землей.Уголовник Джеймс Коул добровольно отправляется в опасное путешествие на машине времени. Он должен попасть в прошлое, чтобы помочь ученым найти источник возникновения этого ужасного вируса и раскрыть загадку таинственных «Двенадцати обезьян»...', 156);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (162, 'Парни что надо', 'The Right Stuff', 1983, 'fullHD', 'ff0566f0-89de-4d60-a914-e4ee7f1cac09.jpg', 7, 3494, 'Фрагментарная история американской астронавтики с 1947 по 1963 год, когда после долгих и трагических испытаний американцы, наконец, вышли в космос.', 158);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (163, 'Тень сомнения', 'Shadow of a Doubt', 1942, 'fullHD', 'c79dcee9-e316-4c89-8116-9629b99499dc.jpg', 7.5, 5966, 'Молодая женщина узнаёт, что посещающий её «дядя Чарли» - не тот, кем кажется.', 126);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (164, 'Убийство', 'The Killing', 1956, 'fullHD', '64568324-8a3e-4c47-9c04-81e19488cd23.jpg', 7.7, 8968, 'Бывший заключенный Джонни Клэй планирует ограбление ипподрома, надеясь сорвать куш в 2 миллиона. Для осуществления тщательного проработанного плана он привлекает еще четырёх человек — кассира, продажного полицейского, бывшего алкоголика и бармена. Но всё пойдёт не по плану, потому что один из сообщников решил внести в него свои изменения.', 148);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (165, 'Полуночный ковбой', 'Midnight Cowboy', 1969, 'fullHD', 'c87d12cd-e2b9-4d6a-9c80-a9822b84cfea.jpg', 7.7, 10449, 'Джо Бак, жизнерадостный и наивный парень из крохотного техасского городка, направляется в Нью-Йорк, чтобы использовать свои незаурядные сексуальные способности для удовлетворения потребностей богатых женщин за плату. Но дела у него идут не слишком хорошо, и вскоре уличный бомж-туберкулезник Риццо убеждает Джо, что ему необходим менеджер.Хотя Джо не в восторге от того, что ему приходится обслужить в сортире гомосексуалистов, он и Риццо становятся настоящими друзьями. Они хотят заработать много денег и уехать во Флориду...', 166);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (166, 'Терминатор', 'The Terminator', 1984, 'fullHD', '4eae79dd-9a6b-44d4-b749-0e4124443ef9.jpg', 8, 299351, 'История противостояния солдата Кайла Риза и киборга-терминатора, прибывших в 1984-й год из пост-апокалиптического будущего, где миром правят машины-убийцы, а человечество находится на грани вымирания. Цель киборга: убить девушку по имени Сара Коннор, чей ещё нерождённый сын к 2029 году выиграет войну человечества с машинами. Цель Риза: спасти Сару и остановить Терминатора любой ценой.', 140);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (167, 'Земляничная поляна', 'Smultronstället', 1957, 'fullHD', '6bd1e292-1e4b-4f43-8ded-7dfe0e37e0cc.jpg', 8, 22674, '78-летний профессор из Стокгольма вспоминает и пересматривает разочарования своей долгой жизни. Вместе с женой сына он едет на машине на вручение почетной докторской степени, посещая по пути места, где прошла его молодость, встречая разных людей и старых знакомых, вспоминая сны и былое.', 193);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (168, 'Харви', 'Harvey', 1950, 'fullHD', '561b99ac-de44-4729-91c1-6fe2d719e593.jpg', 7.7, 2501, 'Элвуд П. Дауд, человек, упивающийся собственным красноречием, добр настолько, что его доброта захлестывает жизнь всех вокруг. Как-то вечером Элвуд возвращается домой и видит здоровенного кролика, метра два ростом, по имени Харви, подпирающего фонарный столб. Невидимый для всех остальных, Харви становится его другом и следует за ним повсюду, очень мешая семье Элвуда. Родные считают, что Элвуд окончательно свихнулся и его следует поместить в сумасшедший дом...', 135);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (169, 'Четыреста ударов', 'Les quatre cents coups', 1959, 'fullHD', 'd538cf0f-5379-4cec-87ee-32bb2ca69195.jpg', 8.1, 23113, '12-летний Антуан Дуанель — трудный подросток. Его мать занята личной жизнью, и у нее нет ни времени, ни желания вникать в проблемы сына. Отчим — человек слабохарактерный, не имеет влияния ни на жену, ни на сына. Учитель лишь наказывает мальчика. Антуан и его приятель все реже посещают школу и убегают из дома.', 191);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (170, 'Эд Вуд', 'Ed Wood', 1994, 'fullHD', '51ad1bf5-4256-4477-8ef4-c8935f3a9cbc.jpg', 7.6, 31215, 'Фильм рассказывает истинную историю странной и пестрой жизни самой одиозной фигуры американского кино - Эда Вуда, признанного худшим режиссером за всю историю Голливуда!', 159);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (171, 'Быть или не быть', 'To Be or Not to Be', 1942, 'fullHD', '09314c4a-62c8-4797-9504-45961c54258a.jpg', 7.8, 2380, 'Действие происходит в Польше до и во время немецкой оккупации. В одном театре Варшавы работают муж и жена - Йосиф и Мария Тура. Ставят антинацистскую пьесу, но ее запрещают, и приходится играть «Гамлета». Чрезвычайно тщеславный и ранимый Йосиф Тура играет самого принца датского, один из зрителей, молодой и красивый летчик, встает и уходит из зала в самый ответственный для артиста момент, когда произносится знаменитый монолог «Быть или не быть». Откуда знать актеру, что именно эти слова были для офицера паролем, указывающим, что можно идти в гримерную красавицы Марии Тура...', 129);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (172, 'Ганди', 'Gandhi', 1982, 'fullHD', '0f57eb35-4d37-4e31-9584-b8c6474c47aa.jpg', 8.1, 29246, 'В 1869 году, когда Ганди родился, его страна ещё была украшением Британской империи и одной из драгоценностей королевы Виктории. 30 января 1948 года, в день его убийства, Индия была свободной. Это стало плодом его трудов, трудов долгой титанической жизни.', 168);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (173, 'Лев зимой', 'The Lion in Winter', 1968, 'fullHD', 'f5b69a63-fb30-4894-aa73-c25f22529462.jpg', 7.7, 3804, '1183 год. Во время Рождественских празднеств стареющий король Англии Генрих II должен назвать имя наследника.На это событие прибывают жена короля Элеанора Аквитанская, которая провела десять лет в тюрьме за участие в заговоре против монарха, любовница короля - тщеславная принцесса Алэ, ее брат, король Франции Филипп II Август и трое сыновей Генриха II: Ричард Львиное Сердце, Джеффри и Джон. Все члены семьи люто ненавидят друг друга. Их объединяет лишь одно - непомерная жажда власти и готовность пойти на любое предательство ради нее.', 170);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (174, 'На игле', 'Trainspotting', 1995, 'fullHD', '9133dab1-60a1-4991-9fe1-ade42bb8b949.jpg', 7.9, 184017, 'История четырёх друзей-наркоманов в Эдинбурге 1990-х годов. Кто-то из них пытается завязать, а кто-то озабочен только тем, как достать очередную дозу.', 154);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (175, 'Бонни и Клайд', 'Bonnie and Clyde', 1967, 'fullHD', 'd97e64c1-6c39-445f-a70e-4e2b8733f8f6.jpg', 7.7, 25057, 'Молодые и отчаянные любовники Бонни и Клайд легко и изящно грабят банки в 1930-е. Но их романтизм и «робингудство» довольно быстро перерастают в лужи и реки крови, в хаос и смерть.', 162);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (220, 'Французский связной', 'The French Connection', 1971, 'fullHD', 'a1acfa79-af45-46f1-a651-c00d44e7e575.jpg', 7.6, 11251, 'Сюжет фильма крутится вокруг поимки нью-йоркскими стражами порядка банды преступников, занимающихся транспортировкой наркотиков из Франции. Полицейский Попай - его так прозвали в честь героя известного мультфильма - уверенно идет по следу гангстеров, попадая в самую гущу жизни огромного города.', 133);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (176, 'Всё о моей матери', 'Todo sobre mi madre', 1999, 'fullHD', '06a45137-6fb2-4aa9-a110-dcc980827400.jpg', 7.8, 23276, 'На мать-одиночку Мануэлу обрушивается самое ужасное из земных несчастий — в автокатастрофе погибает её единственный сын Эстебан. Подвергнувшись спонтанному порыву, убитая горем женщина возвращается в город своей бурной юности — Барселону. Там она встречается с призраком Прошлого, чьи уродливые когти безжалостно царапают судьбы людей в Настоящем. Мануэле предстоит встреча с отцом Эстебана и его окружением, от которых она сбежала 16 лет назад.', 119);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (177, 'Это — Spinal Tap', 'This Is Spinal Tap', 1984, 'fullHD', '540c7058-e0d8-41b7-937b-4df16f0d8608.jpg', 6.9, 3521, 'Несколько месяцев из жизни стареющей британской рок-группы Spinal Tap, постепенно скатывающейся с высот былой славы на самое дно музыкального мира во время прощального турне по Соединенным Штатам.', 196);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (178, 'Человек дождя', 'Rain Man', 1988, 'fullHD', '8985f9e0-b4da-4c7a-b46f-55d2dc3cb626.jpg', 8.2, 352201, 'Грубоватому и эгоистичному молодому человеку Чарли в наследство от отца достались лишь розовые кусты да «Бьюик» 1949 года, а львиная доля наследства уходит его брату-аутисту Раймонду. Задавшись целью отобрать «свою долю», Чарли похищает старшего брата. Но когда выясняет, что Раймонд обладает недюжими математическими способностями, памятью и внимательностью, решает использовать это в корыстных целях.', 108);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (179, 'Телесеть', 'Network', 1976, 'fullHD', '13278f07-3da3-4669-8116-8f85a553ab85.jpg', 7.7, 9582, 'Постоянный «гвоздь программы» новостей телестанции UBS-TV Говард Били погорел: во время прямого эфира у него случился нервный срыв. По иронии, публичное бесчинство подняло его и без того баснословный рейтинг, к неожиданному ликованию боссов UBS.Как следствие, прославившись «безумным пророком прямого эфира», вскоре он превратился в пешку для безжалостного теленачальства, которое выдаивало из него сумасшедшие выходки при любом удобном случае. Само собой, когда «пророк» стал не впрок, с ним надо было срочно что-то решать, желательно перед камерой, и при полной аудитории.', 171);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (180, 'Носферату, симфония ужаса', 'Nosferatu, eine Symphonie des Grauens', 1922, 'fullHD', '8c06dda3-4573-4d4f-a4e7-8b89fa3926cb.jpg', 7.7, 18338, 'Начало XIX века. Молодой служащий Хуттер отправляется из Бремена в карпатские леса в замок зловещего графа Орлока, решившего перебраться в город. Хуттер выясняет, что Орлок — вампир, и от его заражающего укуса парня спасает лишь супруга Элен.', 141);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (181, 'Карты, деньги, два ствола', 'Lock, Stock and Two Smoking Barrels', 1998, 'fullHD', '80ea0eac-3e0c-469f-aa47-7a9623da02da.jpg', 8.6, 495349, 'Четверо молодых парней накопили каждый по 25 тысяч фунтов, чтобы один из них мог сыграть в карты с опытным шулером и матерым преступником, известным по кличке Гарри-Топор. Парень в итоге проиграл 500 тысяч, на уплату долга ему дали неделю.В противном случае и ему и его «спонсорам» каждый день будут отрубать по пальцу, а потом... Чтобы выйти из положения, ребята решили ограбить бандитов, решивших ограбить трех «ботаников», выращивающих марихуану для местного наркобарона. Но на этом приключения четверки не заканчиваются...', 140);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (182, 'Перекресток Миллера', 'Miller''s Crossing', 1990, 'fullHD', 'c290abae-692f-4bc8-8ecc-c3baf42f8cb6.jpg', 7.6, 26257, 'Америка тридцатых годов. Время сухого закона. Преступные кланы в любой момент готовы развязать кровавую войну за контроль над поставками нелегального алкоголя. Том Рейган — умный и авторитетный преступник, бывший советник одного из мафиозных боссов. Он своего рода антигерой, абсолютно аморальный, эгоистичный и подлый человек.Но тем не менее своими незаурядными способностями оставаться живым после самых крутых разборок вызывает искренние симпатии. Он умело балансирует между двумя готовыми в любой момент сорваться бандами, пытаясь удержать их от начала войны. Но долго так продолжаться не может, и у Тома возникают такие проблемы, от решения которых будут зависеть судьбы слишком многих людей…', 200);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (190, 'Наёмный убийца', 'Dip huet seung hung', 1989, 'fullHD', '8a83e019-3bf6-42d5-881d-6e73d76100ea.jpg', 7.8, 9554, 'История о двух мужчинах, которые становятся друзьями, потому что не желают продаваться, не желают вести жизнь, не отвечающую их чувствам и устремлениям. Джеффри - профессиональный убийца, который, выполняя задание, случайно лишает зрения певицу Дженни.Между слепой певицей и убийцей возникает взаимная привязанность, но самые близкие отношения у Джеффри завязываются с идущим по его следу полицейским инспектором, который признает в наемном убийце родственную душу.Джеффри хочет оплатить Дженни операцию по восстановлению зрения, но, чтобы добыть деньги, он должен согласиться на совершение еще одного, последнего, как он надеется, задания.', 149);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (183, 'Дилижанс', 'Stagecoach', 1939, 'fullHD', '047faa92-028f-4b93-80d9-6b861d0b13b7.jpg', 7.5, 4656, 'Из городка Тонто в Нью-Мехико выезжают на дилижансе несколько человек. Док Бун, пьяница, давно выгнанный из гильдии врачей. Даллас, проститутка, чьи сексуальные приключения так разозлили местных женщин, что те выгнали ее из своего не самого высшего общества. Хэтфилд, шулер, выдающий себя за джентльмена-южанина, у которого свои причины покинуть Тонто.Он тем не менее делает вид, что вызвался сопроводить беременную Люси к ее мужу, кавалеристу. Хенри Гэйтвуд, помпезный банкир, садится в дилижанс с небольшим саквояжем, который он не выпускает из рук.Сэмюэл Пикок, торговец виски, везет ящик образцов. Эти шесть человек составляют список пассажиров, а наверху сидит кучер Бак, верзила, ненавидящий индейцев, и крутой, грубый, но честный и простодушный Керли, представитель закона с дробовиком.Через какое-то время уже в пути к ним присоединяется Ринго Кид, у которого охромела лошадь. Дилижанс тронулся, ждите приключений!', 158);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (184, 'Генрих V: Битва при Азенкуре', 'Henry V', 1989, 'fullHD', '5a0bef9d-d267-4a7c-9626-00420700e63b.jpg', 7.1, 1534, '1415 год. Претендуя на титул короля Франции, молодой английский монарх Генрих V, вторгается на земли, которые он считает своими по праву. Несмотря на крайне тяжелую военную кампанию, английское войско продолжает одерживать победы. Но в местечке Азенкур, ослабленная армия англичан сталкивается с многократно превосходящими силами французов. Несмотря на это, Генрих, король - воин, решает дать бой, который войдет в историю...', 150);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (185, 'Большой куш', 'Snatch', 2000, 'fullHD', 'dda3c556-d102-442e-be63-29b819559134.jpg', 8.5, 528490, 'Фрэнки Четыре Пальца должен был переправить краденый алмаз из Англии в США своему боссу Эви, но, сделав ставку на подпольный боксерский поединок, он попал в круговорот весьма нежелательных событий. Вокруг него и его груза разворачивается сложная интрига с участием множества колоритных персонажей лондонского дна — русского гангстера, троих незадачливых грабителей, хитрого боксера и угрюмого громилы грозного мафиози. Каждый норовит в одиночку сорвать большой куш.', 141);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (186, 'День сурка', 'Groundhog Day', 1993, 'fullHD', 'c99c7b8a-9eb9-4a42-9ce0-4274612be93d.jpg', 8.1, 472188, 'Телевизионный комментатор Фил Коннорс каждый год приезжает в маленький городок в штате Пенсильвания на празднование Дня сурка. Но на этот раз веселье рискует зайти слишком далеко. Время сыграло с ним злую шутку: оно взяло да и остановилось.Теперь на календаре Фила чернеет одна и та же дата - 2 февраля, из которой он никак не может выбраться. Неунывающий ведущий пытается извлечь выгоду из своего комичного положения: впереди у него уйма времени и безмятежное предсказуемое будущее.Отныне с ним не случится ничего плохого... и ничего хорошего. У Фила осталась одна заветная мечта, простая и незамысловатая - 3 февраля...', 152);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (188, '39 ступеней', 'The 39 Steps', 1935, 'fullHD', '2a4965a2-a35a-441e-a6b8-0d4ca9e62c73.jpg', 7.4, 6323, 'Ричард знакомится в Лондонском мюзикхолле с Аннабеллой, которая просит укрыть ее от идущих по ее следу убийц. Ричард не воспринимает это всерьез, но разрешает ей переночевать у него. Той же ночью девушка вваливается в его спальню с ножом в спине…Бегущего в панике Ричарда принимают за убийцу-маньяка и полиция всей Англии начинает охоту. Чтобы доказать свою невиновность, ему придется пройти все круги Ада… ', 127);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (189, 'Игры разума', 'A Beautiful Mind', 2001, 'fullHD', '99c385d7-0332-411d-8870-a8531d1e83fe.jpg', 8.5, 476458, 'От всемирной известности до греховных глубин — все это познал на своей шкуре Джон Форбс Нэш-младший. Математический гений, он на заре своей карьеры сделал титаническую работу в области теории игр, которая перевернула этот раздел математики и практически принесла ему международную известность.Однако буквально в то же время заносчивый и пользующийся успехом у женщин Нэш получает удар судьбы, который переворачивает уже его собственную жизнь.', 126);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (191, 'Неприкасаемые', 'The Untouchables', 1987, 'fullHD', '7d4f3299-0218-457b-b62c-02761d015024.jpg', 7.8, 42961, 'Полиция борется с королем преступного мира, знаменитым гангстером Аль Капоне.', 194);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (192, 'Кинг Конг', 'King Kong', 1933, 'fullHD', '18a32470-52e6-4abf-81c4-b53bba0b7b92.jpg', 7.1, 9240, 'На отдаленном, диком острове научная экспедиция захватывает громадную человекообразную обезьяну и, не мудрствуя лукаво, привозит ее в Нью-Йорк для показа праздной публике.Кто бы мог подумать, что этот жуткий монстр, способен на такое тонкое чувство, как любовь - эта чертова обезьяна, жить не может без миниатюрной и нежной главной героини...', 179);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (195, 'Будучи там', 'Being There', 1979, 'fullHD', '6e46274a-d4d1-4480-b13b-8791e4ca6c12.jpg', 7.7, 4770, 'Садовник, вся жизнь которого прошла в уходе за садом и телевизором, оказывается без работы, поскольку его прежний хозяин умер, а новые хозяева выставляют его на улицу. Зная внешний мир только по программам телевидения и общению с чернокожей кухаркой, он, делая первые неуверенные шаги в незнакомом для него мире, тут же попадает под колеса лимузина богатой дамы и оказывается в ее доме, где ему предстоит познакомиться и очаровать ее мужа и начать свое восхождение в мир влиятельных людей...', 193);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (196, 'Планета обезьян', 'Planet of the Apes', 1967, 'fullHD', '29d420b4-0cfb-4097-8bb3-a6b5033bb0a1.jpg', 7.7, 22592, 'В 3978 году космический корабль землян терпит крушение на далекой планете. Выжившие в катастрофе астронавты удивляются, как она похожа на их дом. Вскоре они узнают, что планета населена разумными обезьянами и деградировавшими до животного состояния людьми. Обезьяны захватывают астронавтов в плен, но после продолжительных пыток один из них совершает побег вместе с симпатичной девушкой-шимпанзе, которая открывает ему страшные тайны.', 128);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (197, 'Клерки', 'Clerks', 1994, 'fullHD', '60cb5607-9b52-48f5-a609-d7c93084000d.jpg', 7.7, 42697, 'Один день из жизни Данте и Рэндала — приятелей, которые работают в небольшом продуктовом магазине и пункте видеопроката в захудалом районе Нью-Джерси.', 165);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (198, 'Инопланетянин', 'E.T. the Extra-Terrestrial', 1982, 'fullHD', 'c0a3c0ba-1b42-40dd-bebb-b1117f3ad89f.jpg', 7.8, 87883, 'Инопланетянин прилетает на землю в составе научно-исследовательской группы с мирными намерениями. Специалисты из NASA замечают приближение летающей тарелки и решают, что обязаны отловить хотя бы одну из инопланетных тварей. Несчастные существа улетают так спешно, что забывают захватить одного из коллег.', 110);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (199, 'Рио Браво', 'Rio Bravo', 1958, 'fullHD', '4a4c69a4-fcfe-4d0c-85d8-9205978a9c72.jpg', 7.5, 4149, 'Шериф маленького городка Рио Браво Джон Ченс арестовывает убийцу. Брат арестованного, известный бандит, собирает самых отчаянных головорезов со всей округи для его освобождения.Город наводнен преступниками, но Ченс принимает вызов. На помощь к шерифу приходят лишь пьяница, певица и молодой, но быстрый стрелок. Горстка смельчаков стоит за правое дело...', 117);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (200, 'О, где же ты, брат?', 'O Brother, Where Art Thou?', 2000, 'fullHD', '6003b784-2c3c-4e85-a3d2-991323cf6fdf.jpg', 7.4, 32021, 'У мошенника Эверетта МакГилла на воле срочное дело, но как убежать из тюрьмы, если ты скован одной цепью с двумя заключенными? МакГилл рассказывает своим сокамерникам историю о припрятанном миллионе долларов и о том, что скоро все это богатство окажется под водой.Он обещает разделить награбленное на троих, и его тюремные братья соглашаются отправиться на спасение денежек. Но о том, ради чего на самом деле затеяна вся эта одиссея, знает только Эверетт.', 129);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (201, 'Полуночная жара', 'In the Heat of the Night', 1967, 'fullHD', '9c588dd1-2f8c-4712-8447-049f87d89a59.jpg', 7.6, 5491, 'В Америке 60-х годов, когда расовые предрассудки еще были сильны, белый шериф из провинциального городка вынужден объединить усилия с темнокожим детективом из Филадельфии для расследования жестокого убийства.Их взаимная неприязнь на расовой почве подкрепляется абсолютным несходством характеров и различными методами ведения следствия. Таким образом, расследование преступления превращается в личную разборку между крутыми полицейскими. Но чтобы выйти на след таинственного убийцы им нужно научиться работать вместе.', 169);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (202, 'Проклятый путь', 'Road to Perdition', 2002, 'fullHD', 'c3a6732c-7e47-4606-b04b-227b352a84b4.jpg', 7.6, 112773, 'Внешне вполне среднестатистический американец Майкл Салливан живёт жизнью нормального гражданина 30-х годов XX века. Он хороший отец, крепкий семьянин, ответственный работник; но одно не дает покоя его старшему сыну Майклу — куда именно отец уезжает на своей машине каждое утро и что за люди окружают его — в костюмах идеального покроя, но со странной хитрецой в глазах? Однажды Майкл забирается на заднее сиденье машины отца и становится свидетелем его работы. Проблема в том, что Майкл Салливан — самый настоящий гангстер, выполняющий деликатные поручения, где нет места лишним свидетелям. Из-за этого жизнь его сына оказывается под угрозой. Чтобы спасти его, Майкл вынужден пойти против боссов мафии.', 117);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (266, 'Блэйд 2', 'Blade II', 2002, 'fullHD', 'b033b97d-eacf-4469-a63f-40195280b25e.jpg', 6.8, 87183, 'Мир вампиров в ужасе от появления новой расы суперкровососов. Именно благодаря этому легендарный Блэйд и его учитель Уистлер вынуждены объединиться со своими кровными врагами - Кровавой Стаей, элитным отрядом вампиров-воинов.', 181);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (203, 'Тихий человек', 'The Quiet Man', 1952, 'fullHD', '3dff65c3-daa6-4e1c-9b52-da603012873b.jpg', 6.8, 1215, 'Американский боксер Шон Торнтон возвращается к себе на родину в Ирландию, где влюбляется в чудесную девушку Мэри Кэт. Она - его идеал, такое светлое чувство он испытал впервые.Однако он подзабыл, что за народ живет в его родных краях. Ему приходится иметь дело с местными традициями и обычаями (включая выплату «калыма»).Да и тупоголовый упрямый братец юной феи далеко не подарок, он ведь главный забияка и драчун в городке. Но храброму Шону все нипочем - ведь он влюблен, решителен и смел, крепкий парень и может постоять за себя, боксерская школа не забыта.', 153);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (204, 'Избавление', 'Deliverance', 1972, 'fullHD', 'ab8f2475-b791-4147-b0e6-60bfbb705d5d.jpg', 7.3, 5269, 'Четверо отправляются в путешествие в дикую и пустынную местность в Аппалачах. Они спускаются вниз по реке на двух лодках. В их намерения входит просто отдохнуть, развеяться и посмотреть живописные места...Они не знали, что попадут в засаду к малограмотным местным горцам, головорезам и садистам. Злодеи «рады» туристам из города, им не терпится по-своему развлечься с вновь прибывшими. Для четверых путников наступает решительный момент...', 142);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (205, 'Белоснежка и семь гномов', 'Snow White and the Seven Dwarfs', 1937, 'fullHD', 'eb33affa-a534-4454-82fe-a06a992cb05e.jpg', 7.9, 108393, 'Экранизация знаменитой немецкой сказки братьев Гримм о Белоснежке, жившей в замке со злой мачехой-королевой, которая очень гордилась своей красотой. Узнав от волшебного зеркальца, что Белоснежка стала самой прекрасной девушкой на свете, завистница решила погубить прелестную падчерицу. Но бедная девушка не погибла в лесу, а наоборот, встретила там настоящих друзей - забавных семерых гномов: Профессора, Ворчуна, Весельчака, Скромника, Чихоню, Соню и Молчуна...', 163);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (206, 'Близкие контакты третьей степени', 'Close Encounters of the Third Kind', 1977, 'fullHD', '890d1f45-f87f-44c3-8520-74b7cb692fd1.jpg', 7.2, 22373, 'Сбои в подаче электроэнергии, возвращение из ниоткуда самолетов, исчезнувших в 1945 году, обескураживают ученых. Наименее скептичные люди науки расценивают эти явления, как прямое доказательство существования разумной инопланетной формы жизни. Выехавший на повреждение электрик Рой Нери встретился с настоящим НЛО: автомобиль, в котором ехал Рой, попал под мощный пучок света, затем над шоссе пронеслись 4 светящихся шара и пропали за горизонтом. После контакта с внеземной цивилизацией Рой оказывается во власти странных видений, и это происходит не только с ним.', 115);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (207, 'Тонкий человек', 'The Thin Man', 1934, 'fullHD', '210e4c7b-8710-40ef-91ec-4bfa912af404.jpg', 7.2, 1686, 'В канун Рождества убита секретарша богатого изобретателя Ваната. Все подозрения падают на него потому, что полиция не может найти профессора в городе.', 113);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (208, 'Человек, которого не было', 'The Man Who Wasn''t There', 2001, 'fullHD', 'c569be7e-c71e-487c-944e-c95562a6a485.jpg', 7.6, 25368, '1949 год, Санта-Роза, Калифорния. Молчаливый парикмахер Эд Крэйн неторопливо стрижёт клиентов в своём салоне, в то время как его жена крутит шашни со своим боссом, галантерейщиком Большим Дэйвом, который недавно скопил деньги на новый магазин.Внезапно Эду выпадает возможность разбогатеть на зарождающемся бизнесе химической чистки одежды. Чтобы обзавестись капиталом, он шантажирует Большого Дэйва, понимая, что успеха в жизни он может добиться, лишь пойдя на крайние меры. Кажется, что в хитром замысле Эда нет изъянов. Однако вскоре он узнаёт, что, приняв это роковое решение, он подписал свой смертный приговор.', 146);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (209, 'Большой Лебовски', 'The Big Lebowski', 1998, 'fullHD', 'a929aad0-c66e-42d5-9ef3-65114ddff671.jpg', 7.8, 287949, 'Лос-Анджелес, 1991 год, война в Персидском заливе. Главный герой по прозвищу Чувак считает себя совершенно счастливым человеком. Его жизнь составляют игра в боулинг и выпивка. Но внезапно его счастье нарушается, гангстеры по ошибке принимают его за миллионера-однофамильца, требуют деньги, о которых он ничего не подозревает, и, ко всему прочему, похищают жену миллионера, будучи уверенными, что «муж» выплатит за нее любую сумму.', 189);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (210, 'Призрачный мир', 'Ghost World', 2001, 'fullHD', '4dbfb5ac-ed91-4d87-99aa-662bccbc4e7a.jpg', 7.1, 18809, 'Подруги Энид и Ребекка, закончив школу, решили не идти в колледж, а отдохнуть от учёбы. Однажды девицы решают разыграть одинокого неудачника Сеймура, торгующего старыми виниловыми пластинками. Однако со временем Энид начинает необъяснимым образом тянуть к этому одинокому и застенчивому человеку. Сближаясь с ним, она отдаляется от Ребекки.', 176);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (211, 'Мулен Руж', 'Moulin Rouge!', 2001, 'fullHD', '8a50303c-1d3b-4544-959b-65705dae1283.jpg', 7.8, 80113, 'Париж, 1899 год. Знаменитый ночной клуб «Мулен Руж» — это не только дискотека и шикарный бордель, но и место, где, повинуясь неудержимому желанию прочувствовать атмосферу праздника, собираются страждущие приобщиться к красоте, свободе, любви и готовые платить за это наличными.За любовь самой известной куртизанки Парижа, блистательной Сатин, борются двое мужчин, один из которых — бедный писатель Кристиан, с головой окунувшийся в сумасшедший мир ночных развлечений, второй — богатый герцог, готовый купить весь «Мулен Руж», лишь бы Сатин провела с ним ночь.', 111);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (212, 'Птицы', 'The Birds', 1963, 'fullHD', 'ead1e39c-2740-46de-ae1e-fd4616b71ec4.jpg', 7.6, 38854, 'Классический фильм А.Хичкока, в котором ужасающая картина нападения птиц на американский поселок переплетается с историей любовных взаимоотношений молодой женщины с понравившимся ей мужчиной.', 160);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (213, 'Жан де Флоретт', 'Jean de Florette', 1986, 'fullHD', 'e281ed6a-6854-4e38-a4f2-efb277deef44.jpg', 7.9, 2542, 'Вернувшись с военной службы, молодой Юголен решил выращивать цветы, но гвоздикам нужна вода. Богатый дядюшка готов помочь племяннику в надежде, что тот продолжит его род. Он решил прикупить поле с родником у соседа-врага.', 161);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (214, 'Славное будущее', 'The Sweet Hereafter', 1997, 'fullHD', '9fd51e88-81a2-4578-a9d4-b35362d3d14c.jpg', 7, 2369, 'После трагической аварии школьного автобуса в городок приезжает адвокат Митчелл Стивенс. Он встречается с пострадавшими семьями, намереваясь предъявить от их имени иск к компании.Однако, в результате выясняются определенные обстоятельства, заставившие Митчелла иначе оценить случившееся.', 126);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (215, 'Человек, который хотел быть королем', 'The Man Who Would Be King', 1975, 'fullHD', '5465d95d-8e73-4bcf-9719-f02d09e01c62.jpg', 7.8, 3646, 'Воспользовавшись наивностью и необразованностью населения Кафиристана, британские солдаты Дэниел и Пичи предоставляют местным жителям доказательства своего божественного происхождения и достигают вершин власти.', 181);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (216, 'Отныне и во веки веков', 'From Here to Eternity', 1953, 'fullHD', '955122f7-563b-45da-bbe3-634dfb268972.jpg', 7.2, 2419, 'Роберт Ли Пруит после несчастного случая переведен в другую часть. Способный боксер, он отказывается выступать на ринге, ибо во время тренировочного боя нанес своему другу травму, в результате чего тот ослеп.Однако для армейского начальства спорт - неплохой инструмент карьеры, и нежелание рядового Пруита выходить на ринг рассматривается как нечто очень близкое к измене. Именно этот отказ делает Пруита в глазах начальства, и в первую очередь капитана Хомса, подрывным элементом. Среди большого количества весьма колоритных представителей гарнизона выделяются, рядовой Анджело Маджио, который попадает в военную тюрьму, славящуюся своей непримиримостью к смутьянам.Сержант Милтон Уорден, напротив, ненавидя офицерство и как институт и как сумму конкретных лиц, сопротивляется по-своему - безукоризненным знанием своих обязанностей и высоким профессионализмом, делающим его просто незаменимым в роте. Впрочем, его месть начальству принимает и вполне конкретные формы - он заводит роман с женой своего ротного командира Карен Хомс, которая не испытывает к своему мужу ничего, кроме презрения.Однако ни Милтон, ни Карен не питают иллюзий насчет долговечности своего романа, который тем не менее грозит перерасти рамки обычной интрижки и превратиться в большую, всепоглощающую любовь...Пройдет всего несколько дней и наступает седьмое декабря 1941 года, когда японские ВВС нанесут массированный удар по американской военной базе Перл-Харбор на Гавайях и по судьбам героев этого фильма.', 117);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (217, 'Человек на все времена', 'A Man for All Seasons', 1966, 'fullHD', 'aa634767-0cc2-4378-8ea2-d4d45512d4b4.jpg', 7.4, 2345, 'События, исторически достоверно воспроизведенные на экране, происходят в Англии XVI века, во времена правления короля Генриха VIII. В основе сюжета — конфликт между королем и лордом-канцлером Томасом Мором, великим гуманистом, государственным деятелем, выдающимися юристом и философом.', 129);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (218, 'Игра на вылет', 'Sleuth', 1972, 'fullHD', 'beba4fc4-38c9-443c-a48f-d90aec129ff2.jpg', 7.9, 9578, 'Преуспевающий автор детективных романов сэр Эндрю Уайк приглашает к себе в гости Майло Тиндла, любовника своей жены. Тот прибывает в роскошный особняк писателя, где получает неожиданное предложение. Сэр Эндрю знает об их связи и даже готов отпустить жену.Но так как она привыкла жить в роскоши, небогатому ловеласу необходимо инсценировать ограбление дома Уайков. Сэр Эндрю получит страховку, а Майло продаст украденное и сможет дать любовнице достойное содержание.', 163);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (219, 'Можешь рассчитывать на меня', 'You Can Count on Me', 2000, 'fullHD', 'aebd27cc-3847-4c59-aa34-c7e6d48d9e1c.jpg', 6.8, 1514, 'С матерью-одиночкой Сэмми случилось сразу очень много событий. Ее восьмилетний сын Руди начал представлять себе своего отца, которого он не видел, в образе героя. Сама Сэмми возобновляет отношения с одним из предыдущих бойфрендов. На работе у Сэмми новый босс, который вводит свои необычные правила. Ее брат Терри приезжает погостить после того, как несколько месяцев от него совсем не было вестей. Ее бойфренд делает ей предложение, а ее брат предлагает Руди повидаться с его отцом...', 192);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (222, 'Поля смерти', 'The Killing Fields', 1984, 'fullHD', '8ade07e1-7034-461b-b8e4-c6a2d52d4669.jpg', 7.3, 2978, 'Корреспондент «Нью-Йорк Таймс» Сидней Шенберг пишет репортажи о гражданской войне между «красными кхмерами» и правительством. Его незаменимый помощник и друг – добрый, умный и интеллигентный Дит Пран. Как переводчику и проводнику ему нет равных.Когда «красные кхмеры» побеждают, американцы эвакуируются из Камбоджи. Дит Пран отправляет с ними семью, но сам остается с Сиднеем, чтобы помочь ему написать о перевороте.Иностранному журналисту Шенбергу удастся выбраться из страны, но положение Прана совсем иное: он местный и совершенно беззащитен перед революционным террором «красных кхмеров»…', 119);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (223, 'Игрок', 'The Player', 1992, 'fullHD', '1a492aa6-9163-4288-b076-6b6c9fb68ed9.jpg', 7, 5495, 'Крупный чиновник на голливудской киностудии Гриффин Милл наделен правом решать, какой из предлагаемых сценариев запустить в производство. У него сотни врагов, потому что большинству проектов он вынужден говорить «нет». Его начинает запугивать некто, подбрасывая угрожающие записки. Гриффин нервничает и в приступе ярости совершает нелепейшее убийство безвинного драматурга. Он сходится с вдовой убитого, художницей-авангардисткой и пытается решить две трудные задачки: избежать кары за преступление и сохранить руководящее кресло, зашатавшееся в результате студийных интриг.', 159);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (224, 'Схватка', 'Heat', 1995, 'fullHD', 'c3c60bb5-d9e3-4543-949a-fc742ffbf754.jpg', 8, 142660, 'Нил МакКоли - один из лучших преступников Лос-Анджелеса. Ему противостоит лучший детектив Винсент Ханна. Две сильнейшие команды сходятся друг против друга в смертельной схватке.', 149);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (225, 'И твою маму тоже', 'Y tu mamá también', 2001, 'fullHD', '8009a078-b44a-404d-94c7-5cfa946e411b.jpg', 7, 18547, 'Двое друзей, не обремененных моральными принципами и мучимые подростковыми гормонами, ищут под жарким солнцем Мексики приключений. Познакомившись на празднике с испанской красоткой Луизой, чье сердце безнадежно разбито, они приглашают её отправиться в поездку на мифический пляж с романтическим названием «Небесные уста» - в мир фантазий и грез, где исполняются мечты. Решив развеяться, Луиза принимает их приглашение. ', 124);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (226, '100 девчонок и одна в лифте', '100 Girls', 2000, 'fullHD', 'eee2c989-beab-401d-ad3c-551f7e12efa1.jpg', 6.7, 15765, 'Студент колледжа Мэтью оказывается в лифте с девушкой своей мечты. Однако там нет света, и он не видит её лица. Утром парень решает найти покорившую его сердце незнакомку. Всё, что ему известно о ней: она одна из ста девушек женского общежития. Герой решает проникнуть туда и отыскать её.', 139);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (227, '15 минут славы', '15 Minutes', 2001, 'fullHD', '1b57d12c-674e-4aba-b638-55ab5e05556e.jpg', 6.2, 5119, 'Эмиль и Олег, приехав в Нью-Йорк по своим бандитским делам, воруют видеокамеру, и начинают снимать свои криминальные похождения. Очень скоро они переходят от незначительных преступлений к поражающим своей жестокостью убийствам. Желая продемонстрировать свои «подвиги» наибольшему количеству зрителей, они продают видеозаписи на телевидение. Передача, которая решилась пустить это в эфир, моментально становится самой высоко рейтинговой, а наши герои новыми звездами экрана. Но полицейские тоже смотрят телевизор, и тоже не прочь прославиться на всю Америку, пристрелив убийц в прямом эфире...', 130);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (228, 'Круглосуточные тусовщики', '24 Hour Party People', 2001, 'fullHD', 'c4f92095-4293-454a-9b56-f654fd49bb83.jpg', 7.1, 5731, '1976 год, Манчестер. Выпускник Кэмбриджа Тони Уилсон — главный пропагандист культовой группы «The Sex Pistols» на TV. Вдохновленный этим поворотным моментом в истории музыки, он и его друзья основывают новый лэйбл звукозаписи. «Factory Records», где создаются первые альбомы «Joy Division» (ставший позже «New Order») и «The Happy Mondays». Все они стали оригинальными художниками своего времени.', 148);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (229, '28 дней', '28 Days', 2000, 'fullHD', 'b391d9e8-152d-475e-9873-1bc0b8636452.jpg', 6.9, 9394, 'Как должна вести себя молодая, избалованная славой и деньгами писательница? Гвен Каммингс решила, что ей можно все: расстроить свадьбу сестры, напившись до полусмерти, угнать лимузин, разнести вдребезги соседский дом. Но реабилитационный центр для хронических алкоголиков, по мнению нью-йоркского суда, должен ее отрезвить. За 28 дней ей предстоит стать совсем другим человеком.', 168);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (275, 'Добейся успеха', 'Bring It On', 2000, 'fullHD', '24fab321-111d-4de8-af7a-c5462a8e376d.jpg', 6.8, 30069, 'Между девчонками из групп поддержки спортивных команд разгорается нешуточная борьба за звание лучшей. В ход идут самые неожиданные приёмы и ухищрения. Но чтобы стать первой, команде нужно победить в национальном чемпионате, а этого смогут добиться только самые красивые, талантливые, задорные и сексуальные.', 142);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (230, '28 дней спустя', '28 Days Later...', 2002, 'fullHD', '821e56fb-17d5-409f-82e7-f2af3336a156.jpg', 7.5, 220054, 'Группа «зеленых» экстремистов вторгается в центр исследования приматов и выпускает из секретной научной лаборатории обезьяну, зараженную вирусом неудержимой агрессии. Смертельный вирус, передающийся через кровь за считанные секунды, приводит к мгновенному заражению и, соприкоснувшись с любым живым существом, превращает его в кровожадного монстра. 28 дней спустя вся Великобритания охвачена страшной эпидемией: многие эвакуируются, другие ищут безопасные места в надежде спастись. Те, кому посчастливилось не заразиться, вместе с группой военных прячутся в заброшенном доме.', 119);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (231, 'Формула 51', 'The 51st State', 2001, 'fullHD', 'a2783dde-cd4a-45d9-ab0d-4895ccb5a1e7.jpg', 7.2, 17737, 'Химик-фармацевт МакЭлрой изобрел новый супернаркотик и решил сорвать большой куш. Чтобы осуществить задуманное, он отправляется в Ливерпуль. Его босс Ящер приказывает своей помощнице Дакоте убить МакЭлроя.', 173);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (232, 'Шестой день', 'The 6th Day', 2000, 'fullHD', 'fdd38fe1-5f40-402b-a6ff-cef2e5ec221e.jpg', 6.8, 50495, 'В начале третьего тысячелетия самым суровым законом стал «закон Шестого дня». Он запрещал клонирование людей и создание искусственных копий человека. Но огромная подпольная империя вопреки запрету выращивает человечество нового будущего, сотни управляемых теней.Налаженная машина преступления не давала сбоев, пока в ее совершенный механизм не вмешалась случайность: пилот вертолета Адам Гибсон неожиданно приоткрыл непроницаемую завесу заговора. Теперь он – последний рубеж обороны, отделяющий цивилизацию от общества зомби.', 191);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (233, '8 женщин', '8 femmes', 2001, 'fullHD', 'f73b3778-0539-4372-8bd3-2c9314f0eca8.jpg', 7.6, 56576, 'Занесённая снегом французская глубинка. В поместье собирается семья для встречи Рождества. Но праздник не состоится. Хозяин дома убит. 8 женщин, близких хозяину дома, начинают расследование.Каждая из них под подозрением. У каждой есть мотив для убийства. День расследования открывает многие семейные тайны, которые были под семью замками.', 166);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (234, '8 миля', '8 Mile', 2002, 'fullHD', '8fc0696f-957e-46ed-92bc-7d79af05898a.jpg', 7.7, 173060, 'Детройт, 1995 год. Блестящая и многообещающая политика индустриального развития города терпит крах и приводит к хаосу и неразберихе, что в результате выливается в один из самых серьезных в американской истории конфликтов между белым и цветным населением. Люди, мирно жившие рядом, оказались по разные стороны баррикад.Шоссе «8 Миля», отделяющее Детройт от пригорода, становится разделительной полосой между черными и белыми. Происходящее в городе находит свое отражение в музыке. В бедных кварталах пригорода, где главная цель — выживание, для многих обитателей хип-хоп становится эмоциональной отдушиной, средством, помогающим вырваться из жесткой повседневной реальности.', 159);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (235, 'Мой мальчик', 'About a Boy', 2002, 'fullHD', '336d4acc-eab7-457c-a7bb-ecd43ca2f1d8.jpg', 7.4, 33022, 'Возраст Уилла Фримана уже приближается к сорока годам, а он довольно успешно смог избежать в своей жизни обязательств перед кем бы то ни было. Этот состоятельный англичанин никогда не был женат, у него нет детей, у него даже никогда не было постоянной работы.Отец Уилла был автором популярной рождественской песни, и тем самым избавил своего сына от проблем с деньгами. Уилл живёт на проценты, получаемые от использования песни его отца. Чтобы наконец-то повзрослеть и найти себе женщину, Уилл начинает ходить на специально организованные встречи родителей-одиночек, выдавая себя за отца, у которого якобы есть сын. На одной из встреч Уилл встречает двенадцатилетнего Маркуса, сына одной из матерей-одиночек.Мальчик и Уилл привязываются друг к другу и становятся лучшими друзьями. Маркус находит в Уилле понимающего взрослого, который помогает ему справляться с проблемами, а Уилл начинает постепенно заботиться о мальчике, чувствовать перед ним свою ответственность и взрослеть...', 182);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (236, 'О Шмидте', 'About Schmidt', 2002, 'fullHD', '5b80e231-d100-43b7-b5a0-9b4a6bfca5c8.jpg', 7.3, 12955, 'История Уоррена Шмидта, работающего в страховой компании. После ухода на покой он начинает переосмысливать прожитую жизнь, пытаясь понять, смог ли он достичь всех своих мечтаний в карьере, браке и семейной жизни.Дочь Уоррена почти не общается с ним, живет в Денвере и собирается выйти замуж за человека, которого он не одобряет. Что же делать? Шмидт отправляется в поездку через всю страну, чтобы остановить эту свадьбу, а заодно и найти смысл своей собственной жизни.', 195);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (237, 'Адаптация', 'Adaptation.', 2002, 'fullHD', 'bc614fa2-0077-4f3c-8bb4-40292dcba7ac.jpg', 7, 21558, 'Взявшись за адаптацию книги журналистки Сьюзен Орлеан «Похититель орхидей», знаменитый сценарист Чарли Кауфман оказывается в душевном и творческом тупике. Странные чувства, овладевшие им, мешают ему работать. Но однажды Чарли решает описать в сценарии всё происходящее с ним. Вскоре автор замечает, что действительность и вымысел начинают переплетаться самым причудливым и неожиданным образом.', 199);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (238, 'Али', 'Ali', 2001, 'fullHD', 'cfb73019-e169-4f16-9787-cb434387df01.jpg', 7.5, 34754, 'Мохаммед Али является великим героем Америки, кумиром всего мира, и в то же время, одной из самых недооцененных персон XX века. Борясь за гражданские права в родной стране в сложные, бурные годы, когда громкие политические и социальные события коренным образом меняли мировоззрения людей, Али защищал угнетенных и дарил людям новую надежду. История сделала его живой легендой, и теперь вряд ли найдется на планете хоть один человек, который не слышал гордое имя Али.', 183);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (239, 'И пришел паук', 'Along Came a Spider', 2001, 'fullHD', 'c2007086-7a0d-479e-89fb-7af9384f922c.jpg', 6.9, 29070, 'Из элитной школы похищают девочку Меган, дочь сенатора Роуза. Преступник оказывается оригиналом, каких мало: вместо того чтобы спокойно дождаться своего заслуженного выкупа, он начинает играть с полицией в опасную игру, основными участниками которой становятся доктор Алекс Кросс и Джез Флэниган, его новая напарница из секретной службы, охранявшей школу.', 105);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (240, 'Американский пирог 2', 'American Pie 2', 2001, 'fullHD', '6ee010e5-78a6-4822-94ec-d2c84cbb11dc.jpg', 7, 94708, 'Со времен первого фильма прошел год, все герои теперь учатся не в средней школе, а в колледже, и летом на каникулы решают снять загородный дом, где можно весело провести время, поваляться на пляже и погоняться за девчонками, коих там в избытке.Впрочем, проблемы себе найдет каждый из героев: к Джиму собирается приехать та самая «студентка по обмену» Надя, с которой он публично облажался в первом фильме, Кевин понял, что просто друзьями с Викки он быть не может, а Крис никак не может заняться сексом по телефону со своей подругой Хезер, уехавшей на учебу в другой город. В довершение всего Пол Финч начал практиковать тантрический секс, считая дни до прибытия Мамы Стифлера.', 156);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (241, 'Американский психопат', 'American Psycho', 2000, 'fullHD', '12965c2b-2056-4ec3-9514-ce23a632d60c.jpg', 7.2, 177361, 'Днем он ничем не отличается от окружающих, и в толпе вы не обратите на него внимания. Но ночью этот благовоспитанный гражданин превращается в изощренного убийцу, терроризирующего спящий город.Современный дикарь, презирающий законы человечества, питается только испепеляющим пламенем своей ненависти, которая растет с каждым новым преступлением. Лавина ужаса приближается к критической черте. Скоро наступит момент, когда ее уже нельзя будет остановить.', 100);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (242, 'Анатомия', 'Anatomie', 2000, 'fullHD', 'fdd55fa4-06fd-425d-b96e-56f9f1564c02.jpg', 6.4, 2667, 'Студентка медицинского института попадает на учебную практику к известному профессору, но девушка и не подозревала, что ей предстоит изучать странную и жестокую науку: маститый наставник оказывается вовсе не тем, за кого себя выдает.', 100);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (243, 'Зверофабрика', 'Animal Factory', 2000, 'fullHD', '8da66979-1ff6-49d7-9527-78aa34deda8b.jpg', 6.8, 3975, 'За воротами тюрьмы нормальная жизнь заканчивается. Любой несчастный вступивший в стены этого жуткого старого здания обречен жить по чудовищным, волчьим законам, от которых законопослушный человек придет в неописуемый ужас. Здесь татуированные рецидивисты режут и калечат друг друга, устраивают кровопролитные разборки, и «берут в жены» слабаков, которые не могут за себя постоять.Здесь - твоя жизнь больше уже не стоит ничего... Именно в эту тюрьму и попадает герой картины, молодой человек по имени Рон Деккер. Если бы не счастливое стечение обстоятельств, то Деккер не «протянул» бы здесь и месяца. Но Рону повезло: его взял под защиту местный «авторитет» Эрл Коупен - уважаемый «вор в законе», человек опытный и рассудительный. Возникает удивительная дружба между «прожженным» уголовником и юношей, попавшим за решетку по воле случая. И вот эта странная парочка решает совершить побег…', 193);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (244, 'Юбилей', 'The Anniversary Party', 2001, 'fullHD', '8c15d06a-58c7-4fbd-8e52-980749aae196.jpg', 5.9, 218, 'Когда писатель Джо и его жена - актриса Салли устроили вечеринку в честь шестилетней годовщины их непростого брака, гости и хозяева начали говорить друг другу то, чего они никогда не слышали в Голливуде - правду.', 101);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (245, 'Опасная правда', 'Antitrust', 2001, 'fullHD', 'ab10d80f-2343-4939-85b2-bbab0cbfa2ea.jpg', 6.8, 2829, 'Хочешь знать правду? Будь готов стать мишенью… Он считал себя везунчиком в то время, как на самом деле находился на краю пропасти. Майло Хоффман, молодой гений-программист, получил престижное место в суперкорпорации мультимедийного магната Гэри Уинстона, этакого Билли Гейтса нового поколения. Перед Хоффманом открылись перспективы роста, герой уже предвкушал блестящую карьеру, когда...Внезапно за восхитительным фасадом процветающей фирмы перед ним стали проступать истинные ее черты - пожирающего конкурентов монстра, полного опасных тайн. Слишком поздно Майло понял, что стал винтиком в бесчеловечной машине, пешкой в преступной игре лукавого миллиардера. Решится ли пешка бросить вызов Игроку, который может смахнуть ее с доски одним движением мизинца?...', 188);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (246, 'Арарат', 'Ararat', 2002, 'fullHD', '68348d7c-51e1-46b7-97c9-8adbcf34c0d0.jpg', 7.8, 1608, 'Фильм повествует о съемках исторического фильма о геноциде армян 1915 года. Впечатления о событиях почти вековой давности, меняют жизнь восемнадцатилетнего юноши, работающего шофером на съемках этой картины.Параллельно эпическому сюжету, в фильме развивается история личных взаимоотношений Ани — искусствоведа, приглашенного в качестве консультанта на «Арарат», ее мужа, заключенного в тюрьму после покушения на турецкого дипломата и их детей. Ее приемная дочь Клара не верит, что ее отец покончил самоубийством и обвиняет в его смерти Ани.', 158);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (247, 'Искусственный разум', 'Artificial Intelligence: AI', 2001, 'fullHD', 'f9948235-98e7-49e6-ad5d-d34174e4b490.jpg', 7.9, 159660, 'В будущем мире вырвавшегося из-под контроля глобального потепления и пугающих достижений науки, смертные живут бок о бок с удивительными и сложными роботами. Но когда продвинутый прототип робота-ребенка по имени Дэвид программируется на проявление бескорыстной любви, члены его человеческой семьи оказываются неготовыми к последствиям такого чувства.Неожиданно Дэвид оказывается один в странном и опасном мире. С помощью уличного робота Дэвид пускается в поиски загадки своего собственного происхождения.', 124);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (248, 'Астерикс и Обеликс: Миссия Клеопатра', 'Astérix & Obélix: Mission Cléopâtre', 2002, 'fullHD', 'f51ac0b5-0e7a-4734-a535-03fa6815066a.jpg', 7.3, 151887, 'Царица Египта Клеопатра заключает пари с римским императором Юлием Цезарем о том, что её подданные смогут всего за три месяца построить для него грандиозный дворец. Великой чести руководить строительством удостоен архитектор Нумеробис, которого в случае неудачи бросят на растерзание крокодилам.Понимая, что в такие краткие сроки ему не уложиться, Нумеробис вызывает на помощь своего старого друга друида Панорамикса с зельем, дарующим сверхъестественную силу. А весёлые и находчивые друзья Астерикс и Обеликс сопровождают старца в Египет, чтобы помешать проискам Цезаря, не желающего проигрывать Клеопатре.', 190);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (249, 'Быстрый бегун', 'Atanarjuat', 2000, 'fullHD', 'a4e21497-9f81-4c2e-b9c0-c68f31f9619a.jpg', 6.9, 463, 'Двое братьев Амакджуаг (Силач) и Атанарджуат (Быстроногий) бросают вызов злым духам, внесшим раздоры в маленькое кочевое племя инуитов. Атанарджуат завоевывает сердце красавицы Атуат, отвергнувшей ради него хвастливого сына вождя Оки. Поклявшийся отомстить сопернику, Оки со своими родичами нападает на братьев во время сна...', 180);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (250, 'Атлантида: Затерянный мир', 'Atlantis: The Lost Empire', 2001, 'fullHD', '35603f63-3df0-4918-aebb-70a5750f4127.jpg', 7.9, 111961, 'Атлантида... Мечтой найти легендарный затонувший в пучинах океана остров грезили многие смельчаки. Но только юному картографу Майло Тэтчу повезло: в 1914 году в его руки попал таинственный дневник, указывающий путь к Затерянной империи. И вот уже самая могучая подводная лодка в мире под командованием неустрашимого капитана Рурка выходит в открытый океан.Майло и его спутников ждёт множество незабываемых приключений, превосходящих все похождения капитана Немо: схватка с морским чудовищем, древние загадки, буйство стихий, мистические силы и даже встреча с цивилизацией атлантов. И это лишь малая толика того, что ждёт героев на их пути к тайнам великой Атлантиды.', 120);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (274, 'Дневник Бриджит Джонс', 'Bridget Jones''s Diary', 2001, 'fullHD', '49158cbe-c70c-46ba-88df-52b7f19e4df5.jpg', 7.5, 227024, 'Бриджит Джонс заводит дневник, чтобы описывать свои достижения и победы: как она будет избавляться от лишних килограммов и вредных привычек, а также налаживать личную жизнь. Родители хотят сосватать её за сына соседей, скромника Марка, а Бриджит без ума от своего неотразимого начальника Дэниэла. Неожиданно выбор оказывается совсем не простым.', 169);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (251, 'Остин Пауэрс: Голдмембер', 'Austin Powers in Goldmember', 2002, 'fullHD', '6388c0dd-e70f-4381-bdc7-8dd79cb94106.jpg', 5.9, 31097, 'В 1975 году отец Остина Пауэрса — знаменитый английский шпион Нейджел Пауэрс — был похищен голландским злодеем Голдмембером. Теперь, в XX веке, знаменитый шпион Остин Пауэрс решает помочь отцу. Заручившись поддержкой давнего врага Доктора Зло, с помощью его машины времени Остин совершает прыжок во времени.Он оказывается в 1975 году, в эпохе диско. Однако вскоре выясняется, что одержимый идеей завоевать весь мир Доктор Зло, сам был в сговоре с Голдмембером и возможно причастен к похищению отца Остина. Может быть, похищение Нейджела Пауэрса — это всего лишь уловка двух злодеев с целью заманить к себе Остина Пауэрса?Вместе с очаровательной подругой Фокси Клеопатрой Остин пытается распутать злодейские планы Доктора Зло и Голдмембера, чтобы не только выручить своего отца, но и спасти весь мир от этих злодеев.', 148);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (252, 'Автофокус', 'Auto Focus', 2002, 'fullHD', 'ef4f8b19-db5a-4a73-ae53-479b3fadc7c3.jpg', 6.3, 388, 'Сейчас мало кто помнит этого актера, но было время, когда имя Боба Крейна гремело на всю Америку. В 60-70-х годах ХХ века он был звездой сверхпопулярного комического шоу «Герои Хогана» и пользовался большим успехом. Однако даже на пике его известности мало кто знал, что красавец Боб вел двойную жизнь, о которой и повествует этот фильм.Под маской рубахи-парня таился сексуально одержимый человек, устраивавший при помощи своего приятеля, снимавшего происходящее на камеру, изысканные эротические игрища с участием роскошных девочек. Тайной была его частная жизнь, тайной стала и смерть: в 1978 году Крейна нашли убитым. Убийца не найден до сих пор...', 182);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (253, 'Авалон', 'Avalon', 2001, 'fullHD', '6df22446-f5c0-422c-b6f4-c474e37b27e4.jpg', 6.2, 3897, 'В отдаленном будущем человечество осваивает виртуальный мир компьютерной игры под названием «Авалон». Лишь немногим удается достичь в игре финального уровня, а те, кто возвращаются, впадают в коматозное состояние. Чтобы попытаться спасти своего возлюбленного от этой участи, Эш преисполнена решимости пройти всю игру и встретиться в финале с загадочным персонажем по имени Призрак.', 182);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (254, 'Замороченные', 'Bamboozled', 2000, 'fullHD', '1b12083c-0aa9-43db-aa50-d4faa738d608.jpg', 6.3, 259, 'Кризис в развитии телевизионных шоу заставляет чернокожего сценариста Пьера Делакруа прибегнуть к использованию давно забытого в Америке жанра - менестель-шоу, изначально существовавшего в середине 19 века. В те времена в шоу участвовали только белые актеры, игравшие роль чернокожих.Теперь сценарист решает использовать только афро-американцев, причем содержание шоу становится весьма не политкорректным и даже расистским, что, тем не менее, не мешает ему стать хитом и перевернуть жизнь всех связанных с ним людей с ног на голову...', 187);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (255, 'Бандиты', 'Bandits', 2001, 'fullHD', '5c7b21fd-1e8f-49b6-93ee-df1a45600d11.jpg', 6.9, 14246, 'Джо Блейк и Терри Коллинз - необычные и удачливые грабители. Без единого выстрела, на одном обаянии и очаровательном нахальстве они взяли больше банков, чем кто-либо. Но однажды в компанию героев попадает бедовая домохозяйка Кейт Уилер, в которую оба немедленно влюбляются, и всё идёт кувырком.', 127);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (256, 'Парикмахерская', 'Barbershop', 2002, 'fullHD', '86281e92-adbb-4f7a-9819-9e35c76d964e.jpg', 6.2, 1837, 'В фильме рассказана история о том, как молодой человек Кэлвин, получивший в наследство от отца парикмахерскую вскоре продает ее местному богачу, который хочет превратить ее в стрип-клуб.Позже поняв, что парикмахерская была для людей не только местом для стрижек, но и местом для общения, Кэлвин пытается найти способы сохранить парикмахерскую.', 174);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (257, 'Королевская битва', 'Batoru rowaiaru', 2000, 'fullHD', 'f7f0c733-5e4f-4ce8-9b79-434a0fe28cec.jpg', 7.5, 43436, 'Королевская битва — санкционированная правительством жестокая игра, в которой школьников заставляют участвовать под угрозой уничтожения. На необитаемом острове 42 старшеклассника на протяжении трёх дней будут безжалостно убивать друг друга с помощью случайных предметов и смекалки. Живым с острова вернётся только один.', 110);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (258, 'Пока не наступит ночь', 'Before Night Falls', 2000, 'fullHD', '51e772f1-315e-49e7-86c7-86037aa93e67.jpg', 7, 4289, 'История Рейнальдо Аренаса - звезды кубинской поэзии, надежды кубинской революции, любимца Фиделя Кастро, среди прочих подобных высланного с Острова Свободы.', 138);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (259, 'В тылу врага', 'Behind Enemy Lines', 2001, 'fullHD', '0720a18f-df4f-4247-8b4b-ad3254aa750f.jpg', 6.6, 10208, 'Молодой лейтенант ВВС США Крис Бернетт, один из лучших военно-морских летчиков, по жизни мечтает о том, чтобы ему выпал шанс поучаствовать в настоящих боевых действиях вместо того, чтобы наблюдать за тренировками своих коллег. Однако его командир, адмирал Рейгарт считает, что Крис еще не готов... Да и боевых действий-то особо как-то не предвидится.Но вот, во время одной из разведывательных миссий, Бернетт фотографирует то, что не было предназначено для чужих глаз и его самолет сбивают. Летчик оказывается в тылу врага, который хочет уничтожить шпиона. Время идет, и адмирал Рейгарт, рискуя своей карьерой, решает нарушить все правила и организовать спасательную операцию, чтобы вернуть своего ученика...', 103);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (260, 'Фанатик', 'The Believer', 2001, 'fullHD', '3ad66686-cdcd-4baa-8daf-b2e9dafb0e29.jpg', 7.2, 26936, 'В детстве еврейского мальчика по имени Дэнни Балинт выгнали из религиозной школы за вольнодумство. В 22 года Дэнни выбривает голову и становится скинхедом. Теперь он – лидер банды неонацистов, объявивших войну евреям и устраивающих уличные драки и погромы. По его приказу скины готовы убивать. Но несмотря на то, что авторитет Дэнни среди соратников растет, в душе он остается несостоявшимся раввином, который избивает евреев днем, а ночью прилежно изучает священные манускрипты на иврите.', 119);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (261, 'Победители шоу', 'Best in Show', 2000, 'fullHD', '8c720860-05e1-49d5-89e7-b325597a02da.jpg', 6.1, 868, 'Во время подготовки к самой престижной собачьей выставке, несколько супружеских пар сделают все, чтобы их питомцы были первыми. Они окружают своих четвероногих друзей большей заботой и любовью, чем собственных жен и мужей.Конечно, для современной собаки одной заботы ветеринара недостаточно. Мохнатым и хвостатым крайне необходим… психоаналитик! Но одержимым хозяевам четвероногих помощь психолога уже не поможет.', 102);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (262, 'Большие неприятности', 'Big Trouble', 2001, 'fullHD', '1cd4a97e-c9c7-42ed-bdda-03e9c9b0ed3b.jpg', 7, 4242, 'Таинственный чемодан, набитый чем-то ценным, привлекает внимание совершенно разных людей, кардинально меняя жизни разведенного мужчины, влюбленной парочки, нескольких мошенников, парочки наемных убийц, двух агентов ФБР и еще нескольких человек, которые решили рискнуть своими жизнями ради того, чтобы сорвать куш.', 103);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (263, 'Билли Эллиот', 'Billy Elliot', 2000, 'fullHD', '89363f79-9195-40ec-92a5-a8613dc40bfd.jpg', 7.9, 47935, 'Чем должен увлекаться сын шахтера? Сомнений нет: боксом и только боксом. Но у 11-летнего Билли Эллиота на этот счет было свое мнение — он обожает балет.Отец и старший брат Тони впадают в ярость, когда узнают, что он променял бокс на «менее мужественный» балет. И только острая на язык миссис Уилкинсон поддерживает Билли в его желании танцевать, и он получает шанс поступить в Королевскую балетную школу.', 173);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (264, 'Именинница', 'Birthday Girl', 2001, 'fullHD', '25595800-b380-4dda-8f35-036da7b91be5.jpg', 6.1, 6359, 'Застенчивый банковский служащий решился на отчаянный шаг: выписал невесту с интернет-сайта «Из России с любовью». И вскоре в лондонском аэропорту он уже встречает свою загадочную Надю.Она не говорит по-английски, не выпускает сигарету изо рта и согласна выйти за него замуж. Но слишком многое в ней смущает Джона. К тому же, по хорошей русской традиции, на день рождения Нади неожиданно заваливаются в гости два её «братца».', 162);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (265, 'Чёрный ястреб', 'Black Hawk Down', 2001, 'fullHD', '1d7be1bf-9028-4948-980e-034902ebda13.jpg', 7.8, 138682, 'Сомали, 1993 год. Страна вымирает от голода, число жертв превысило триста тысяч человек. Миротворческие силы ООН пытаются восстановить порядок и организовать поставки продовольствия. В помощь им Вашингтон выслал полтысячи человек из элитных подразделений американской армии, знаменитые отряды «Дельта» и армейских рейнджеров.В городе Могадишо хозяйничает и творит беспредел полевой командир Айдид, убивая мирных граждан и отбирая гуманитарную помощь. В определенный момент орлы из Вашингтона решают провести операцию по захвату Айдида в его резиденции.Молодой офицер, только что назначенный взводным; матерый сержант, ведущий колонну машин; казарменный писарь, не нюхавший пороху; экипажи сбитых вертолетов, вынужденных ждать подкрепления и эвакуации; двое солдат, которых забыли взять с собой при смене позиции; генерал, сидящий в штабе и наблюдающий через спутниковую связь, как погибают его солдаты.', 154);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (267, 'Мерцающие огни', 'Blinkende lygter', 2000, 'fullHD', '677a8b9b-e0c5-49d0-810a-4f138d02c3c1.jpg', 7, 6632, 'Настоящий гангстер не знает, что такое нормированный рабочий день. Пора на покой - решает гангстер Торкильд, когда на день рождения друзья дарят ему новый ствол. Чтобы обеспечить себе безбедное будущее, он прикарманивает 4000000 крон, предназначенных крутому злому боссу, и вместе с приятелем устремляется в жаркие края.Но когда машина беглецов внезапно ломается на лесной дороге, ловким ворам приходится искать убежище в ресторане, пустующем неподалеку. Дикая глушь - надёжное убежище для пронырливых бандитов, но смогут ли они здесь укрытся от своих разьяренных врагов, которые уже идут по их следам.', 144);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (268, 'Кровавая работа', 'Blood Work', 2002, 'fullHD', '77faa65b-dee4-4fe5-9103-d007cd536c83.jpg', 6.6, 4293, 'Терри МакКалеб - бывший агент ФБР, специализирующийся на серийных убийствах, перенес операцию по пересадке сердца и теперь находится на пенсии, теша себя починкой своей лодки. Но его талант вновь востребован, и он получает новое задание. А нанимает его некто Граселия Риверс для того, чтобы он расследовал причину гибели ее сестры, сердце которой и было пересажено Терри.Расследование выявило  очень интересные факты: сестра Граселии была убита, и убийство было обставлено как инцидент во время ограбления. А убийцей, возможно, был человек, за которым Терри охотился многие годы. Непростая работа для престарелого и имеющего проблемы с сердцем шпиона, который предполагал совсем иначе распорядиться своим временем.', 172);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (269, 'Кокаин', 'Blow', 2001, 'fullHD', 'ae98b838-2c74-4a24-88cc-690212fec6e2.jpg', 8, 154750, 'Джордж Джанг, обыкновенный парень из пригорода, решил осуществить американскую мечту своим способом — стать первым американцем, импортирующим кокаин в больших объемах. Он создал рынок сбыта, подсадив на кокаин самых знаменитых людей Америки.', 123);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (270, 'Бойлерная', 'Boiler Room', 2000, 'fullHD', '22d74e82-9591-490f-9591-a7965f56182c.jpg', 7.1, 19470, 'Устав от несправедливой жизни, молодой шулер Сет Девис открывает в своей квартире подпольное казино. Однажды один из клиентов предлагает парню работу на брокерской фирме, где месячная зарплата превышает годовой доход от казино. Мечта Сета о крупном заработке сбывается, но вскоре парень начинает понимать, что за всё в жизни нужно платить.', 145);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (271, 'Чужой билет', 'Bounce', 2000, 'fullHD', '62031215-cca9-4053-8fa6-13c965141f69.jpg', 7, 13957, 'В канун Рождества неисправимый ловелас Бадди Эмарал, подцепив в аэропорту красотку, уступает свой авиабилет мужчине, спешащему домой к семье. И этот самолет разбивается. Проходит время, и Бадди решает поехать к вдове погибшего, чтобы как-то помочь ей.Он хочет загладить свою вину, но, познакомившись с Эбби и её детьми, впервые влюбляется по-настоящему. И теперь не знает, как рассказать ей, что он и есть тот, кто должен был лететь в злосчастном самолёте.', 109);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (272, 'Идентификация Борна', 'The Bourne Identity', 2002, 'fullHD', '14016cfc-4ff1-48e3-b430-ba65e710effe.jpg', 7.8, 182921, 'Команда итальянского рыболовецкого судна находит в водах Средиземного моря тело мужчины. У него два пулевых ранения в спине и имплантированный в бедро микрофильм, помеченный номером швейцарского банка. Когда незнакомец приходит в себя, оказывается, что он не помнит, кто он и что с ним случилось, однако он может говорить на нескольких языках и обладает другими необычными способностями.Получив в Цюрихе деньги с указанного банковского счета, он узнает свое имя – Джейсон Борн. Но настоящее это его имя или нет? Пытаясь восстановить свое прошлое, он находит свой адрес в Париже, но вместе с этим понимает, что отслеживается убийцей. Борн уговаривает немецкую студентку Мари отвезти его в Париж, чтобы выяснить все о своем прошлом и понять, кто хочет его убить.', 102);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (273, 'Боулинг для Колумбины', 'Bowling for Columbine', 2002, 'fullHD', '1f188618-634e-4b66-b672-e073969d9c7e.jpg', 7.7, 7414, 'США лидируют в мире по числу убийств с применением огнестрельного оружия. Стволов в стране больше, чем телевизоров. Американцы не могут жить без оружия или просто сошли с ума? Кто или что стоит за этим? Расовые проблемы, которые ещё предстоит решить? Голливуд, рок-н-ролл, Интернет? А может, историческая предрасположенность к насилию? В центре фильма – трагический инцидент: перестрелка в колледже Колумбины. Спорный, глубокий, порой ехидный взгляд на взаимосвязь насилия и страха в современной Америке.', 182);
INSERT INTO public.movie (id, title, "titleEng", year, quality, "imgVideo", rating, votes, description, "time") VALUES (276, 'Клуб разбитых сердец: Романтическая комедия', 'The Broken Hearts Club: A Romantic Comedy', 2000, 'fullHD', '7a53f0dc-a410-4566-be31-3cb575aeb870.jpg', 6.4, 318, 'Лос-Анджелес. Именно там живет 28-летний голливудский фотограф Дэннис. У него много друзей, всех их объединяет не только образ жизни, но и схожие интересы. Парни не задумываются о смысле жизни, развлекаются и каждый день переживают, как последний.Но в канун своего дня рождения Дэннис неожиданно предается размышлениям о том, как много для него значат друзья, ведь они, по сути, заменяют ему семью.', 191);


--
-- TOC entry 3387 (class 0 OID 27786)
-- Dependencies: 225
-- Data for Name: movie_countries_country; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (1, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (2, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (2, 2);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (3, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (4, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (5, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (5, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (5, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (6, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (7, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (8, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (8, 5);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (9, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (10, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (11, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (12, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (12, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (13, 6);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (13, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (14, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (14, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (14, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (15, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (16, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (17, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (17, 2);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (18, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (18, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (18, 9);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (18, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (18, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (19, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (20, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (20, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (21, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (21, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (22, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (23, 6);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (23, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (24, 10);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (25, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (26, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (27, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (28, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (29, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (30, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (31, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (31, 11);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (31, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (31, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (32, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (33, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (34, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (35, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (36, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (37, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (37, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (38, 12);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (38, 9);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (38, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (38, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (39, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (40, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (41, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (42, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (43, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (44, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (45, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (45, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (46, 10);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (47, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (48, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (49, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (50, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (51, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (52, 9);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (52, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (53, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (54, 13);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (54, 14);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (54, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (54, 15);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (55, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (56, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (56, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (57, 9);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (58, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (59, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (60, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (61, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (62, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (62, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (63, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (64, 10);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (65, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (65, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (66, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (67, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (67, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (68, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (69, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (70, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (71, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (72, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (73, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (73, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (74, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (75, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (76, 10);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (76, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (78, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (79, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (79, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (80, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (81, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (82, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (83, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (83, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (84, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (85, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (86, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (86, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (87, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (88, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (89, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (90, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (91, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (92, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (93, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (94, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (95, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (95, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (96, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (97, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (98, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (98, 16);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (99, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (100, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (101, 9);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (101, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (102, 17);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (103, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (104, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (105, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (105, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (106, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (107, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (107, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (107, 17);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (108, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (109, 9);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (110, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (111, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (111, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (112, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (113, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (114, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (115, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (116, 18);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (116, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (117, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (118, 10);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (119, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (119, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (119, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (120, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (121, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (122, 10);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (123, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (124, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (125, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (126, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (127, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (128, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (129, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (129, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (130, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (131, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (132, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (133, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (134, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (135, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (136, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (137, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (138, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (139, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (140, 19);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (141, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (141, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (142, 20);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (142, 17);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (143, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (143, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (144, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (145, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (145, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (146, 9);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (146, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (147, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (148, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (149, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (150, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (151, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (151, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (151, 21);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (151, 22);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (152, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (153, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (154, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (155, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (156, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (157, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (158, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (159, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (160, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (160, 5);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (160, 11);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (161, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (162, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (163, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (164, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (165, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (166, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (166, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (167, 17);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (168, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (169, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (170, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (171, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (172, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (172, 23);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (172, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (172, 24);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (173, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (173, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (174, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (175, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (176, 19);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (176, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (177, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (178, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (179, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (180, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (181, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (182, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (183, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (184, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (185, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (185, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (186, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (187, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (188, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (189, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (190, 14);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (191, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (192, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (193, 9);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (193, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (194, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (195, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (196, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (197, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (198, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (199, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (200, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (200, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (200, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (201, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (202, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (203, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (203, 25);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (204, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (205, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (206, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (206, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (207, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (208, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (208, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (209, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (209, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (210, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (210, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (210, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (211, 2);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (211, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (212, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (213, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (213, 5);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (213, 9);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (214, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (215, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (215, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (216, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (217, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (218, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (218, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (219, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (220, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (221, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (222, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (223, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (224, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (225, 16);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (226, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (227, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (227, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (228, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (229, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (230, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (231, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (231, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (231, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (232, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (233, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (233, 9);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (234, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (235, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (235, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (235, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (235, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (236, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (237, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (238, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (239, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (239, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (239, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (240, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (241, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (241, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (242, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (243, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (244, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (245, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (246, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (246, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (247, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (247, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (248, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (248, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (249, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (250, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (251, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (252, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (253, 10);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (253, 11);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (254, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (255, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (256, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (257, 10);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (258, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (258, 16);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (259, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (260, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (261, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (262, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (263, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (263, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (264, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (264, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (265, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (265, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (266, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (266, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (267, 20);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (267, 17);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (268, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (269, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (270, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (271, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (272, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (272, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (272, 26);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (273, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (273, 3);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (273, 4);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (274, 7);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (274, 8);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (274, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (275, 1);
INSERT INTO public.movie_countries_country ("movieId", "countryId") VALUES (276, 1);


--
-- TOC entry 3386 (class 0 OID 27779)
-- Dependencies: 224
-- Data for Name: movie_genres_genre; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (1, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (1, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (1, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (1, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (1, 5);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (2, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (2, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (3, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (3, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (3, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (3, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (3, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (4, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (4, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (5, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (5, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (6, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (6, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (7, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (7, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (8, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (8, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (9, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (10, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (10, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (10, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (10, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (11, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (11, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (12, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (12, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (12, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (13, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (13, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (13, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (13, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (14, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (14, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (14, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (14, 13);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (15, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (15, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (16, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (16, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (17, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (17, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (18, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (18, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (18, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (19, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (19, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (19, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (19, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (20, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (20, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (20, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (21, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (21, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (21, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (22, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (22, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (23, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (23, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (23, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (23, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (24, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (24, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (25, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (25, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (25, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (25, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (26, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (26, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (26, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (27, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (28, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (28, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (28, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (29, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (29, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (30, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (30, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (30, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (30, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (31, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (31, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (31, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (31, 5);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (32, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (32, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (32, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (32, 5);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (33, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (33, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (34, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (34, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (34, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (35, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (35, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (35, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (36, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (36, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (37, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (37, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (37, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (38, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (38, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (38, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (38, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (39, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (39, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (39, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (39, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (40, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (40, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (40, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (40, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (40, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (41, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (41, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (41, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (42, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (42, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (42, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (42, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (43, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (44, 18);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (44, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (44, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (45, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (45, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (45, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (46, 19);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (46, 20);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (46, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (46, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (46, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (47, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (47, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (47, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (48, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (49, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (49, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (49, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (50, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (50, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (50, 13);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (51, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (51, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (51, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (52, 21);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (52, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (52, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (53, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (53, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (53, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (53, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (54, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (54, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (54, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (54, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (55, 18);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (55, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (55, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (55, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (56, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (56, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (57, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (57, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (57, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (57, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (58, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (58, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (59, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (59, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (59, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (60, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (60, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (60, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (60, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (61, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (61, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (62, 22);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (62, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (62, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (63, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (63, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (64, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (64, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (65, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (65, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (65, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (65, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (66, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (66, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (67, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (67, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (68, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (68, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (68, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (68, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (69, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (69, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (69, 21);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (69, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (70, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (70, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (70, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (71, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (71, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (71, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (71, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (71, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (72, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (72, 22);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (72, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (73, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (73, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (73, 5);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (74, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (74, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (74, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (75, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (75, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (75, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (75, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (76, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (76, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (76, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (78, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (78, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (78, 21);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (79, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (79, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (79, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (79, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (80, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (80, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (80, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (80, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (81, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (81, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (81, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (82, 20);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (82, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (82, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (82, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (82, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (83, 22);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (83, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (83, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (83, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (83, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (84, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (84, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (84, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (84, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (85, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (85, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (85, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (86, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (86, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (86, 22);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (86, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (87, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (87, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (87, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (87, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (88, 18);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (88, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (89, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (89, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (89, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (89, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (90, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (90, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (90, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (91, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (91, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (91, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (92, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (92, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (92, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (92, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (92, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (93, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (93, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (93, 21);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (94, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (94, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (94, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (95, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (95, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (96, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (96, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (96, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (96, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (97, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (97, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (97, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (98, 21);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (98, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (98, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (98, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (99, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (99, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (99, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (100, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (100, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (100, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (100, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (101, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (101, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (102, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (102, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (103, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (103, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (103, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (103, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (103, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (104, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (104, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (104, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (104, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (105, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (105, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (106, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (106, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (106, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (107, 20);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (107, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (107, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (107, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (107, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (107, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (108, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (108, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (108, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (109, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (110, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (110, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (110, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (111, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (111, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (111, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (111, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (112, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (112, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (112, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (113, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (113, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (113, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (114, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (114, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (115, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (115, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (116, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (116, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (117, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (118, 19);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (118, 20);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (118, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (118, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (118, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (118, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (119, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (119, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (120, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (120, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (121, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (121, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (121, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (122, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (122, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (122, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (122, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (123, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (124, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (124, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (124, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (124, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (125, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (125, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (125, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (125, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (125, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (126, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (126, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (126, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (127, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (127, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (127, 21);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (128, 21);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (128, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (129, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (129, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (130, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (130, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (130, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (130, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (131, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (131, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (131, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (131, 5);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (132, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (132, 22);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (133, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (133, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (133, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (133, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (134, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (134, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (134, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (135, 20);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (135, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (135, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (135, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (135, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (136, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (136, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (137, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (137, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (138, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (138, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (138, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (139, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (139, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (139, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (140, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (140, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (140, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (141, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (141, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (142, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (143, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (143, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (143, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (144, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (144, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (144, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (145, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (145, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (145, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (146, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (146, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (147, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (147, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (147, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (148, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (148, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (148, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (149, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (149, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (149, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (150, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (150, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (151, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (151, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (151, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (151, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (152, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (152, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (152, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (152, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (152, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (153, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (153, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (153, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (154, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (155, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (155, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (155, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (155, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (155, 21);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (156, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (157, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (157, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (157, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (157, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (158, 20);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (158, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (158, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (158, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (158, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (159, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (159, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (159, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (159, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (160, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (160, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (160, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (161, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (161, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (161, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (162, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (162, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (162, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (162, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (163, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (163, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (163, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (164, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (164, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (164, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (164, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (165, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (166, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (166, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (166, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (167, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (168, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (168, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (168, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (169, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (169, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (170, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (170, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (170, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (171, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (171, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (171, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (172, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (172, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (172, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (173, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (173, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (173, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (174, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (174, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (175, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (175, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (175, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (175, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (176, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (176, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (177, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (177, 5);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (178, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (179, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (180, 22);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (180, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (181, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (181, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (181, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (182, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (182, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (182, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (183, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (183, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (183, 21);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (184, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (184, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (184, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (184, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (185, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (185, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (185, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (186, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (186, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (186, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (186, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (187, 15);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (187, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (187, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (188, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (188, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (188, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (189, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (189, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (189, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (190, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (190, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (190, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (191, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (191, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (191, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (191, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (192, 22);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (192, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (192, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (193, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (193, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (194, 20);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (194, 18);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (194, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (194, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (194, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (195, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (195, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (196, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (196, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (197, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (198, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (198, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (198, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (199, 21);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (200, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (200, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (200, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (200, 5);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (201, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (201, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (201, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (202, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (202, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (202, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (203, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (203, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (203, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (204, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (204, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (204, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (205, 20);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (205, 18);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (205, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (205, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (205, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (205, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (206, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (206, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (206, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (206, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (207, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (207, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (207, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (207, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (208, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (208, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (209, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (209, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (210, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (210, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (211, 18);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (211, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (211, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (212, 22);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (212, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (212, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (212, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (213, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (213, 21);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (214, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (215, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (215, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (216, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (216, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (216, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (217, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (217, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (217, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (218, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (218, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (219, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (220, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (220, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (220, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (220, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (221, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (221, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (221, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (222, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (222, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (223, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (223, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (223, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (223, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (223, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (224, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (224, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (224, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (225, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (226, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (226, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (227, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (227, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (227, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (227, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (228, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (228, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (228, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (228, 5);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (229, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (229, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (230, 22);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (230, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (230, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (230, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (231, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (231, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (231, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (231, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (232, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (232, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (232, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (232, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (233, 18);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (233, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (233, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (233, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (233, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (234, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (234, 5);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (235, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (235, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (235, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (236, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (237, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (237, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (238, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (238, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (238, 13);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (239, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (239, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (240, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (241, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (241, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (241, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (242, 22);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (242, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (243, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (243, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (244, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (244, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (244, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (245, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (245, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (245, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (245, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (246, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (246, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (247, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (247, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (248, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (248, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (248, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (249, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (250, 20);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (250, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (250, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (250, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (250, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (250, 4);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (251, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (251, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (251, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (251, 3);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (252, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (252, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (252, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (253, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (253, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (253, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (254, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (254, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (254, 5);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (255, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (255, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (255, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (255, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (256, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (256, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (257, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (257, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (257, 6);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (257, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (258, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (258, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (258, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (258, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (259, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (259, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (259, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (259, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (260, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (261, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (262, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (262, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (262, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (263, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (263, 5);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (264, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (264, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (264, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (265, 16);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (265, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (265, 17);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (265, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (266, 22);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (266, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (266, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (266, 12);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (267, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (267, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (267, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (268, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (268, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (268, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (268, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (268, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (269, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (269, 14);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (269, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (270, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (270, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (270, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (271, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (271, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (272, 7);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (272, 10);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (272, 9);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (273, 23);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (273, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (273, 11);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (274, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (274, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (274, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (275, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (275, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (275, 13);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (276, 8);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (276, 1);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (276, 2);
INSERT INTO public.movie_genres_genre ("movieId", "genreId") VALUES (276, 13);


--
-- TOC entry 3379 (class 0 OID 27740)
-- Dependencies: 217
-- Data for Name: review; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3399 (class 0 OID 0)
-- Dependencies: 214
-- Name: comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comment_id_seq', 1, false);


--
-- TOC entry 3400 (class 0 OID 0)
-- Dependencies: 220
-- Name: country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.country_id_seq', 26, true);


--
-- TOC entry 3401 (class 0 OID 0)
-- Dependencies: 218
-- Name: genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.genre_id_seq', 23, true);


--
-- TOC entry 3402 (class 0 OID 0)
-- Dependencies: 222
-- Name: movie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movie_id_seq', 276, true);


--
-- TOC entry 3403 (class 0 OID 0)
-- Dependencies: 216
-- Name: review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.review_id_seq', 1, false);


--
-- TOC entry 3211 (class 2606 OID 27756)
-- Name: genre PK_0285d4f1655d080cfcf7d1ab141; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genre
    ADD CONSTRAINT "PK_0285d4f1655d080cfcf7d1ab141" PRIMARY KEY (id);


--
-- TOC entry 3207 (class 2606 OID 27738)
-- Name: comment PK_0b0e4bbc8415ec426f87f3a88e2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY (id);


--
-- TOC entry 3209 (class 2606 OID 27747)
-- Name: review PK_2e4299a343a81574217255c00ca; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.review
    ADD CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY (id);


--
-- TOC entry 3227 (class 2606 OID 27790)
-- Name: movie_countries_country PK_8d06b075483b85c81f1194a6a11; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_countries_country
    ADD CONSTRAINT "PK_8d06b075483b85c81f1194a6a11" PRIMARY KEY ("movieId", "countryId");


--
-- TOC entry 3223 (class 2606 OID 27783)
-- Name: movie_genres_genre PK_aee18568f9fe4ecca74f35891af; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_genres_genre
    ADD CONSTRAINT "PK_aee18568f9fe4ecca74f35891af" PRIMARY KEY ("movieId", "genreId");


--
-- TOC entry 3215 (class 2606 OID 27767)
-- Name: country PK_bf6e37c231c4f4ea56dcd887269; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country
    ADD CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY (id);


--
-- TOC entry 3219 (class 2606 OID 27778)
-- Name: movie PK_cb3bb4d61cf764dc035cbedd422; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie
    ADD CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY (id);


--
-- TOC entry 3213 (class 2606 OID 27758)
-- Name: genre UQ_a5ec972b174b9994abb0600de71; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genre
    ADD CONSTRAINT "UQ_a5ec972b174b9994abb0600de71" UNIQUE (genre);


--
-- TOC entry 3217 (class 2606 OID 27769)
-- Name: country UQ_f9c25d6ae5734b405b890d0ee52; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country
    ADD CONSTRAINT "UQ_f9c25d6ae5734b405b890d0ee52" UNIQUE (country);


--
-- TOC entry 3220 (class 1259 OID 27785)
-- Name: IDX_1996ce31a9e067304ab168d671; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_1996ce31a9e067304ab168d671" ON public.movie_genres_genre USING btree ("genreId");


--
-- TOC entry 3221 (class 1259 OID 27784)
-- Name: IDX_985216b45541c7e0ec644a8dd4; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_985216b45541c7e0ec644a8dd4" ON public.movie_genres_genre USING btree ("movieId");


--
-- TOC entry 3224 (class 1259 OID 27791)
-- Name: IDX_baffdcad858a10c47fee8ab41c; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_baffdcad858a10c47fee8ab41c" ON public.movie_countries_country USING btree ("movieId");


--
-- TOC entry 3225 (class 1259 OID 27792)
-- Name: IDX_e54be9a788a5d1e06d76d2529c; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_e54be9a788a5d1e06d76d2529c" ON public.movie_countries_country USING btree ("countryId");


--
-- TOC entry 3230 (class 2606 OID 27808)
-- Name: movie_genres_genre FK_1996ce31a9e067304ab168d6715; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_genres_genre
    ADD CONSTRAINT "FK_1996ce31a9e067304ab168d6715" FOREIGN KEY ("genreId") REFERENCES public.genre(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3228 (class 2606 OID 27793)
-- Name: comment FK_40218f262bd4fda4d92eeed0b76; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "FK_40218f262bd4fda4d92eeed0b76" FOREIGN KEY ("reviewId") REFERENCES public.review(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3229 (class 2606 OID 27798)
-- Name: review FK_4ccf71f9d14aa1a059877b06343; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.review
    ADD CONSTRAINT "FK_4ccf71f9d14aa1a059877b06343" FOREIGN KEY ("movieId") REFERENCES public.movie(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3231 (class 2606 OID 27803)
-- Name: movie_genres_genre FK_985216b45541c7e0ec644a8dd4e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_genres_genre
    ADD CONSTRAINT "FK_985216b45541c7e0ec644a8dd4e" FOREIGN KEY ("movieId") REFERENCES public.movie(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3232 (class 2606 OID 27813)
-- Name: movie_countries_country FK_baffdcad858a10c47fee8ab41c2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_countries_country
    ADD CONSTRAINT "FK_baffdcad858a10c47fee8ab41c2" FOREIGN KEY ("movieId") REFERENCES public.movie(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3233 (class 2606 OID 27818)
-- Name: movie_countries_country FK_e54be9a788a5d1e06d76d2529c2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_countries_country
    ADD CONSTRAINT "FK_e54be9a788a5d1e06d76d2529c2" FOREIGN KEY ("countryId") REFERENCES public.country(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2023-05-27 10:49:17

--
-- PostgreSQL database dump complete
--

