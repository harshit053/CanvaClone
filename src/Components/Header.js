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