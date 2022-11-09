import "./InboxPane.scss"

const InboxPane = (props) => {
    const {dataArr, selectedTab, setSelectedTab, tabSelectorInbox, tabSelectorTrash} = props;

    return (
        <div>
            <div onClick={tabSelectorInbox}>
                <h1>Inbox {dataArr.length}</h1> 
            </div>
            <div onClick={tabSelectorTrash}>
                <h1>Trash</h1>
            </div>
        </div>
    )
}

export default InboxPane;