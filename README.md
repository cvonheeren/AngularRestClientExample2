# Inmobiliaria

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) versión 11.2.3.

## Instalar dependencias

`npm install` bajará todas las dependencias necesarias para ver la app funcionando en desarrollo.

## Desarrollando con servidor

Usa `ng serve` para ver tu app en un servidor mientras desarollas. Estará en `http://localhost:4200/`.

## Servidor REST de desarrollo

El servidor rest que provee los datos a la app en el desarrollo es un [json-server](https://github.com/typicode/json-server). Para servirlo usar `json-server --watch db.json` en el directorio `\json`

## Build

Usa `ng build` para producir los ficheros necesarios para el despliegue. Se generarán en `dist/`. 

## Despliega

Copia los ficheros que hay en `dist/` en una carpeta de datos estáticos de tu servidor. La app estará lista para funcionar escuchando a un servicio rest.
