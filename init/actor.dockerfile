FROM postgres:latest

COPY ./dbActor.sql /docker-entrypoint-initdb.d/