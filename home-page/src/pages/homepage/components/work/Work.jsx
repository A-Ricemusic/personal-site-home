import React from 'react'
import './work.css'




const data = [
  {
    id: 1,
    title: 'ESPC – Tampa, FL - Unreal Engine 5 Instructor',
    subheading: 'Coding/programming academy specializing in web and game development',
    time: '2022-present',
    description1: 'Leveraged expertise in Unreal Editor for Fortnite to develop professional-grade experiences featured in prominent esports tournaments and events. Demonstrated a high level of creativity and technical proficiency by creating immersive, engaging gameplay environments that captivated audiences and enhanced the competitive experience. Successfully collaborated with cross-functional teams to ensure seamless integration and performance, showcasing the ability to deliver high-quality, impactful content under tight deadlines.',
    description2: 'Designed and developed comprehensive curriculum to teach essential computer science concepts and techniques, including object-oriented programming and code optimization. Created engaging, interactive lessons that simplified complex topics, fostering a deep understanding and practical application among students. Continuously refined the curriculum based on feedback and advancements in the field, ensuring it remained current and impactful.',
    description3: 'Successfully instructed students of all ages in Unreal Engine 5, Roblox Studio, and Blender, fostering a creative and collaborative learning environment. Demonstrated expertise in these platforms by developing engaging, hands-on curriculum that catered to diverse learning styles and skill levels. Enabled students to gain practical, real-world experience in game development and 3D modeling, while also cultivating their problem-solving and critical thinking abilities.',
  },
  {
    id: 2,
    title: 'Re-A-Door Cabinets – Tampa, FL - Wordpress Web Developer',
    subheading: 'Kitchen cabinet and cabinet refacing company centered in Tampa Fl.',
    time: '2023-present',
    description1: 'Designed and developed a comprehensive WordPress website from the ground up, significantly enhancing user experience, SEO performance, and backend functionality.',
    description2: 'Implemented modern design principles and intuitive navigation to improve user engagement and satisfaction.',
    description3: ' Optimized SEO to increase visibility and drive organic traffic, while streamlining backend processes to boost overall site performance and manageability. Delivered a robust, scalable solution that contributed to the company\'s online presence and operational efficiency.',
  },
  {
    id: 3,
    title: 'Mathnasium – Tampa, FL - Assistant Center Director',
    subheading: 'Tutoring center and franchise  specializing in K-12 mathematics education.',
    time: '2021-2022',
    description1: 'Organized customer information in Excel and microsoft office to be used in various business functions.',
    description2: 'Developed strong communication and teaching skills, and the ability to explain complex concepts in a simple way.',
    description3: 'Worked with a marketing specialist to innovate strategies and techniques for customer acquisition.',
  },
  {
    id: 4,
    title: 'Mission Capital – Tampa, FL – Collateral Analyst',
    subheading: 'Mortgage service business specializing in assignment chain verification.',
    time: '2019-2021',
    description1: 'Examined and verified assignment chains of mortgages for a variety of counties and states.',
    description2: 'Prepared gap, corrective, and rescission assignments of mortgage to correct assignment chains.',
    description3: 'Utilized Javascript and Python to organize and automate processes to cure collateral files for clients.',
  },
  
 
 
]


const Work = () => {
  return (
    <section id='work'>
      <h5>My Work Experience</h5>
      <h2>Work</h2>

      <div className="container work__container">
        {
          data.map(({id, title,subheading,time, description1, description2,description3}) => {
            return (
              <article key={id} className='work__item'>
              <h2 className="work__time">{time}</h2>
              <ul>
              <li className='work__title'>{title}</li>
              <br></br>
              <li className="work__subheading">{subheading}</li>
              </ul>
              <div>
                <h4 className="description">{description1}</h4>
                <br></br>
                <h4 className="description">{description2}</h4>
                <br></br>
                <h4 className="description">{description3}</h4>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Work