// This component represents the main body of the page. Receives props to set the image, heading, paragraph and the button text

import ButtonCust from './ButtonCust'

const Content = ({ contents }) => {
    return (
        <>
            { contents.map((content) => (
                <div className="content">
                    <div className="image" style={{order: content.order}}><img src={content.src} alt="" /></div>
                    <div className="text">
                        <h1 className="heading">
                            {content.heading}
                        </h1>
                        <p className="para">
                            {content.para}
                        </p>
                        <ButtonCust text={content.btnText} variant='primary' />
                    </div>
                </div>
            ))}
        </>
    )
}


export default Content
