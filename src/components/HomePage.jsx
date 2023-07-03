import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../layout/Layout'
import "./HomePage.css"
import Card from './Card'
import AOS from "aos";
import "aos/dist/aos.css";
import he from "../images/he.png"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import { useEffect } from 'react'

const HomePage = () => {
  const [activities,setActivities] = useState([]);
  const images = [
    "https://tse2.mm.bing.net/th?id=OIP._8PIM0xgZdUo8FfMwxE00gHaFj&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.-0-BUhGKoInRfIrw_H6G4gHaEK&pid=Api&P=0&h=180",
    "http://image.slidesharecdn.com/effectsofwaterpollution-150829132453-lva1-app6892/95/effects-of-water-pollution-8-638.jpg?cb=1440854804",
    "https://tse1.mm.bing.net/th?id=OIP.nfmk7JD5_wq3r17ob-A8UAHaE5&pid=Api&P=0&h=180",
  ]
  const images1 = [
    "https://tse4.mm.bing.net/th?id=OIP.3OBJE9_vmd_5sZDOblW8sQHaLc&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.flhWqw5wGREG9RhGrvtKfQAAAA&pid=Api&P=0&h=180",
    "https://i.pinimg.com/originals/a3/a8/a2/a3a8a2dbfc32cb7ef174a3ac433c1ad2.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.nfmk7JD5_wq3r17ob-A8UAHaE5&pid=Api&P=0&h=180",
  ]

  const getAllActivities =async()=>{
    try{
        const res = await axios.get("https://envinormentprotectionbackend.onrender.com/api/v1/activity/activity");
        setActivities(res?.data?.activity);          
    }catch(error){
        console.log(error);
    }       
}

  useEffect(()=>{
    AOS.init({duration:2000,offset:300});
  },[]);

  useEffect(()=>{
    getAllActivities();
  },[])
  return(
    <Layout>
        <div className="home-page">
      <div className="hero-slider" data-aos="zoom-in">
        <section className="slider-section">
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
            /* navigation={true} */
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {images.map((image)=>{ return (
              <SwiperSlide>
              <div className="image-container">
                <img src={image} alt="Slide" />
              </div>
            </SwiperSlide>
  
            )
            })}
          </Swiper>
        </section>
      </div>
      <div className="hero-slider1" data-aos="zoom-in">
        <section className="slider-section">
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
            /* navigation={true} */
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {images1.map((image)=>{ return (
              <SwiperSlide>
              <div className="image-container">
                <img src={image} alt="Slide" />
              </div>
            </SwiperSlide>
  
            )
            })}
          </Swiper>
        </section>
      </div>

      <h2 className="section-heading" data-aos="fade-up">ENVIRONMENT PROTECTION</h2>
      <div className="gif-container" data-aos="zoom-in">
        <img src="https://tse1.mm.bing.net/th?id=OIP.q6YZt0YvAE26UQ6N1D5kXwHaFj&pid=Api&P=0&h=180" alt="GIF" className="gif" />
        {/* <p className="gif-caption">Caption text on the GIF</p> */}
      </div>

      <h2 className="section-heading" data-aos="fade-up">WATER POLLUTION</h2>
      <div className="hygiene-container">
        <img src="https://4.bp.blogspot.com/-CsEHp2BF5RA/XtdViP8w7-I/AAAAAAAAAN0/K30q2Bob2lcNrWjZ64ZgtQeQR-qdxNRAACLcBGAsYHQ/s1600/Water-Pollution-Paragraph.jpg" alt="Hygiene" className="hygiene-image" data-aos="fade-right" data-aos-delay="100" />
        <p className="hygiene-description" data-aos="fade-in">Water pollution is a global environmental issue that poses a significant threat to the health of our planet. It refers to the contamination of water bodies by various pollutants, rendering them unsafe for human use and harmful to aquatic life. The consequences of water pollution are far-reaching, affecting ecosystems, human health, and the overall well-being of our society.

Water is a vital resource essential for all forms of life. However, due to human activities, this precious resource is being compromised. Industrialization, urbanization, agricultural practices, and improper waste disposal have led to the discharge of toxic substances, chemicals, and waste into water sources. These pollutants disrupt the natural balance of aquatic ecosystems and degrade the quality of water.

The impact of water pollution on ecosystems is profound. Aquatic plants, animals, and microorganisms suffer greatly from the contamination, leading to the destruction of habitats and the decline of biodiversity. The disruption of the delicate food chain within these ecosystems has far-reaching consequences, affecting not only aquatic life but also the entire ecological balance.

Water pollution also poses a significant risk to human health. Contaminated water sources can contain harmful bacteria, viruses, chemicals, and heavy metals that, when ingested or in contact with human skin, can cause a range of waterborne diseases and health problems. Particularly vulnerable are communities that rely on polluted water sources for their daily needs, lacking access to safe and clean water.

In conclusion, water pollution is an urgent environmental concern with severe implications for ecosystems, human health, and socio-economic well-being. It demands immediate attention and action from individuals, communities, industries, and governments worldwide. Only through concerted efforts and a shared commitment to protecting and preserving our water resources can we ensure a sustainable and healthy future for generations to come.
</p>
      </div>

      {/* <div className="card-container">
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
      </div>
 */}
      <h3 className='section-heading' data-aos="fade-up">Various Effects of Water Pollution</h3>
      <div className='home-cardcontainer'>
        <div className="home-card" data-aos="fade-right" data-aos-delay="0">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://i.pinimg.com/originals/77/a6/89/77a6895db84213c1aeaedb1038a8264d.jpg" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <h3 className='section-headingcard' data-aos="fade-up">THREAT TO AQUATIC LIFE</h3>
              <p>Water pollution can harm aquatic organisms, including fish, amphibians, reptiles, and invertebrates. Contaminants in water bodies, such as toxic chemicals, heavy metals, and pesticides, can lead to reduced biodiversity and even the extinction of certain species. Polluted water can also disrupt the reproductive systems and developmental processes of aquatic organisms.Water pollution poses a grave threat to aquatic life, endangering the delicate balance of ecosystems worldwide. The detrimental effects, including decreased biodiversity, habitat destruction, impaired reproduction and development, bioaccumulation, and altered behavior, highlight the urgent need for environmental protection measures. Governments, industries, and individuals must prioritize sustainable practices, enforce strict regulations, and invest in effective wastewater treatment systems to mitigate water pollution. By safeguarding our water resources, we can protect the rich diversity of aquatic life and ensure the long-term health and sustainability of our planet.</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="200">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://image.slidesharecdn.com/effectsofwaterpollutiononlivingorganisms-140607092046-phpapp02/95/effects-of-water-pollution-on-living-organisms-6-1024.jpg?cb=1402132922" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
            <h3 className='section-headingcard' data-aos="fade-up">DISTRUPTION OF ECOSYSTEMS</h3>

              <p>Water pollution can disrupt the delicate balance of ecosystems. When pollutants enter water bodies, they can alter the pH levels, dissolve oxygen, and affect nutrient cycles. These changes can lead to the death of important aquatic plants and the decline of species that depend on them. Disrupted ecosystems can have cascading effects throughout the food chain, ultimately impacting human populations as well.The disruption of ecosystems due to human activities is a pressing environmental concern. Habitat loss, invasive species, pollution, climate change, and overexploitation collectively threaten the integrity and resilience of ecosystems worldwide. Recognizing the interconnectedness of species and ecosystems, it is crucial to prioritize environmental conservation efforts. Implementing sustainable practices, protecting habitats, promoting responsible resource management, and reducing pollution are essential steps towards mitigating disruptions in ecosystems. By preserving and restoring ecosystem health, we can safeguard biodiversity, ensure ecosystem services, and foster a sustainable future for both nature and humanity.
</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="400">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://tse1.mm.bing.net/th?id=OIP.0l4ExxX0GCoHIJ76YnQvsQAAAA&pid=Api&P=0&h=180" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
            <h3 className='section-headingcard' data-aos="fade-up">CONTAMINATION OF DRINKING WATER</h3>

              <p>Water pollution poses a significant risk to human health. When pollutants, such as industrial chemicals, pesticides, or microbial pathogens, contaminate drinking water sources, it can lead to severe health problems, including gastrointestinal illnesses, reproductive issues, and even cancer. Ensuring clean and safe drinking water is a crucial aspect of environmental protection.Access to clean and safe drinking water is a fundamental human right and an essential requirement for healthy living. However, the contamination of drinking water sources has become a pervasive problem worldwide, posing severe risks to human health. This essay examines the causes, consequences, and preventive measures associated with the contamination of drinking water, highlighting the urgent need for effective environmental protection measures.</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="600">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="http://all-about-water-filters.com/wp-content/uploads/2017/05/CSIRO_ScienceImage_11084_Flood_water_runoff_from_a_canefield_in_the_Herbert_River_catchment_northern_Queensland.jpg" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
            <h3 className='section-headingcard' data-aos="fade-up">HARM TO SOIL AND AGRICULTURE</h3>

              <p>
              Water pollution can contaminate soil through runoff and leaching. When polluted water comes into contact with agricultural fields, it can carry harmful chemicals and excess nutrients, like nitrogen and phosphorus, which can lead to soil degradation and reduced crop productivity. Additionally, contaminated water used for irrigation can transfer pollutants to crops, affecting their quality and safety.Soil is a precious natural resource that plays a vital role in sustaining agriculture and providing food for the growing global population. However, human activities have increasingly harmed soil quality and agricultural productivity. This essay explores the various forms of harm to soil and agriculture, emphasizing their implications for food security and the urgent need for sustainable practices.The harm to soil and agriculture poses significant challenges to global food security. Soil degradation, reduced agricultural productivity, and their implications for food production and rural livelihoods necessitate urgent action. Embracing sustainable land management practices, promoting soil conservation, and implementing environmentally friendly agricultural approaches are crucial steps towards ensuring the long-term productivity and resilience of our soils.
</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="800">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://tse1.mm.bing.net/th?id=OIP.O9YK5xGhwVcr26EzTbFuXgHaFj&pid=Api&P=0&h=180" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
            <h3 className='section-headingcard' data-aos="fade-up">ALTERED WATER CYCLES</h3>
              <p>
              Water pollution can disrupt natural water cycles and hydrological processes. Excessive pollution and contamination of water bodies can reduce water availability and affect the quality of freshwater resources. This can have a significant impact on agriculture, industry, and overall water security, leading to economic and societal challenges.The water cycle, also known as the hydrological cycle, is a fundamental process that regulates the distribution and availability of water on Earth. However, human activities and climate change have disrupted and altered this natural cycle, leading to significant environmental and societal impacts. This essay examines the causes and consequences of altered water cycles, emphasizing the challenges they present for ecosystems, water resources, and human populations.Altered water cycles driven by climate change, deforestation, urbanization, and other human activities pose substantial environmental and societal challenges.</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="1000">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://i.pinimg.com/originals/17/25/d5/1725d506cebf97d1c2c9d48ac1198d68.jpg" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
            <h3 className='section-headingcard' data-aos="fade-up">DISTURBANCE IN WATER POLLUTION</h3>

              <p> Water pollution can have severe consequences for coastal and marine ecosystems. Discharge of pollutants, such as oil spills, heavy metals, and plastic debris, can cause significant damage to coral reefs, seagrass beds, and mangrove forests. Marine animals, including birds, sea turtles, and marine mammals, can suffer from ingestion of or entanglement in marine debris, leading to injury or death.arine ecosystems encompass a vast and diverse array of life forms, supporting critical ecological processes and providing numerous benefits to humanity. However, human activities and natural phenomena have caused disturbances in these fragile ecosystems, posing significant challenges to their health and functioning. This essay examines the causes, consequences, and conservation imperatives associated with disturbance in the marine ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="resources-section">
        <img src="https://tse1.mm.bing.net/th?id=OIP.7TYSfXt8V8qoXnTLsEetKQHaDa&pid=Api&P=0&h=180" alt="Resources" className="resources-image" data-aos="fade-up" />
        <Link href="/resources" className="resources-link">Explore Resources</Link>
      </div>
    </div>

    </Layout>
  )
}

export default HomePage