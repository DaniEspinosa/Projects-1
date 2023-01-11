FROM openjdk:11-jdk-slim

COPY entrypoint.sh /
COPY api-1.0.0.jar /api.jar
COPY dockerize /

RUN chmod +x /entrypoint.sh
RUN chmod +x /dockerize

RUN apt-get update && apt-get -y install curl

ENTRYPOINT /entrypoint.sh