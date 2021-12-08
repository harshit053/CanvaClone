// This component represents a single design type tab. Uses the text prop to set text on the tab and the changeActiveDesigns prop
// to capture the id of the tab clicked

import { BsStarFill } from 'react-icons/bs'

const Designs = ({ text, changeActiveDesigns }) => {
    return (
        <div className="design-btn">
            <button className="design" onClick={() => changeActiveDesigns(text)}><BsStarFill /></button>
            <p className="design-text">{text}</p>
        </div>
    )
}

export default Designs
