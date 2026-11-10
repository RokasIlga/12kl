import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import ArticleCard from './components/ArticleCard/ArticleCard'
// import image1 from '/assets/ArticleCard.png';
// import image2 from '/assets/image2.png';
// import image3 from '/assets/image3.png';
import image4 from '/assets/image4.png';
import LangCarousel from './components/LangCarousel/LangCarousel';


  function App(){
    const data = [
      // {name:"Lorem1", image:image1},
      // {name:"Lorem2", image:image2},
      // {name:"Lorem3", image:image3},
      {name:"Lorem4", image:image4},
    ]
 

  return (
    <>
      <Header/>
      <LangCarousel/>
      <div class='articleCont'>
      {/* <ArticleCard name={data[0].name} image={data[0].image} />
      <ArticleCard name={data[1].name} image={data[1].image} />
      <ArticleCard name={data[2].name} image={data[2].image} /> */}
      <ArticleCard name={data[3].name} image={data[3].image} />
      </div>
    </>
    
  )
}

export default App
