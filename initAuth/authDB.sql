--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-06-05 10:36:01

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
-- TOC entry 3350 (class 1262 OID 27871)
-- Name: auth; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE auth WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc;


ALTER DATABASE auth OWNER TO postgres;

\connect auth

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
-- TOC entry 215 (class 1259 OID 27901)
-- Name: role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role (
    id integer NOT NULL,
    role character varying NOT NULL
);


ALTER TABLE public.role OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 27900)
-- Name: role_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.role_id_seq OWNER TO postgres;

--
-- TOC entry 3351 (class 0 OID 0)
-- Dependencies: 214
-- Name: role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;


--
-- TOC entry 217 (class 1259 OID 27912)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 27911)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 3352 (class 0 OID 0)
-- Dependencies: 216
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 218 (class 1259 OID 27922)
-- Name: user_roles_role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_roles_role (
    "userId" integer NOT NULL,
    "roleId" integer NOT NULL
);


ALTER TABLE public.user_roles_role OWNER TO postgres;

--
-- TOC entry 3182 (class 2604 OID 27904)
-- Name: role id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);


--
-- TOC entry 3183 (class 2604 OID 27915)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3341 (class 0 OID 27901)
-- Dependencies: 215
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.role (id, role) VALUES (1, 'User');
INSERT INTO public.role (id, role) VALUES (2, 'Admin');


--
-- TOC entry 3343 (class 0 OID 27912)
-- Dependencies: 217
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."user" (id, username, email, password) VALUES (1, 'Alex', '134@gmail.ru', '$2a$05$lltkNbZ2LFrs/o8j1H8Re.zb2dbMdet.QgYrc8vzcbPunL3VUhYOS');
INSERT INTO public."user" (id, username, email, password) VALUES (2, 'Admin', 'admin@gmail.ru', '$2a$05$UbCOhJPU/Fx927j/7Mdqzugs9UsVnc3r9Zu2otm5prEf/a6XE5P1e');


--
-- TOC entry 3344 (class 0 OID 27922)
-- Dependencies: 218
-- Data for Name: user_roles_role; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_roles_role ("userId", "roleId") VALUES (1, 1);
INSERT INTO public.user_roles_role ("userId", "roleId") VALUES (2, 1);
INSERT INTO public.user_roles_role ("userId", "roleId") VALUES (2, 2);


--
-- TOC entry 3353 (class 0 OID 0)
-- Dependencies: 214
-- Name: role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.role_id_seq', 2, true);


--
-- TOC entry 3354 (class 0 OID 0)
-- Dependencies: 216
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 2, true);


--
-- TOC entry 3185 (class 2606 OID 27908)
-- Name: role PK_b36bcfe02fc8de3c57a8b2391c2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY (id);


--
-- TOC entry 3195 (class 2606 OID 27926)
-- Name: user_roles_role PK_b47cd6c84ee205ac5a713718292; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles_role
    ADD CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId");


--
-- TOC entry 3189 (class 2606 OID 27919)
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- TOC entry 3187 (class 2606 OID 27910)
-- Name: role UQ_367aad98203bd8afaed0d704093; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT "UQ_367aad98203bd8afaed0d704093" UNIQUE (role);


--
-- TOC entry 3191 (class 2606 OID 27921)
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- TOC entry 3192 (class 1259 OID 27928)
-- Name: IDX_4be2f7adf862634f5f803d246b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON public.user_roles_role USING btree ("roleId");


--
-- TOC entry 3193 (class 1259 OID 27927)
-- Name: IDX_5f9286e6c25594c6b88c108db7; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON public.user_roles_role USING btree ("userId");


--
-- TOC entry 3196 (class 2606 OID 27934)
-- Name: user_roles_role FK_4be2f7adf862634f5f803d246b8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles_role
    ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES public.role(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3197 (class 2606 OID 27929)
-- Name: user_roles_role FK_5f9286e6c25594c6b88c108db77; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles_role
    ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2023-06-05 10:36:02

--
-- PostgreSQL database dump complete
--

