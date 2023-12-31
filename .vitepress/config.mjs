import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "React MasterClass Materials",
  description: "React MasterClass Materials",
  cleanUrls: true,
  themeConfig: { 
    logo: "https://asset.brandfetch.io/idXWV8rEmc/id4RiI5qw_.png", 
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Pre-requisiti', link: '/pre-requisiti/' },
      { text: "Materiali da leggere", link: "/readings/" },
      { text: "Slides", link: "/slides/" },
      { text: "Selfworks", link: "/selfworks/" },
    ],
    footer: {
      message: 'Usa questo materiale con il solo scopo di apprendimento ed esercizio personale, non a scopo divulgativo o lucrativo. I diritti di divulgazione sono riservati.',
      copyright: 'Copyright © 2023 Aulab'
    },
    sidebar: {
      '/slides/': [
        {
          text: "Slides",
          items: [
            {
              text: "01-intro-to-modern-web-development",
              link: "/slides/slides/01.a-intro-to-modern-web-development.md",
            },
            {
              text: "02-intro-to-React-components",
              link: "/slides/slides/01.b-intro-to-react-and-component-hierarchies.md",
            },
            {
              text: "03-intro-to-React-styling",
              link: "/slides/slides/02.a-react-styling-solutions-and-component-libraries.md",
            },
            {
              text: "04-React-form-basics",
              link: "/slides/slides/02.b-react-form-basics.md",
            },
            {
              text: "05-React-state-Todo-app",
              link: "/slides/slides/03-todo-list-checklist.md",
            },
            {
              text: "06-React-component-lifecycle",
              link: "/slides/slides/04-component-lifecycle-hooks-and-api-requests.md",
            },
            {
              text: "07-React-Router-dom",
              link: "/slides/slides/05-react-router.md",
            },
            {
              text: "08-intro-to-Context-API",
              link: "/slides/slides/06-Context-API.md",
            },
            {
              text: "08-React-ecosystem",
              link: "/slides/slides/React-ecosystem.md",
            },
          ],
        }
      ],
      '/selfworks/': [
        {
          text: "Selfworks",
          items: [
            {
              text: "01-intro-to-modern-web-development",
              link: "/selfworks/01-intro-to-modern-web-development/",
            },
            {
              text: "02-intro-to-React-components",
              link: "/selfworks/02-intro-to-react-and-components/",
            },
            {
              text: "03-intro-to-React-styling",
              link: "/selfworks/03-React-styling/",
            },
            {
              text: "04-React-form-basics",
              link: "/selfworks/04-React-form-basics/",
            },
            {
              text: "05-React-lifecycle-hooks",
              link: "/selfworks/05-React-lifecycle-hooks/",
            }, 
            {
              text: "06-Sigle-Page-Application",
              link: "/selfworks/06-React-router-dom/",
            }, 
            {
              text: "07-Context-API",
              link: "/selfworks/07-Context-API/",
            }, 
          ],
        }
      ],
    },
  },
});