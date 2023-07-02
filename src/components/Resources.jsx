import React,{useEffect, useState} from 'react';
import Layout from '../layout/Layout';
import {FaDownload,FaChevronDown, FaChevronUp} from "react-icons/fa";
import "./resources.css";
import h1 from "../16.pdf"
import h2 from "../h2.pdf";
import h3 from "../h3.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Resources = () => {
  const [expandedQuestion,setExpandedQuestion] = useState(null);
  const images = [
    "https://tse1.mm.bing.net/th?id=OIP.9CwvXkLSJj-URVqfDR0HLwHaFj&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.jgXXoWBy0630Ltl6FdDEUAHaE7&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.fjyEx5mOwUHmk6k4QN1eRQHaD3&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.dcSWTeE-FxXRbcpqf1uAkAHaFj&pid=Api&P=0&h=180",
    ]
  const images1 = [
    "https://tse4.mm.bing.net/th?id=OIP.ZMWB20E5_lf3ytsxZUfjQAHaIp&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.SuxNjatGljItO_zEMezS8QHaHa&pid=Api&P=0&h=180",
    "https://i.pinimg.com/originals/ad/04/29/ad0429a7b8651e7ecfbe1422f86bd8d3.png",
    "https://prang.com/wp-content/uploads/2019/10/2019_WaterPollutionAwareness_07.18-01.png",
    "https://tse2.mm.bing.net/th?id=OIP.W4xD2uu3AUfA1UIkvlXx3QHaJi&pid=Api&P=0&h=180",
  ]
  const articles = [
    {
      id: 1,
      title: '10 Essential Personal Hygiene Practices',
      description: 'Learn about the ten key personal hygiene practices for maintaining good health.',
      link: 'https://example.com/article1',
    },
    // Add more articles...
  ];

  const videos = [
    {
      id: 1,
      title: 'Proper Handwashing Technique',
      description: 'Watch this video to learn the correct way to wash your hands to prevent the spread of germs.',
      link: 'https://youtube.com/video1',
    },
    // Add more videos...
  ];

  const infographics = [
    {
      id: 1,
      title: 'Food Safety Tips',
      description: 'This infographic provides essential food safety tips to prevent foodborne illnesses.',
      image: 'food-safety-infographic.jpg',
    },
    // Add more infographics...
  ];

  const downloads = [
    {
      id: 1,
      title: 'Healthy Habits Checklist for Kids',
      description: 'Download this checklist to teach kids about healthy habits such as handwashing and teeth brushing.',
      file: 'healthy-habits-checklist.pdf',
    },
    // Add more downloadable PDFs...
  ];

  const websites = [
    {
      id: 1,
      title: 'Centers for Disease Control and Prevention (CDC)',
      description: 'Access comprehensive health and hygiene information from the CDC.',
      link: 'https://www.cdc.gov',
    },
    // Add more recommended websites...
  ];

  const faqs = [
    {
      id: 1,
      question: 'What is water pollution?',
      answer: 'Water pollution refers to the contamination of water bodies, such as lakes, rivers, oceans, and groundwater, by harmful substances or pollutants. These pollutants can be chemicals, pathogens, or physical agents that adversely affect the quality of water and pose risks to aquatic life, ecosystems, and human health.',
    },
    {
      id: 2,
      question: 'What are the main sources of water pollution?',
      answer: 'The main sources of water pollution include industrial discharges, agricultural runoff (containing fertilizers and pesticides), improper waste disposal, sewage and wastewater discharge, oil spills, mining activities, and atmospheric deposition. These human activities introduce pollutants into water bodies, causing degradation of water quality.',
    },
    {
      id: 3,
      question: ' What are the effects of water pollution on aquatic ecosystems?',
      answer: 'Water pollution can have severe effects on aquatic ecosystems. It can lead to the depletion of oxygen levels in water, making it difficult for aquatic organisms to survive. Pollutants can also disrupt the balance of ecosystems, harm or kill aquatic plants and animals, and reduce biodiversity. Additionally, some pollutants can accumulate in the food chain, leading to bioaccumulation and biomagnification.',
    },
    {
      id: 4,
      question: 'How does water pollution impact human health?',
      answer: 'Water pollution can pose significant risks to human health. Contaminated water can transmit waterborne diseases, such as cholera, dysentery, hepatitis, and gastrointestinal illnesses. Chemical pollutants, including heavy metals and pesticides, can enter the human body through contaminated water and have long-term health effects, such as organ damage, cancer, and developmental disorders.'
    },
    {
      id: 5,
      question: 'What are the environmental consequences of water pollution?',
      answer: 'Water pollution can have far-reaching environmental consequences. It can disrupt ecosystems, reduce biodiversity, and degrade habitats for aquatic plants and animals. Pollution can harm or kill fish and other marine life, leading to economic losses for fishing industries and coastal communities. It can also contaminate soil and groundwater, further impacting terrestrial ecosystems.',
    },
    {
      id: 6,
      question: 'How can we prevent and control water pollution?',
      answer: ' Preventing and controlling water pollution requires a combination of individual and collective efforts. Some measures include implementing stricter regulations and policies on pollutant discharge, promoting sustainable agricultural practices, improving wastewater treatment systems, adopting eco-friendly industrial processes, educating the public about water conservation, and promoting responsible waste disposal',
    },
    // Add more frequently asked questions...
  ];
    // Add more local services...

  let player;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = h1;
    link.download = 'to stop water pollution tips.pdf';
    link.click();
  };
  const handleDownload2 = () => {
    const link = document.createElement('a');
    link.href = h2;
    link.download = 'causes of water pollution.pdf';
    link.click();
  };
  const handleDownload3 = () => {
    const link = document.createElement('a');
    link.href = h3;
    link.download = 'effects of water pollution.pdf';
    link.click();
  };

  const handleQuestionClick = (id) => {
    if (expandedQuestion === id) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(id);
    }
  };

  useEffect(()=>{
    AOS.init({duration:2000,offset:300});
  },[])

  return (
    <Layout>
      
  
    <div className="resources-page">
    <section className="slider-section" data-aos="zoom-in">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image)=>{ return (
          <SwiperSlide><img src={image} /></SwiperSlide>
        )
        })}
      </Swiper>
      </section>
    <section className="slider-section1" data-aos="zoom-in">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images1.map((image)=>{ return (
          <SwiperSlide><img src={image} /></SwiperSlide>
        )
        })}
      </Swiper>
      </section>
      <section className="who-section">
        <div className="who-description">
          <h2 data-aos="fade">About WHO</h2>
          <p data-aos="fade-right">Contaminated water and poor sanitation are linked to transmission of diseases such as cholera, diarrhoea, dysentery, hepatitis A, typhoid and polio. Absent, inadequate, or inappropriately managed water and sanitation services expose individuals to preventable health risks. This is particularly the case in health care facilities where both patients and staff are placed at additional risk of infection and disease when water, sanitation and hygiene services are lacking. Globally, 15% of patients develop an infection during a hospital stay, with the proportion much greater in low-income countries.

