// This component represents the single sub-design which receives a prop to denote the name of that sub-design.

const DesignType = ({ designType }) => {
    return (
        <>
            { designType.display ? designType.texts.map((text) => (
                <div className="design-type-container">
                    <a href="#design"><img src="https://via.placeholder.com/192x143" alt="" className="design-type" /></a>
                    <p>{text}</p>
                </div>
            )) : ""}
        </>
    )
}

export default DesignType