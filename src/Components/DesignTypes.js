import DesignType from './DesignType'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'

const DesignTypes = ({ designTypes }) => {
    return (
        <div className="scroll-menu">
            <button className="btn-scroll" id="btn-scroll-left"><BsChevronLeft /></button>
            <button className="btn-scroll" id="btn-scroll-right"><BsChevronRight /></button>
            <div className="designs-type-container">
            {designTypes.map((designType) => (
                <DesignType key={designType.id} designType={designType} />
            ))}
            </div>
        </div>
    )
}

export default DesignTypes