Inadequate management of urban, industrial and agricultural wastewater means the drinking-water of hundreds of millions of people is dangerously contaminated or chemically polluted. Natural presence of chemicals, particularly in groundwater, can also be of health significance, including arsenic and fluoride, while other chemicals, such as lead, may be elevated in drinking-water as a result of leaching from water supply components in contact with drinking-water.

Some 829 000 people are estimated to die each year from diarrhoea as a result of unsafe drinking-water, sanitation and hand hygiene. Yet diarrhoea is largely preventable, and the deaths of 297 000 children aged under 5 years could be avoided each year if these risk factors were addressed. Where water is not readily available, people may decide handwashing is not a priority, thereby adding to the likelihood of diarrhoea and other diseases.</p>
        </div>
        <div className="who-image" data-aos="fade-left">
          <img src="https://i1.wp.com/www.ip-watch.org/weblog/wp-content/uploads/2016/01/WHO-logo.png?ssl=1" />
        </div>
      </section>

      <section className="vaccination-section">
        <h2 className="vaccination-heading" data-aos="fade">WAYS TO STOP WATER POLLUTION</h2>
        <div className="vaccination-video">
          <div id="player"></div>
          {/* <div id="placeholder-text">Click to play the video</div> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/zste8smMudE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </div>
        {/* <div className="video-container">
          <video controls>
            <source src="https://youtu.be/O4vGOjOG2Ns" type="video/mp4" />
          </video>
          <div className="play-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div> */}
      </section>

      <section className="disease-prevention-section">
        <div className="disease-prevention-gif" data-aos="fade-right">
          <img src="https://tse3.mm.bing.net/th?id=OIP.GYZwCf5AT3mgNiZBDt7JwgHaEU&pid=Api&P=0&h=180" />
        </div>
        <div className="disease-prevention-description" data-aos="fade-left">
          <p>The Save Water Campaign aims to educate individuals and communities about the need to conserve water and adopt sustainable practices. By promoting the responsible use of water, this campaign strives to mitigate the effects of water scarcity and protect the environment.

