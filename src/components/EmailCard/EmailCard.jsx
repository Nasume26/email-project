import "./EmailCard.scss"
const EmailCard = (props) => {
    const {data, setSelectedEmail} = props;

    const emailSelector = () => {
        setSelectedEmail(data)
    }

    return (
        <div onClick={emailSelector} className="email-pane">
            <h1>{data.header}</h1>
            <p>{data.email}</p>
        </div>
    )
}

export default EmailCard;