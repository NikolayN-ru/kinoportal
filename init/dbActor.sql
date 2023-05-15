--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-05-04 18:57:00

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
-- TOC entry 3336 (class 1262 OID 25898)
-- Name: actor; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE actor WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc;


ALTER DATABASE actor OWNER TO postgres;

\connect actor

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
-- TOC entry 214 (class 1259 OID 25899)
-- Name: actor_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.actor_entity (
    "actorId" integer NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL,
    story text,
    biography text
);


ALTER TABLE public.actor_entity OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 25904)
-- Name: actor_entity_actorId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."actor_entity_actorId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."actor_entity_actorId_seq" OWNER TO postgres;

--
-- TOC entry 3337 (class 0 OID 0)
-- Dependencies: 215
-- Name: actor_entity_actorId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."actor_entity_actorId_seq" OWNED BY public.actor_entity."actorId";


--
-- TOC entry 216 (class 1259 OID 25905)
-- Name: actor_film_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.actor_film_entity (
    "recordId" integer NOT NULL,
    "filmId" integer NOT NULL,
    "actorId" integer
);


ALTER TABLE public.actor_film_entity OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 25908)
-- Name: actor_film_entity_recordId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."actor_film_entity_recordId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."actor_film_entity_recordId_seq" OWNER TO postgres;

--
-- TOC entry 3338 (class 0 OID 0)
-- Dependencies: 217
-- Name: actor_film_entity_recordId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."actor_film_entity_recordId_seq" OWNED BY public.actor_film_entity."recordId";


--
-- TOC entry 3178 (class 2604 OID 25909)
-- Name: actor_entity actorId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actor_entity ALTER COLUMN "actorId" SET DEFAULT nextval('public."actor_entity_actorId_seq"'::regclass);


--
-- TOC entry 3179 (class 2604 OID 25910)
-- Name: actor_film_entity recordId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actor_film_entity ALTER COLUMN "recordId" SET DEFAULT nextval('public."actor_film_entity_recordId_seq"'::regclass);


--
-- TOC entry 3327 (class 0 OID 25899)
-- Dependencies: 214
-- Data for Name: actor_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (1, 'Testiks', 'Testiks', 'da da mi', 'da da mi');
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (2, 'Testiks', 'Testiks', 'da da mi', 'da da mi');
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (3, 'Testiks', 'Testiks', 'da da mi', 'da da mi');
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (4, 'Testiks', 'Testiks', 'da da mi', 'da da mi');
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (5, 'Testiks', 'Testiks', 'da da mi', 'da da mi');
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (6, 'Testiks1312', 'Testiks3213', 'da da ya214123', 'da da mi1321');
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (7, 'Testiks1', 'Testiks3213', 'da', 'da da mi1321');
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (8, 'Testiks1', 'Testiks3213', 'da', 'da da mi1321');
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (9, 'Testiks1', 'Testiks3213', NULL, NULL);
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (10, 'Testiks1', 'Testiks3213', NULL, NULL);
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (11, 'Testiks1', 'Testiks3213', 'da', NULL);
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (12, 'Testiks1', 'Testiks3213', NULL, 'da da ');
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (13, 'Testiks1', 'Testiks3213', NULL, 'da da ');
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (14, 'Testiks113123', 'Testiks32123', NULL, 'da da ');
INSERT INTO public.actor_entity ("actorId", "firstName", "lastName", story, biography) VALUES (18, 'test', 'dada', 'dasdada', 'dadasd');


--
-- TOC entry 3329 (class 0 OID 25905)
-- Dependencies: 216
-- Data for Name: actor_film_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (1, 1, 2);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (2, 1, 3);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (3, 1, 4);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (4, 1, 5);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (5, 1, 6);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (6, 2, 7);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (7, 2, 8);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (8, 2, 9);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (9, 2, 10);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (10, 2, 11);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (11, 3, 12);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (12, 3, 13);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (13, 3, 14);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (14, 3, 5);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (15, 3, 6);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (16, 4, 3);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (17, 4, 8);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (18, 4, 3);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (19, 4, 2);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (20, 4, 1);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (21, 4, 6);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (22, 5, 7);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (23, 5, 12);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (24, 5, 13);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (25, 5, 11);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (26, 5, 5);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (27, 5, 6);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (28, 5, 10);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (29, 6, 11);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (30, 6, 5);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (31, 6, 4);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (32, 6, 3);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (33, 6, 2);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (34, 6, 1);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (35, 6, 9);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (36, 6, 13);
INSERT INTO public.actor_film_entity ("recordId", "filmId", "actorId") VALUES (37, 6, 14);


--
-- TOC entry 3339 (class 0 OID 0)
-- Dependencies: 215
-- Name: actor_entity_actorId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."actor_entity_actorId_seq"', 18, true);


--
-- TOC entry 3340 (class 0 OID 0)
-- Dependencies: 217
-- Name: actor_film_entity_recordId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."actor_film_entity_recordId_seq"', 37, true);


--
-- TOC entry 3181 (class 2606 OID 25912)
-- Name: actor_entity PK_0d35d2c1e46aabb88592ed4a5f6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actor_entity
    ADD CONSTRAINT "PK_0d35d2c1e46aabb88592ed4a5f6" PRIMARY KEY ("actorId");


--
-- TOC entry 3183 (class 2606 OID 25914)
-- Name: actor_film_entity PK_b98b3517c0d1da36aeb60380b4f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actor_film_entity
    ADD CONSTRAINT "PK_b98b3517c0d1da36aeb60380b4f" PRIMARY KEY ("recordId");


--
-- TOC entry 3184 (class 2606 OID 25915)
-- Name: actor_film_entity FK_4c194b793d7b262b88780077f98; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actor_film_entity
    ADD CONSTRAINT "FK_4c194b793d7b262b88780077f98" FOREIGN KEY ("actorId") REFERENCES public.actor_entity("actorId");


-- Completed on 2023-05-04 18:57:00

--
-- PostgreSQL database dump complete
--

