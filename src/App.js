import { useState } from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import DesignTypes from './Components/DesignTypes'
import Content from './Components/Content'

function App() {

  // State used to check the active design tab. By default set to "For You" tab
  let [activeDesignType, setActiveDesignType] = useState("For You");

  // The array contains the data for design tabs contained inside header and the various sub-designs contained within them.
  // Display property is used to check which of the sub designs will be displayed according to the selected tab.
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


  // This array is used to store information about the body section of the page (called contents in this project)
  const contents = [
   {
     src: "https://via.placeholder.com/530x345",
     order: 0,
     heading: "Start inspired",
     para: "With thousands of professional templates, images and quality content to choose from, get a headstart on bringing your best ideas and work to life.",
     btnText: "Create a design"
   },
   {
     src: "https://via.placeholder.com/530x345",
     order: 1,
     heading: "Collaborate with ease",
     para: "Invite people to edit with you or set your whole team up in Canva Pro to manage brand assets, leave feedback, get approvals, and scale your visual content.",
     btnText: "Work together"
   },
   {
     src: "https://via.placeholder.com/530x345",
     order: 0,
     heading: "Share with pride",
     para: "Whether you're presenting, downloading, scheduling, sharing or printing, enjoy seeing your work make an impact in the real world.",
     btnText: "Design your vision"
   }
 ]

  // Change Design
  // This function is used to first capture the id of the design tab (the id used here is the name of the tab itself) 
  // and then loop through the design types, setting the display property to true wherever the id of tab clicked is equal to the
  // id of the object and setting the display property for rest of the objects to false 
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
      <Content contents={contents} />
    </>
  );
}

export default App;
