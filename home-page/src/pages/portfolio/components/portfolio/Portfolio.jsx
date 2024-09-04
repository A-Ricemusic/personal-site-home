import React from 'react'
import './portfolio.css'



const data = [


  {
    id: 1,
    title: 'Custom Northern Homes Website',
    description: "Developed the front-end of the customnorthernhomes.com website using HTML, CSS, and JavaScript, incorporating custom animations to enhance user engagement. Built on WordPress and PHP, the site is optimized for SEO, boosting search engine visibility and driving traffic. Additionally, I implemented advanced tracking and SEO strategies to extend the website's reach beyond the Tampa Bay area, effectively expanding the business’s online presence and customer base.",
    video: "https://www.youtube.com/embed/oqlJgecI1IY",
    isVideo: false,
    demo: 'https://customnorthernhomes.com/',
    isDemo: true,
    code: 'https://github.com/A-Ricemusic/WordpressCodeRe-A-Door.git',
    isCode: false
  },

  {
    id: 2,
    title: 'Box Fighting Tournament Map build in UEFN',
    description: "Designed and developed a Fortnite box fighting map in Unreal Engine (Fortnite Creative) from front-end to back-end. The map incorporates custom materials and 3D models, optimized for peak performance. Additionally, the backend was engineered to enhance in-game efficiency. This map is actively used in competitive esports events within the Tampa Bay Area, showcasing its high-quality design and functionality in a professional gaming environment.",
    video: "https://youtube.com/shorts/H4mqybCspKk?si=dSD5Bz5xZZL77nVC",
    isVideo: true,
    demo: 'https://www.re-a-door-cabinets.com/',
    isDemo: false,
    code: 'https://github.com/A-Ricemusic/WordpressCodeRe-A-Door.git',
    isCode: false
  },

  {
    id: 3,
    title: 'Re-a-door Cabinets Website',
    description: "Developed a full-stack web application utilizing WordPress and PHP to serve as the primary online platform for Re-A-Doors Cabinets. The site is optimized for SEO, enhancing visibility in search engines and increasing traffic. Additionally, I implemented advanced tracking and SEO strategies to ensure the business ranks in search results beyond the Tampa Bay area, expanding its digital reach and customer base.",
    video: "https://www.youtube.com/embed/oqlJgecI1IY",
    isVideo: false,
    demo: 'https://www.re-a-door-cabinets.com/',
    isDemo: true,
    code: 'https://github.com/A-Ricemusic/WordpressCodeRe-A-Door.git',
    isCode: true
  },

  {
    id: 4,
    title: 'Zone Wars Tournament Map build in UEFN',
    description: 'Created and engineered a Fortnite Zone Wars map in Unreal Engine (Fortnite Creative), handling both front-end and back-end development. The map features custom materials and 3D models tailored for optimal performance. Additionally, the backend was designed to boost gameplay efficiency. This map is currently utilized in competitive esports events in the Tampa Bay Area, demonstrating its high-performance design and competitive viability.',
    video: "https://youtube.com/shorts/rkAt7zUnSJg?si=b7qxrgc5wOJ8WsAW",
    isVideo: true,
    demo: 'https://www.re-a-door-cabinets.com/',
    isDemo: false,
    code: 'https://github.com/A-Ricemusic/WordpressCodeRe-A-Door.git',
    isCode: false
  },



  {
    id: 5,
    title: 'Food Tracker Web Application',
    description: "This project features a full stack web application designed using flask and bootstrap. The web application tracks a user's favorite foods. The app features user functionality such as logging in, logging out and signing up. This application as showcases some object relational mapping using sql-alchemy, template inheritance with jinja, and both backend and frontend programming fundamentals. The programming languages used to create this application are as follows, Python, Javascript, Html, Css, and Scss. Watch the video breakdown, and visit the source code for more information",
    video: "https://www.youtube.com/embed/oqlJgecI1IY",
    isVideo: true,
    demo: 'https://www.roblox.com/games/9853999062/ESPC-Sword-Game-Beta',
    isDemo: false,
    code: 'https://github.com/A-Ricemusic/FoodTrackerApp-Flask',
    isCode: true
  },
  {
    id: 6,
    title: 'Portfolio website template React',
    description: "This project features a portfolio website template build in react. The template was created and designed to match the layout and design of this website. The portfolio features react js, and illustrates Anthony's ability to manage state, work with props, create custom components, and build fully functioning website using the React js library.",
    video: "https://www.youtube.com/embed/gU-hpd0uQDs",
    isVideo: true,
    demo: 'https://www.roblox.com/games/9853999062/ESPC-Sword-Game-Beta',
    isDemo: false,
    code: 'https://github.com/A-Ricemusic/portfolio-site-template.git',
    isCode: true
  },
  {
    id: 7,
    title: 'Roblox Rpg game and development template',
    description: 'This project features a game and development template personally design by Anthony for RPG games in Roblox Studio. He designed and created the entire code base for the template himself. It features a fully functioning quest system,enemy spawning system, weapon system, ability system, money system, day and night system, npc chat system, movement system, database integration, and more. The design of this template was done using the Lua language and the Roblox API. The game framework used was Aerogame, and this project was also integrated with VS Code using Rojo. The demo project linked is an example of a sword game RPG made with this template. This RPG is extensive with 20 main quests, 35 different weapons, 4 regions of combat, and integrated multiplayer. For more information about this project checkout the video breakdown, source code, and demo project linked below.',
    video: "https://www.youtube.com/embed/0eEE3v6-ouU",
    isVideo: true,
    demo: 'https://www.roblox.com/games/9853999062/ESPC-Sword-Game-Beta',
    isDemo: true,
    code: 'https://github.com/A-Ricemusic/ROBLOX_ESPC_RPG_TEMPLATE_CODE',
    isCode: true
  },
  {
    id: 8,
    title: 'Roblox capture the flag game and development template',
    description: 'This project feature a game and development template designed for any capture the flag multiplayer games in Roblox Studio. Anthony created, designed and developed the code based, and used the Roblox’s capture the flag template as a guide and model for this project. This project is an extension of the original template imbedded in Roblox Studio. However, this project includes a fully functioning map voting system, sword weapon system, round system, movement system, scoring system, and more. It is designed to be used with the Aerogame framework, along with VS code integration using Rojo. The Template also includes a host of classes custom coded for flexibility, and can be used inside the game template. For more information, please watch the video breakdown, visit the source code, and try the demo game designed with this template.',
    video: 'https://www.youtube.com/embed/7uzGP-K3TzU',
    isVideo: true,
    demo: 'https://www.roblox.com/games/9853999062/ESPC-Sword-Game-Beta',
    isDemo: true,
    code: 'https://github.com/A-Ricemusic/Capture-the-flag_SwordGame-Template',
    isCode: true
  },

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, title, description, video, isVideo, demo, isDemo, code, isCode}) => {
            return (
              <article key={id} className='portfolio__item'>
              <h5 className='portfolio__title'>{title}</h5>
              <p className='portfolio__description'>{description}</p>
              <div className="portfolio__item-cta">
               {isVideo && <iframe width="50%" height="75%" src={video} title="Video breakdown" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>}
               {isDemo && <a rel="noreferrer"  href={demo} className='btn' target='_blank'>Try Demo</a>}
               {isCode && <a rel="noreferrer"  href={code} className='btn' target='_blank'>Source Code</a>}
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio