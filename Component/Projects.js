import React from 'react'

const projects = () => {
  return (
    <div ref={Projects} className='Project'>
        <h1 id='PROJECThEDING'><u>Project</u></h1><br></br>

        <div className='section6'>

          <div className='section7'>
            <div className='Card'>
              <Image src={'/weather3.jpg'} alt="Denim Jeans" width={600} height={400} />
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
  )
}

export default projects
