# Spring Boot Sample API

Para arrancar la API y la BBDD: `docker-compose up -d`

Comprobar que los servicios estén en estado `healthy` con el comando `docker-compose ps`

Si se necesita actualizar la API:

* En la carpeta `api` ejecutar `./gradlew bootJar`
* Sobreescribir el fichero `api-1.0.0.jar` de la carpeta raíz con el recien generado en `api/build/libs/api-1.0.0.jar`
* Parar el compose (`docker-compose down`) y volver arrancar reconstruyendo la imagen de la API: `docker-compose up -d --build`