One of the primary focuses of the campaign is to encourage water-saving habits in daily life. Simple actions such as turning off taps while brushing teeth, fixing leaking faucets, and using water-efficient appliances can make a substantial difference. Through public service announcements, social media campaigns, and educational programs, the campaign spreads the message that every drop counts.

Furthermore, the campaign emphasizes the importance of water conservation in agriculture, industry, and public spaces. By implementing efficient irrigation techniques, optimizing industrial processes, and promoting water-wise landscaping, significant water savings can be achieved. The campaign seeks to engage farmers, industries, and local authorities to adopt these practices and contribute to the larger cause.

Collaboration and community involvement play a pivotal role in the success of the Save Water Campaign. Partnerships with schools, universities, non-governmental organizations, and government agencies facilitate the organization of workshops, seminars, and events to educate the public about water conservation strategies. Additionally, the campaign encourages the establishment of rainwater harvesting systems and the reuse of treated wastewater for non-potable purposes, thereby maximizing water resources.

</p>
        </div>
      </section>

      <section className="yoga-section">
        <div className="yoga-left-image" data-aos="fade-right">
          <img src="https://tse3.mm.bing.net/th?id=OIP.LAjb6R9IJ47WQL95LSQLTAHaEK&pid=Api&P=0&h=180" />
        </div>
        <div className="yoga-content">
          <h2 data-aos="fade">CLEANING WATER CAMPAGIN</h2>
          <p data-aos="flip-left">The Cleaning Water Campaign focuses on combating water pollution through a multifaceted approach that includes prevention, remediation, and public awareness.

Prevention is a key component of the campaign. By targeting pollution at its source, the campaign advocates for stricter regulations on industrial waste discharge, agricultural runoff, and improper waste disposal. It promotes the adoption of eco-friendly production practices, such as minimizing the use of harmful chemicals and implementing proper waste management systems.
</p>
        </div>
        <div data-aos="fade-left" className="yoga-right-image">
          <img src="https://tse1.mm.bing.net/th?id=OIP.ue6oDIaSKg9nUSyCIJRAMAHaF6&pid=Api&P=0&h=180" />
        </div>
      </section>

      <section className='yoga-video' data-aos="zoom-in">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BCHhwxvQqxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </section>

      <section className="download-cards-section">
        <h3 className="download-heading" data-aos="fade">Downloadable Resources</h3>
        <div className="card-container">
          <div className="card" data-aos="fade-right" data-aos-delay="0">
            <img src="https://i.pinimg.com/originals/05/94/04/059404771d1194d9c3c1e6bc62fdb35c.png" alt="Card 1" className="card-image" />
            <div className="card-overlay">
              <FaDownload className="card-overlay-icon" onClick={handleDownload} />
              {/* Download PDF */}
            </div>
          </div>
          <div className="card" data-aos="fade-right" data-aos-delay="200">
            <img src="https://img.haikudeck.com/r/82eb4301-99d3-4d36-980.jpg" alt="Card 2" className="card-image" />
            <div className="card-overlay">
              <FaDownload className="card-overlay-icon" onClick={handleDownload2} />
              {/* Download PDF */}
            </div>
          </div>
          <div className="card" data-aos="fade-right" data-aos-delay="400">
            <img src="https://tse1.mm.bing.net/th?id=OIP.FyDi0RlLvQP0zl8oTGG4vwHaFj&pid=Api&P=0&h=180" alt="Card 3" className="card-image" />
            <div className="card-overlay">
              <FaDownload className="card-overlay-icon" onClick={handleDownload3} />
              {/* Download PDF */}
            </div>
          </div>
        </div>
      </section>

      <h3 className='faq-heading' data-aos="fade">Faq's</h3>
      <section className="faq-section">
        {faqs.map((faq)=>{ return <>
          <div className="faq-question" key={faq.id}>
            <div
              className={`faq-question-header ${expandedQuestion === faq.id ? 'expanded' : ''}`}
              onClick={() => handleQuestionClick(faq.id)}
            >
              <h3>{faq.question}</h3>
              {expandedQuestion === faq.id ? (
                <FaChevronUp className="faq-arrow" />
              ) : (
                <FaChevronDown className="faq-arrow" />
              )}
            </div>
            {expandedQuestion === faq.id && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
          </>
        })}
      </section>
    </div>
    </Layout>
  )
}

export default Resources