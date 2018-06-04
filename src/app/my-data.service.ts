import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor() { }

  getData() {
    return {
      name:'Nela',
      description: `Web Developer desde que conocí los “encantos” de JQuery. Frontend lead en Coderty, proyecto que desde hace unos años es mi vida, mi casa y mi oficina, y donde Angular ocupa un espacio central, abarcando proyectos de todo tipo de envergadura.
      Amante del deporte, los animales y las comunidades de aprendizaje en la que poder aportar y obtener conocimiento. Organizador de Angular Almería y AlmeríaJS.
      Habitante de Almería por necesidad vital y paisaje lunar, aunque viajante inquieto para poder comparar.`,
      position: 'Frontend Lead Coderty',
      socialLinks: [
        {
          matIcon: 'flight',
          icon: 'fa-svg fa-twitter',
          link: 'https://twitter.com/almeriajs'
        },
        {
          matIcon: 'share',
          icon: 'fa-svg fa-github',
          link: 'https://github.com/almeriajs'
        },
        {
          matIcon: 'home',
          icon: 'fa-svg fa-linkedin',
          link: 'https://www.linkedin.com/in/alodev/'
        }
      ],
      projects: [
        {
          title: 'Coderty',
          subtitle: 'Yes, we do!',
          desc: `CODERTY es la respuesta tecnológica a todo aquello que imaginas, ideas o proyectas. Creamos soluciones a medida adaptando las últimas tecnologías a tus necesidades. Convertimos tus sueños en innovación.`,
          imgSrc: 'assets/coderty-logo.png',
          imgAlt: 'Logo Coderty',
          socialLinks: [
            {
              icon: 'fa-svg fa-earth',
              link: 'http://coderty.com'
            },
            {
              icon: 'fa-svg fa-github',
              link: 'https://github.com/coderty'
            },
            {
              icon: 'fa-svg fa-linkedin',
              link: 'https://www.linkedin.com/company/coderty/'
            },
            {
              icon: 'fa-svg fa-instagram',
              link: 'https://www.instagram.com/coderty/'
            }
          ]
        },
        {
          title: 'Runnerty',
          desc: `Herramienta de software libre escrita en NodeJS que te permite gestionar y planificar tus procesos. Céntrate en la lógica de negocio y olvídate de gestionar dependencias entre procesos, jobs, gestión de errores o notificaciones.`,
          subtitle: 'Process Orchestrator',
          imgSrc: 'assets/runnerty-logo.png',
          imgAlt: 'Logo runnerty',
          socialLinks: [
            {
              icon: 'fa-svg fa-twitter',
              link: 'https://twitter.com/aloDev'
            },
            {
              icon: 'fa-svg fa-github',
              link: 'https://github.com/alo'
            },
            {
              icon: 'fa-svg fa-linkedin',
              link: 'https://www.linkedin.com/in/alodev/'
            }
          ]
        },
        {
          title: 'AlmeríaJS',
          desc: `Grupo interesado en el desarrollo de aplicaciones usando Javascript. Cualquier framework (de los muchos que hay) es válido. No solo hablamos de los frameworks en sí, sino cualquier proyecto open source desarrollado con JS!`,
          imgSrc: 'assets/almeriajs.png',
          subtitle: 'Angular Almeria friends',
          imgAlt: 'Logo AlmeriaJS',
          socialLinks: [
            {
              icon: 'fa-svg fa-twitter',
              link: 'https://twitter.com/almeriajs'
            },
            {
              icon: 'fa-svg fa-github',
              link: 'https://github.com/almeriajs'
            },
            {
              icon: 'fa-svg fa-meetup',
              link: 'https://www.meetup.com/almeriajs/'
            }
          ]
        }
      ],
      title: 'Angular SSR',
      meta: [
        {
          name: 'author',
          content: 'Álvaro Quirós'
        },
        {
          name: 'keywords',
          content: 'angular seo, angular 5 universal, nelacantinela'
        },
        {
          name: 'description',
          content: 'Angular SEO friendly app! Enjoy'
        },
        {
          name: 'copyright',
          content: 'Álvaro Quirós'
        },
        {
          property: 'og:title',
          content: 'Angular SSR Blog'
        },
        {
          property: 'og:description',
          content: 'Angular SSR Blog'
        },
        {
          property: 'og:image',
          content: 'Angular SSR Blog'
        },
        {
          property: 'og:url',
          content: 'Angular SSR Blog'
        },
        {
          property: 'og:site_name',
          content: 'angularalmeria.com'
        }
      ]
    };
  }
}
