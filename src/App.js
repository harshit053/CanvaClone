import { useState } from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import DesignTypes from './Components/DesignTypes'

function App() {

  let [activeDesignType, setActiveDesignType] = useState("For You");

  const [designTypes, setDesignTypes] = useState([
   {
     id: 'For You',
     texts: ['Play with Canva', 'Invitation (Portrait)', 'Presentation (16:9)', 'Video', 'Instagram Post', 'Poster', 'Logo', 'Play with Canva', 'Invitation (Portrait)', 'Presentation (16:9)', 'Video', 'Instagram Post', 'Poster', 'Logo'],
     display: true
   },
   {
     id: 'Presentation',
     texts: ['Presentation (16:9)', 'Talking Presentation', 'Mobile first presentation', 'Presentation (4:3)', 'Brainstorm Presentation', 'Game Presentation'],
     display: false
   },
   {
     id: 'Social Media',
     texts: ['Instagram Post', 'Facebook Post', 'Instagram Story', 'Your Story', 'Whatsapp Status', 'Facebook Cover', 'Instagram Reels Video'],
     display: false
   },
   {
     id: 'Video',
     texts: ['Video', 'Facebook video', 'Video Message', 'Mobile Video', 'Youtube Video', 'Video Collage', 'Youtube Video Ad'],
     display: false
   }
 ])

  // Change Design
  const changeActiveDesigns = function(id) {
    setActiveDesignType(activeDesignType = id)
    setDesignTypes(designTypes.forEach((designType) => designType.display = (activeDesignType === designType.id) ? true : false))
    designTypes.forEach(function(designType) {
      console.log(designType);
    })
  }

 
  return (
    <>
      <NavBar />
      <Header changeActiveDesigns={changeActiveDesigns} designTypes={designTypes}  />
      <DesignTypes designTypes={designTypes} />
    </>
  );
}

export default App;
