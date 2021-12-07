import Button from 'react-bootstrap/Button'

const ButtonCust = ({ text, variant }) => {
    return (
        <div>
            <Button variant={variant}>{text}</Button>{' '}
        </div>
    )
}

export default ButtonCust
