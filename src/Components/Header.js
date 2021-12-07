import Designs from './Designs'
import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
    return (
            <div  className='container1'>
                <h1>What will you design?</h1>
                <div className="search">
                    <AiOutlineSearch className="search-icon" />
                    <input type="search" />
                </div>
                <div className='design-buttons'>
                    <Designs />
                    <Designs />
                    <Designs />
                    <Designs />
                    <Designs />
                    <Designs />
                    <Designs />
                    <Designs />
                </div>
            </div>
    )
}

export default Header
