type SectionType = {
  section: {
    name: string
    altname?: string
  }
  text?: string
  text2?: string
  button?: string
  button2?: string
  lists?: { name: string; data: string[] | string; imgSrc?: string }[]
}

interface ContactInterface extends SectionType {
  text3: string
}

interface InsightsInterface extends SectionType {
  blogArticles: {
    title: string
    text: string
    date: string
    imgSrc: string
  }[]
}

const Intro: SectionType = {
  section: {
    name: 'Intro',
    altname: 'In the beginning god ran npm start',
  },
  text: 'I’m Chris, Front-End Web-stronaut.',
  text2: 'I create real-world web applications that aim for the stars.',
  button: 'Read More',
  button2: 'Meet Me',
}

const About: SectionType = {
  section: {
    name: 'About',
    altname: 'Did I mention im obsessed with space?',
  },
  text: 'I’m Chris Menkhus a Colorado based web developer and designer. I develop real-world web applications through modern web design concepts, web development technologies, and search engine optimization practices. I craft custom web solutions that are tailored specifically to the clients needs.',
  text2:
    'When im not programming or spending time with my girlfriend im dreaming of space, comic book movies, and my next crazy adventure. Every weekend I go on an adventure wether that be finding a beautiful new view of Colorado or slaying monsters and gaining EXP in Dungeons & Dragons. ',
  button: 'Contact Me',
  lists: [
    {
      name: 'Languages',
      imgSrc: '/icon/terminal.svg',
      data: [
        'Typescript',
        'Javascript (ES6+)',
        'HTML & CSS',
        'SQL (PostgresSQL)',
        'C# & Java (Unity / Android)',
      ],
    },
    {
      name: 'Frameworks & Libraries',
      imgSrc: '/icon/library.svg',
      data: [
        'React / NextJs',
        'Redux (Redux Toolkit)',
        'Styled Components / CSS in JS',
        'PostgresSQL & ExpressJs',
        'Tailwind, Bootstrap',
        'CSS Anim, Framer Motion',
      ],
    },
    {
      name: 'Tools',
      imgSrc: '/icon/tools.svg',
      data: [
        'NodeJS',
        'Figma / Gimp / Inkscape',
        'VS Code, ESLint & Prettier',
        'Git & Github',
        '🚀 Google',
      ],
    },
  ],
}

{
  ;[
    'React / NextJs',
    'Redux (Redux Toolkit)',
    'PostgresSQL & ExpressJs',
    'Styled Components / CSS in JS',
    'Tailwind, Bootstrap',
    'CSS anim, Framer, ',
  ]
}

{
  ;[
    'Figma / Gimp / Inkscape',
    'Git & Github',
    'NodeJS',
    'VS Code, ESLint & Prettier',
    'Google',
  ]
}

{
  ;[
    'Typescript',
    'Javascript (ES6+)',
    'HTML & CSS',
    'SQL (PostgresSQL)',
    'C# & Java (Unity / Android)',
  ]
}

const Insights: InsightsInterface = {
  section: {
    name: 'Insights',
    altname: 'Blog Articles',
  },
  button: 'View Blog',
  blogArticles: [
    {
      title:
        'Start a New Project With NextJs, Typescript, Styled Components & ESLint in VsCode.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias, quam accusamus voluptate ab, distinctio excepturi laboriosam quia autem id sapiente soluta. Iusto, maxime ea voluptates dicta fuga qui harum, dignissimos repellendus in provident ad omnis placeat quia officiis? Aliquid sequi reiciendis iure delectus asperiores eos tempora culpa, saepe quia!',
      date: 'feb, 14th, 2021',
      imgSrc: '/pexels-anete-lusina-5240544.jpg',
    },
    {
      title: 'What Using NextJs Adds to React',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias, quam accusamus voluptate ab, distinctio excepturi laboriosam quia autem id sapiente soluta. Iusto, maxime ea voluptates dicta fuga qui harum, dignissimos repellendus in provident ad omnis placeat quia officiis? Aliquid sequi reiciendis iure delectus asperiores eos tempora culpa, saepe quia!',
      date: 'feb, 14th, 2021',
      imgSrc: '/pexels-kevin-ku-577585.jpg',
    },
    {
      title: 'Creating a Code Generator with NodeJs.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias, quam accusamus voluptate ab, distinctio excepturi laboriosam quia autem id sapiente soluta. Iusto, maxime ea voluptates dicta fuga qui harum, dignissimos repellendus in provident ad omnis placeat quia officiis? Aliquid sequi reiciendis iure delectus asperiores eos tempora culpa, saepe quia!',
      date: 'feb, 14th, 2021',
      imgSrc: '/pexels-vlado-paunovic-10457996(1).jpg',
    },
  ],
}

const Portfolio: SectionType = {
  section: {
    name: 'Portfolio',
    altname: 'Projects & Case Studies',
  },
  button: 'View Portfolio',
}

const DevProcess: SectionType = {
  section: {
    name: 'Dev Process',
    altname: 'My Website Creation Process',
  },
  lists: [
    {
      name: 'Outline Project Through Blueprinting',
      data: 'When I start a project the first thing I think about is what does this project offer the visitors and what does the project mean to the client. Understanding why the client wants a website (or what they want out of a website) is very important in delivering an outstanding website. After I have defined the goals of the website I mock-up a rough draft / blueprint of the site to get an idea for number of pages, neccesary API’s, stylistic choices, and tools to use.',
    },
    {
      name: 'Web Design & Style Guide Creation',
      data: 'I create a style guide that contains all the information needed to turn the design into a website. This information includes font-family’s, headers, button styles, colors, icons, images, effects and everything else used in the design. This style guide can then also be used to design new pages for the website.',
    },
    {
      name: 'Components & Utilities Programming',
      data: 'Using the Project Blueprint, Style Guide, and Design Document as a guide I create reusable, functional, and clean components / utilities to be used throughout the application. Each UI component is developed isolated from other components with no margin because I use a custom Spacer component to take care of alignment. Keeping development clean and no harder than it needs to be is key.',
    },
    {
      name: 'Codebase Testing',
      data: 'Lorem ipsum dolor sit amet, autem ridens ceteros ex pri. Has et quis audiam copiosae, mutat scripta duo id. Mea tantas saperet posidonium in.',
    },
    {
      name: 'Deployment',
      data: 'Lorem ipsum dolor sit amet, autem ridens ceteros ex pri. Has et quis audiam copiosae, mutat scripta duo id. Mea tantas saperet posidonium in.',
    },
  ],
}

const Contact: ContactInterface = {
  section: {
    name: 'Contact',
    altname: 'Get In Touch',
  },
  button: 'Send',
  button2: 'Open Calendar',
  text: 'Send a Message',
  text2: 'Schedule a Meeting',
  text3: 'Let’s schedule a time to get to know eachother.',
}

export { Intro, About, Insights, Portfolio, DevProcess, Contact }
