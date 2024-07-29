
import { FaInstagramSquare } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandVscode } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import React from 'react'
import Image from "next/image";
import { useRef } from "react";


const Aartibagwan = () => {
  const About = useRef(null);
  const Skils = useRef(null);
  const Projects = useRef(null);
  const Resume = useRef(null);
  const Hireme = useRef(null);
  const HomePage = useRef(null);
  const Contact = useRef(null);
  const sceollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <div className="MainPageFolio">
      <div className='main'>
        <div className='Navbar'>
          <a id='Port' href='#Portfolio'><u> Portfolio</u></a>
          <a onClick={() => sceollToSection(HomePage)} href="#">Home</a>
          <a onClick={() => sceollToSection(About)} href='#'>About</a>
          <a onClick={() => sceollToSection(Skils)} href='#'>Skils</a>
          <a onClick={() => sceollToSection(Projects)} href='#'>Projects</a>
          <a onClick={() => sceollToSection(Resume)} href='#'>Resume</a>
          <a onClick={() => sceollToSection(Contact)} href='#'>Contact</a>
          <button onClick={() => sceollToSection(Hireme)} id='HireButton'>Hire me!</button>
        </div>
        <div ref={HomePage} className='body'>
          <div className='leftdiv'>
            <div className='heding'>
              <h1> I am aarti bagwan a, frontend-Developer</h1>
              <p>I design web apps to turn your ideas into reality.</p>

            </div>

            <div className='Leftdiv2'>

              Let's connect! ----
              <a href='https://www.linkedin.com/in/aarti-bagwan-9200982b2'><span><FaLinkedin id='span1' /></span></a>
              <a href='https://github.com/AartiBagwan'><span><FaGithub id='span2' /></span></a>
              <a href="https://www.instagram.com/front_end_developer_970"><span><FaInstagramSquare id='span3' /></span></a>
            </div>
          </div>

          <div className='rightdiv'>
            <Image src={'/aarti6.jpg'} alt="Aarti" id='Image' height={370} width={360} />
          </div>
        </div>
      </div>

      <div ref={About} className='About'>
        <div className='section2'>
          <h1 id='AboutHeding'><u>ABOUT ME</u></h1>

          <p id='paragraph'>
            Hello, I'm Aarti Bagwan, a seasoned Frontend developer with dynamic and visually stunning cross-platform web applications. Throughout my journey in the field,
            I've honed my skills in leveraging React-Next framework to deliver seamless user experiences
            across various devices and platforms.<br></br><br></br><br></br>

            Driven by a passion for innovation and a keen eye for detail, I thrive on turning ideas into polished,
            functional realities. My portfolio showcases a diverse range of projects, each reflecting my commitment
            to excellence and my ability to adapt to evolving industry trends.<br></br><br></br><br></br>

            From conceptualization to deployment, I specialize in translating client visions into intuitive and
            feature-rich applications that resonate with users. With a strong foundation in front-end, I bring a comprehensive approach to every project, ensuring scalability, performance,
            and user satisfaction.<br></br><br></br><br></br>

            Let's collaborate to bring your next app idea to life with the magic of Frontend Developer!
          </p>
        </div>
      </div>

      <h1 id='OurVisionHeading'><u>Our Vision</u> </h1>
      <div className='section3'>

        <div className='section4'>
          <p id='paragraph1'> we believe in the power of creative desgin to inspire,
            engage, and leave a lasting impact. We're masters of the design in industry,
            creating brands and websites that redefine the game worldWide</p>
        </div>

        <div className='section5'>
          <p id='paragraph2'> Your online Presence isn's just a Page on the internet__it's a
            story that captives your audience from strat to finish! Whether you you're a fresh
            startup or a seasoned corporate giant, we're here to transform digita;
            identity into a tale that leaves your audixence asking fir more.
          </p>
        </div>
      </div>

      <div ref={Skils} className='FirstSkil'>
        <h1 id='SkilHeading'><u>SKILLS</u></h1>
        <div className='SecoundSkil'>

          <span className="Icone1"><FaHtml5 id='Facss' /><br></br><b id='Icone'>HTML</b></span>

          <span className="Icone1"><FaCss3Alt id='Facss' /><br></br><b id='Icone'>CSS</b></span>

          <span className="Icone1"><FaBootstrap id='Facss' /><br></br><b id='Icone'>Bootstrap</b></span>

          <span className="Icone1"><DiJavascript id='Facss' /><br></br><b id='Icone'>Javascript</b></span>

          <span className="Icone1"><TbBrandReact id='Facss' /><br></br><b id='Icone'>React</b></span>

          <span className="Icone1"><TbBrandVscode id='Facss' /><br></br><b id='Icone'>VS code</b></span>

          <span className="Icone1"><FaGitAlt id='Facss' /><br></br><b id='Icone'>Git</b></span>


        </div>
      </div>

      <div ref={Projects} className='Project'>
        <h1 id='PROJECThEDING'><u>Project</u></h1><br></br>

        <div className='section6'>

          <div className='section7'>
            <div className='Card'>
              <Image src={'/weather3.jpg'} alt="Denim Jeans" id="weather" width={600} height={400} />
              <h1 id='Hedingone'>Weather forecast App</h1>
              <p id='paragraphtwo'>A Weather app made using OpenWeatherMap API in Javascript. The app tells the current
                temperature and some additional infomation like Air Quality index, Real Feel, Humidity, Highest Temprature, Lowest Temprature
                , Wind speed, Wide Direction, Pressure, Sunrise and Sunset.AccuWeather, recognized by the World
                Meteorological Organization, stands out for its user-friendly interface and comprehensive data representation.
                It offers features like MinuteCast® forecasts, severe weather alerts, and advanced weather radar, making it a top choice in 2024.  </p>

            </div>

            <div className='Card'>
              <Image src={'/blogpost1.jpg'} alt='aarti' width={600} height={400} />
              <h1 id='Hedingone'>Blog post</h1>
              <p id='paragraphtwo'>A blog post is any article, news piece, or guide that's published in the blog section of a website.
                A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words,
                and contains other media types such as images, videos, infographics, and interactive charts.
                Examples of blog posts include beauty product recommendations, travel and vacation trip reviews,
                and personal blog posts. </p>

            </div>

            <div className='Card'>
              <Image src={'/filip3.jpg'} alt='aarti' width={600} height={400} />
              <h1 id='Hedingone'>Flipkart clone</h1>
              <p id='paragraphtwo'>The flipkart clone app offers a unique opportunity for entrepreneurs to create a customised online
                shopping experience. An Amazon clone app is a mobile application that replicates the functionality
                and features of the popular e-commerce platform, Amazon. It allows users to browse and purchase products,
                track orders, leave reviews, and more, just like on the original Amazon website. </p>

            </div>

            <div className='Card'>
              <Image src={'/Netefix.jpg'} alt='aarti' width={600} height={400} />
              <h1 id='Hedingone'>Netflix clone</h1>
              <p id='paragraphtwo'>The Netflix clone project is a web application developed using HTML, CSS, and JavaScript, aiming to replicate
                the user interface and some features of the popular streaming service, Netflix. Let's break down the project
                into its key components and functionalities.  </p>

            </div>

          </div>
        </div>
      </div>

      <h1 id='AboutHeding'><u>RESUME</u></h1>
      <div ref={Resume} className='MainResume'>
        <div className='leftsection'>
          <p><b><u>CONTACT</u></b></p>

          <p>
            9752723241</p>
          <p>aartibagwan67@gmail.com<br/><br/>
          aartibagwan9893@gmail.com
          </p>
          Khategaon


          <p><b> EDUCATION</b></p>
          <p>2019-2020<br></br>
            *10th pass</p>

          <p>2020-2021 <br></br>
            *12th (agriculture)
          </p><br></br>

          <p>2024
            *BSC</p>

          <p><b>LANGUAGES</b></p>
          * Hindi (fluent)<br></br>
          *English (Intermediate)

          <p><b>HOBBIES</b></p>
          *painting
          <br></br><br></br><br></br><br></br>
        </div>

        <div className='rightsection'>
          <h1> Aarti Bagwan</h1>
          <h2><u>Front-End Developr</u></h2>

          <p><u>PROFILE</u></p>
          <p>
            Seasoned web developer with a strong  focus on innovation and user-centric Design.
            Brings extensive experience in crafting responsive, mobile-friendly Websites that deliver exceptional user experiences
          </p>

          <p><b><u>WORK EXPERINCE</u></b></p>
          <p><b> Junior Web Developer</b></p>
          •	Assisted in the development of e-commerce  website <br></br>
          •	Collaborated with QA teams to identify and address bugs.<br></br>
          •	Website performance across major browser.<br></br>

          <p><b><u>SKILLS</u> </b></p>
          •	Programming languages: JavaScript<br></br>
          •	Web development tools: HTML, CSS,  React<br></br>
          •	Version control: Git<br></br>
          •	Problem-solving <br></br>
          •	Team collaboration<br></br>

          <p><b><u>Projects</u></b></p>
          •	  Weather forecast App: This application helps to get the temperature details of user desired city.<br></br>
          •	Blog post: This application is useful for creating blogs and managing blogs.<br></br>
          •	Flipkart clone: In this application I tried to make a copy of flipkart website.<br></br>
          •	Netflix clone:  In this application I tried to make a copy of  Netflix  website.<br></br>

          <p><b><u>Framework Libraries</u></b></p>
          * React js, Next js

          <p><b>Tools</b></p>
          Visual Studio,  Git, Windows, Bootstrap
        </div>
      </div>
      <div ref={Contact}>
        <div ref={Hireme} className='firstbox'>

          <h1 ><span className='CntactHeding'><u>CONTACT ME</u></span></h1>
          <div className='gridbox'>
            <div className='gridI1'>
              <h3>Send us a message</h3>
  <form action="https://formspree.io/f/xjkbgrpn" method="POST">
              <input name="Name" type="text" placeholder="Your Name" /><br />
              <input  name="Email" type="Email" placeholder="Your Mail" /><br />
              <input  name="Message" type="text" placeholder="subject" /><br />
              <button className='btnsb'>Submit</button>
              </form>
              <br /><br />
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Aartibagwan
