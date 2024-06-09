import React from 'react'
import './work.css'




const data = [
  {
    id: 1,
    title: 'Esports Players and Coding – Tampa, FL - Unreal Engine 5 Instructor',
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
    description2: 'Implemented cutting-edge design principles and intuitive navigation systems to significantly enhance user engagement and satisfaction. Created visually appealing and user-friendly interfaces that streamlined the user journey, resulting in increased interaction and positive feedback. Focused on delivering a seamless and enjoyable user experience that aligned with the latest industry standards and best practices.',
    description3: 'Optimized SEO strategies to significantly increase visibility and drive organic traffic, leading to higher engagement and conversion rates. Streamlined backend processes to enhance site performance and manageability, ensuring a smooth and efficient user experience. Delivered a robust, scalable solution that strengthened the company’s online presence and operational efficiency, contributing to sustained growth and competitive advantage.',
  },
  {
    id: 3,
    title: 'Mathnasium – Tampa, FL - Assistant Center Director',
    subheading: 'Tutoring center and franchise  specializing in K-12 mathematics education.',
    time: '2021-2022',
    description1: 'Expertly organized and managed customer information using Excel and Microsoft Office, enabling efficient utilization across various business functions. Streamlined data entry and retrieval processes to enhance accuracy and accessibility, supporting informed decision-making and improved customer service. Created comprehensive reports and dashboards that provided valuable insights, contributing to the overall operational effectiveness and strategic planning of the company.',
    description2: 'Cultivated exceptional communication and teaching skills, demonstrating the ability to articulate complex concepts in a clear and accessible manner. Effectively engaged diverse audiences, ensuring understanding and retention of key information. Proven talent for simplifying intricate topics, fostering a collaborative and supportive learning environment that enhances overall comprehension and skill development.',
    description3: 'Collaborated with a marketing specialist to innovate and implement advanced strategies and techniques for customer acquisition. Played a key role in developing targeted campaigns that effectively attracted and retained customers, driving significant growth and market reach. Leveraged data-driven insights to refine approaches, resulting in increased engagement and conversion rates.',
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