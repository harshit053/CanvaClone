// This component represents the header section, which contains the text "What will you design?", a search bar and the tab buttons for
// various designs categories that canva ha to offer. It accepts a prop, designTypes, that is used to render the name of different 
// design categories. A second prop, changeActiveDesign is used to pass an action that captures the id of designType tab clicked

import Designs from './Designs'
import { AiOutlineSearch } from 'react-icons/ai'

const Header = ({ designTypes, changeActiveDesigns }) => {
    return (
            <div  className='container1'>
                <h1>What will you design?</h1>
                <div className="search">
                    <AiOutlineSearch className="search-icon" />
                    <input type="search" />
                </div>
                <div className='design-buttons'>
                    {designTypes.map((designType) => (
                        <Designs key = {designType.id} text={designType.id} changeActiveDesigns={changeActiveDesigns} />
                    ))}
                </div>
            </div>
    )
}

export default Header