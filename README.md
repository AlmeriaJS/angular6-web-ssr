# Angular6WebSsr

Este proyecto se ha creado para la charla de AlemríaJS de Angular 6 SSR

## ¿Qué vamos a hacer en este ejemplo?

Vamos a crear una web personal sencilla, dinámica, SEO friendly, donde mostrar una pequeña bio personal y un listado con nuestros últimos proyectos.

Vamos a hacer una rama por cada paso que demos para poder coger el proyecto en el punto donde nos convenga. En la rama master vamos a dejar el proyecto finalizado.

## Prerequisitos

* Node ~8.10
* npm 5+ o yarn
* @angular/cli ^6

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

### Inicial

Generamos el proyecto con angular-cli.
Vamos a usar sass y he decidido quiar los tests puesto que no los vamos a usar en esta demo.

```bash
ng new angular6-web-ssr --style=sass --skip-tests
```

Ya podemos ver la app funcionando en http://localhost:4200/

```bash
ng serve
```

### step-1

Lo primero que haremos será añadir a la app la librería de angular material. Gracias a schematics (Angular v6+) podemos hacerlo tan sencillo como

```bash
ng add @angular/material
```

La web / app la hemos diseñado con 3 componentes (además del componente principal **app-component**).

1 - El componente de la descripción general que vamos a llamar **app-main-description**

```bash
ng generate component components/main-description
```

2 - El componente que listará los proyectos **app-projects**

```bash
ng generate component components/projects
```

3 - El componente de "enlaces de redes sociales" que usaremos dentro de los otros dos componentes y llamaremos **app-social-links**

```bash
ng generate component components/social-links
```

Y modificamos el componente principal para mostrarlo los nuevos componentes y comprobar que todo funciona correctamente

app.component.html

```html
<app-main-description></app-main-description>
<app-projects></app-projects>
<app-social-links></app-social-links>
```

### step-2

Creamos un servicio donde centralizar los datos que vamos a mostrar en la web

```bash
ng generate service my-data
```

Aquí he metido datos de prueba y enlaces de prueba, no lo pego aquí directamente porque es muy extenso, entrad en el archivo directamente.

Un poco de **magia de Angular** para crear visualizar los datos en los componentes que hemos creado anteriormente

Primero importamos los módulos de material que vamos a usar en **app.module.ts**

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule, MatIconModule } from '@angular/material'; // ;)

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainDescriptionComponent } from './components/main-description/main-description.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDescriptionComponent,
    ProjectsComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule, // ;)
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Empezamos por nuestro componente **main-description** donde añadimos los 4 inputs necesarios

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-description',
  templateUrl: './main-description.component.html',
  styleUrls: ['./main-description.component.sass']
})
export class MainDescriptionComponent {
  @Input() name;
  @Input() mainDescription;
  @Input() position;
  @Input() socialLinks;

  constructor() {}
}
```

```html
<mat-card>
  <mat-card-header>
    <mat-card-title>Hola, soy {{name}}!</mat-card-title>
    <mat-card-subtitle>{{position}}</mat-card-subtitle>
  </mat-card-header>
  <img matCardImage
      align="center"
      src="assets/profile.jpeg"
      style="max-width:300px; margin: 0 auto;">
  <mat-card-content>
    {{mainDescription}}
  </mat-card-content>
  <mat-card-actions align="end">
    <app-social-links [socialLinks]="socialLinks"></app-social-links>
  </mat-card-actions>
</mat-card>
```

Y ahora preparamos el componente con el que representaremos los enlaces a las redes sociales **social-links.component**

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.sass']
})
export class SocialLinksComponent {
  @Input() socialLinks;
  constructor() {}
}
```

```html
<a [href]="socialLink?.link"
  target="_blank"
  *ngFor="let link of socialLinks">
  <mat-icon color="primary">{{link.matIcon}}</mat-icon>
</a>
```

Por ahora no vemos que se muestre nada, normal ... Vamos a modificar el componente principal **app.component**

```typescript
import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private myDataService: MyDataService) {}
  data;

  ngOnInit() {
    this.data = this.myDataService.getData();
  }
}

```

```html
<app-main-description [name]="data.name"
  [mainDescription]="data.description"
  [position]="data.position"
  [socialLinks]="data.socialLinks"></app-main-description>
<app-projects></app-projects>
```

Ahora sí, empezamos a ver algo! 