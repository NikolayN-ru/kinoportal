FROM postgres:latest

COPY ./movieDB.sql /docker-entrypoint-initdb.d/