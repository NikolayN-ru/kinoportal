FROM postgres:latest

COPY ./fileDB.sql /docker-entrypoint-initdb.d/