FROM postgres:latest

COPY ./actorDB.sql /docker-entrypoint-initdb.d/