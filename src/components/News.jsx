import React,{useEffect, useState} from 'react'
import Layout from '../layout/Layout'
import NewsCard from './NewsCard';

const News = () => {
  const newsData = [
    {
      id: 1,
      image: `https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/21-10-2021_UN-News_plastic-pollution.jpg/image1170x530cropped.jpg`,
      title: 'Plastic pollution on course to double by 2030 ',
      description: 'Plastic pollution in oceans  continues to grow sharply and could more than double by 2030. ',
      origin: 'web',
      publishedDaysAgo: 1,
      fullArticle: `The report highlights dire consequences for health, the economy, biodiversity and the climate. It also says a drastic reduction in unnecessary, avoidable and problematic plastic, is crucial to addressing the global pollution crisis overall.  

      To help reduce plastic waste at the needed scale, it proposes an accelerated transition from fossil fuels to renewable energies, the removal of subsidies and a shift towards more circular approaches towards reduction. 
      
      Titled From Pollution to Solution: a global assessment of marine litter and plastic pollution, the report shows that there is a growing threat, across all ecosystems, from source to sea. 
      
      Solutions to hand 
      Tweet URL
      
      But it also shows that there is the know-how to reverse the mounting crisis, provided the political will is there, and urgent action is taken. 
      
      The document is being released 10 days ahead of the start of the crucial UN Climate Conference, COP26, stressing that plastics are a climate problem as well.  
      
      For example, in 2015, greenhouse gas emissions from plastics were 1.7 gigatonnes of CO2 equivalent; by 2050, they are projected to increase to approximately 6.5 gigatonnes. That number represents 15 per cent of the whole global carbon budget - the​​ amount of greenhouse gas that can be emitted, while still keeping warming within the Paris Agreement goals. 
      
      Recycling not enough 
      Addressing solutions to the problem, the authors pour cold water on the chances of recycling our way out of the plastic pollution crisis. 
      
      They also warn against damaging alternatives, such as bio-based or biodegradable plastics, which currently pose a threat similar to conventional plastics. 
      
      The report looks at critical market failures, such as the low price of virgin fossil fuel feedstocks (any renewable biological material that can be used directly as a fuel) compared to recycled materials, disjointed efforts in informal and formal plastic waste management, and the lack of consensus on global solutions. 
      
      Instead, the assessment calls for the immediate reduction in plastic production and consumption, and encourages a transformation across the whole value chain. 
      
      It also asks for investments in far more robust and effective monitoring systems to identify the sources, scale and fate of plastic. Ultimately, a shift to circular approaches and more alternatives are necessary.  `,
    },
    {
      id: 2,
      image:` https://ichef.bbci.co.uk/news/976/cpsprodpb/9EDD/production/_130096604_img_56122.jpg.webp`,
      title: 'AI to stop water pollution before it happens',
      description: 'Artificial intelligence will be used in south-west England to predict pollution before it happens and help prevent it.',
      origin: 'https://www.bbc.com/news/science-environment-65913940',
      publishedDaysAgo: 4,
      fullArticle: 'Its hoped the pilot project in Devon will help improve water quality at the seaside resort of Combe Martin, making it a better place for swimming.Sensors placed in rivers and fields will build a picture of the state of local rivers, rainfall and soil.AI will then combine that data with satellite imagery of local land use.Computer systems company CGI is running the artificial intelligence project with mapping experts Ordnance Survey. CGI said it was more than 90% accurate during a test run.It is being trialled in what is known as the North Devon Biosphere Reserve, a 55-sq-mile (142-sq-km) protected area that includes important natural habitats as well as farmland and small towns. We will give (the AI) the history, said CGIs chief sustainability officer Mattie Yeta. We will give it all of the geographic information, as well as data sets from the sensors for it to learn and develop the predictive mechanisms to be able to inform where these incidents are occurring and indeed when they will take place.A couple of kilometres upstream from Combe Martin beach, a floating water sensor is being installed in the river. It is a square black box with solar panels on top and is moored by a cable to the bank.It automatically transmits a stream of data on six key indicators of water health including acidity (pH), ammonia, the amount of dissolved oxygen in the water and how clear the water is (turbidity)."It is a really good overview of water quality," said Glyn Cotton, the chief executive of environment-focussed technology company Watr, which is supplying the £2,000-a-go ($2,557) sensors to the project."If sewage was being discharged upstream we would see spikes in things like ammonia and pH and we can then cross-reference that with temperature and dissolved oxygen levels."About 50 connected sensors are being used across the catchment area, a mix of water, soil and rain gauges. Mapping company Ordnance Survey are providing the expertise to integrate that information with location specific data and satellite imagery',
},
    {
      id: 3,
      image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/14BBB/production/_107232948_93frgknw.jpg.webp',
      title: 'Video prevent pollution in Leicesters waterways',
      description: "video has been created to remind people of the harm being caused by pollution in Leicester's waterways.",
      origin: 'BBC news',
      publishedDaysAgo: 2,
      fullArticle: 'The six-minute film, called Respect our Rivers, explains the damage deliberately and carelessly dumped waste causes to wildlife.It has been released ahead of the summer months when more people are expected to head to the cities riverbanks and canal sides.The Environment Agency and the city council worked together on the project.Leicester city mayor Peter Soulsby said the Soar, the cities main river, was a haven for wildlife in the heart of the city but trying to keep it free of litter was a constant struggle.He highlighted problems caused when mourners from the cities faith communities throw items such as plastic flowers in the water along with ashes.He said: "Our environmental volunteers go out on a range of boats to carry out weekly river cleaning sessions, which goes the extra mile to help keep the river clean and enable it to thrive as a haven for wildlife, as well as helping prevent flooding by removing trapped waste and debris."We have worked with the Environment Agency to operate a designated site for scattering of ashes, on a section of the River Soar near the National Space Centre, which was chosen because the natural features of the river at that point allow the ashes and other offerings such as flowers to disperse without causing any problem."However, it is essential to the future of the rivers wildlife that only biodegradable objects are put into the water - non-biodegradable objects can take years to break down, or even last a lifetime releasing pollutants into the water, causing harm to birds, animals and fish in the process."',
},
    {
      id: 4,
      image: 'https://cdn.downtoearth.org.in/library/large/2023-06-05/0.08853100_1685962149_istock-1441170422.jpg',
      title: 'World Environment Day 2023: Waste dumping is polluting the Kashmir with microplastics',
      description: 'Plastic waste is exposed to  environmental elements, breaking it down into microplastics and nanoplastics ',
      origin: 'web',
      publishedDaysAgo: 3,
      fullArticle: 'The theme for World Environment Day 2023 is “beating the plastic pollution” and the entire world is deliberating ways of dealing with plastic pollution. Plastic litter is accumulating in our waterbodies in the form of microplastics and nanoplastics. A recent example is scientists finding microplastics in the Jhelum river in Kashmir. Plastics continue to be ubiquitous around us due to their widespread application, durability, flexibility and low cost. It also causes enormous amounts of litter even in remote and ecologically rich and pristine ecosystems.The linear economy model of development, based on take-make-dispose, is responsible for the litter in the oceans and land.Once disposed of, plastic waste is exposed to several physical, chemical and biological elements of the environment, such as degradation, physical abrasion, weathering, fire and chemical oxidation.It breaks down into huge amounts of microplastics (measuring less than 5 millimetres) and nanoplastics (less than 0.1 micrometres or μm). Plastic in the microplastic size range (< 5 mm) is emerging as an environmental pollutant, which is bio-accumulative. Due to their minute size, microplastics are ingested by the riverine fauna (organisms in rivers) and marine species once it reaches the marine ecosystems. Until recently, microplastics have not received adequate attention in plastic pollution monitoring by scientific communities and policymakers. However, in the last few years, microplastics have been reported from various ecosystems, including lakes, rivers, ponds, wetlands, mountains and oceans worldwide. ',
},
    {
      id: 5,
      image: 'https://static.toiimg.com/thumb/msid-100521958,imgsize-31184,width-400,resizemode-4/100521958.jpg',
      title: 'Punjab, land of five rivers, faces unprecedented clean water ..',
      description: 'US intelligence agencies have found no direct evidence to suggest the Covid-19 pandemic  ... ',
      origin: 'web',
      publishedDaysAgo: 4,
      fullArticle: 'Punjab, known in history as land of five rivers, has been facing a major water crisis because of “fast depleting and polluted underground water and polluted rivers”, which is set to deepen following as the Supreme Court order in favour of starting the construction of Sutlej-Yamuna link (SYL) canal to supply water to Haryana.According to the Centre Ground Water Board (CGWB), of the 141 agricultural development blocks in Punjab, 102 currently fall in the “dark zone”, where water is 200 feet or deeper. In some of these blocks, prior permission is required to install the household submersible pumps. Punjabs efforts to save underground water by bringing in “New Agriculture Policy for State, 2013,” and passing the Punjab Preservation of Subsoil Water Act, 2009, failed to make a difference, said Dr Amrik Singh, Agriculture Development Officer in Pathankot.',
},
    {
      id: 6,
      image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/9616/production/_130022483_img_5702.jpg.webp',
      title: 'Drugs, pesticides and medicine found in south coast seawater',
      description: 'Drugs, pesticides and medicines have been found in seawater samples collected off the south coast of England.',
      origin: 'web',
      publishedDaysAgo: 4,
      fullArticle: 'Researchers from Brunel and Portsmouth universities analysed nearly 300 samples from Langstone and Chichester harbours, in Hampshire and West Sussex.The samples were collected in 2022 by a group of concerned residents who raised the money for professional testing.The researchers said they found more than 50 different chemical compounds.They include commonly prescribed medicines to treat conditions such as type 2 diabetes and high blood pressure, as well as nicotine and benzoylecgonine, which is produced by the liver after cocaine use.Each of the 23 sites sampled had, on average, traces of 19 different compounds.Both harbours have outflow pipes from water treatment plants that regularly discharge raw sewage and the enclosed water can slow down the flow of effluent to the open sea.Prof Alex Ford, from the University of Portsmouth, has been studying the impact of the chemicals on marine life and said he had found traces of many of the chemicals inside the bodies of aquatic creatures like crabs and shrimp',
},
];

    const [expandedCardId, setExpandedCardId] = useState(null);
    const [open, setOpen] = useState(false);
  
    const handleCardClick = (cardId) => {
      setExpandedCardId(cardId);
      setOpen(!open);
    };
  
    const filteredNewsData = expandedCardId&&open ? newsData.filter((news) => news.id === expandedCardId) : newsData;
  
  /* const data = newsData.filter((news)=>{
    return news.id > id;
  })
  console.log(data); */

 /*  const [prevId,setPrevId] = useState();

  const sortAgain = (news)=>{
    news.id= news.id!==0 ? 0 : prevId;
    setPrevId(news.id);
    console.log(news.id);
  }

  useEffect(()=>{
    newsData.sort((a,b)=>a.id-b.id);
  },[prevId]) */
  return (
    <Layout>
        <h1 className='heading'>News</h1>
        <div className="news-page">
        {filteredNewsData.map((news) => (
          <NewsCard key={news.id} news={news} onClick={() => handleCardClick(news.id)} />
        ))}
    </div>
    </Layout>
  )
}

export default News