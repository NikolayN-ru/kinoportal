FROM postgres:latest

COPY ./authDB.sql /docker-entrypoint-initdb.d/