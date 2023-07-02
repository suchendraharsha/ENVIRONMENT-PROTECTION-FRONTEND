import React from 'react'
import Layout from '../layout/Layout';
import img1 from "../images/image1.jpg"
import img2 from "../images/image2.jpg"
import img3 from "../images/image3.jpg"
import img4 from "../images/image4.jpg"
import img5 from "../images/image5.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const AboutUs = () => {
  const cardsData = [
    {
      id: 1,
      image: img1,
      description: 'Environment protection and under it to stop water pollution is an extremely broad and a comprehensive concept, in order to implement this task effectively there are number of factors that need to be taken under consideration. The causes of water pollution, the ways to avoid the water pollution, the methods to bring balace in the ecosystem that lie in and around the water bodies, to bring awareness in the people about harmfull effects of water pollution are the key concepts of these project.To achieve the goals I started a survey in the area of santhapet, Nellore in order to know about the awareness in people towards protecting the environment and stop the water pollution. I found that there is no proper understanding about the environment protection'
    },
    {
      id: 2,
      image: img2,
      description: 'In these week I decided to spread awareness about the ways to stop water pollution so in turn to protect the environment . I went to the place where I performed survey last week so that now I can spread awareness in them.I went to door to door and asked them about what they know about the environment and about water pollution and I have shown few posters to make them understand about the present situation of the environment and gave them few advices to protect the environment and stop the water pollution.',
    },
    {
      id: 3,
      image: img4,
      description: 'I decided to conduct an program on water conservation to protect the environment. I selected few houses in a street and on first day I. checked any water fluctuations in their house to start my activity there. identified areas where water is being wasted. Check for leaks in faucets, toilets, and pipes. Noted down the water consumption patterns and identify areas where improvements can be made.Fixed the water leakes in various places from the selected houses to protect the water and to in turn protect the environment. Installed the water safety devices which make the consumption rate of water less and in turn save water. Encouraged the members in the selected house to conserve the water. ',
    },
    {
      id: 4,
      image: img3,
      description: 'selected an polluted water resource near by the place of work in order clean the water resource and stop the water pollution.Analyzed the selected water resource to perform the required methods to clean up the water resource in order to protect the environment. Focus on removing floating debris and litter from the waters surface using nets, rakes, and boats.it is known as Surface Debris Removal. Remove excessive vegetation and weed growth in and around the water body. Trim or cut back overgrown plants to improve water flow and prevent further pollutionSpread the awareness to not to pollute the water body that has been cleaned.',
    },
    {
      id: 5,
      image: img5,
      description: 'As per guidelines of environment protection I visited the place where the activity of before week was done. In order to follow the concept of environment protection , once I checked the water body was clean or not and weather is it polluted again or it is clean. Observed that it is polluted with few plastic covers and chocolate wrappers. Even through after a awareness campaign some people who does not belong to awareness program involved in polluting the water bodySo I have posted some posters around the area to create the awareness among the outsiders. Organized a community awareness campaign to educate non local residents about the +importance of protecting the cleaned water body. Distributed informational materials, held meetings, and conducted workshops on sustainable practices and pollution prevention. Asked the people surrounding the water body weather they are facing any consequences due to the water body. I have found a problem that there is over flow of water outside the water body in rainy season,so to stop that I decided to increase the height of the surroundings of water body. I decided to use the cement bags to increase the height of surroundings in order to stop the overflow of water.',
    },
  ];

  useEffect(()=>{
    AOS.init({duration:2000,offset:300});
  },[])

  return (
    <Layout>
      <h1 className='heading' data-aos="fade-down">AboutUs</h1>
      <div className="about-us-page">
      <div className="cards-container-about">
        {cardsData.map((card, index) => (
          <div key={card.id} className={`card-about ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
            <div className="card-image-about" data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}>
              <img src={card.image} alt={`Image ${card.id}`} />
            </div>
            <div className="card-description-about" data-aos={`fade-${index % 2 === 0 ? 'left' : 'right'}`}>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  )
}

export default AboutUs;