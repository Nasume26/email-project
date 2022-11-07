import "./InboxPane.scss"

const InboxPane = (props) => {
    const {dataArr, selectedTab, setSelectedTab} = props;

    return (
        <div>
            <h1>Inbox {dataArr.length}</h1> 
            <h1>Trash</h1>
        </div>
    )
}

export default InboxPane;