# Angular6WebSsr

Este proyecto se ha creado para la charla de AlemríaJS de Angular 6 SSR 

## ¿Qué vamos a hacer en este ejemplo?
Vamos a crear una web personal sencilla, dinámica, SEO friendly, donde mostrar una pequeña bio personal y un listado con nuestros últimos proyectos.

Vamos a hacer una rama por cada paso que demos para poder coger el proyecto en el punto donde nos convenga. En la rama master vamos a dejar el proyecto finalizado.

## Prerequisitos

- Node ~8.10
- npm 5+ o yarn
- @angular/cli ^6

```bash
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 6.0.7
Node: 8.10.0
OS: darwin x64
Angular: 6.0.3
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.6.7
@angular-devkit/build-angular     0.6.7
@angular-devkit/build-optimizer   0.6.7
@angular-devkit/core              0.6.7
@angular-devkit/schematics        0.6.7
@angular/cli                      6.0.7
@ngtools/webpack                  6.0.7
@schematics/angular               0.6.7
@schematics/update                0.6.7
rxjs                              6.2.0
typescript                        2.7.2
webpack                           4.8.3

```


## Cómo puedo seguir este ejemplo paso a paso

## Pasos 

### step-1

Generamos el proyecto con angular-cli. 
Vamos a usar sass y he decidido quiar los tests puesto que no los vamos a usar en esta demo. 

```bash
ng new angular6-web-ssr --style=sass --skip-tests
````

Ya podemos ver la app funcionando en http://localhost:4200/

```bash
ng serve
````

