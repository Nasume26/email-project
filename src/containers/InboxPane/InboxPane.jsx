import "./InboxPane.scss"

const InboxPane = (props) => {
    const {dataArr, selectedTab, setSelectedTab, tabSelectorInbox, tabSelectorTrash} = props;

    return (
        <div className="inbox-pane">
            <div onClick={tabSelectorInbox} className="inbox-pane__inbox">
                <h1>Inbox {dataArr.length}</h1> 
            </div>
            <div onClick={tabSelectorTrash} className="inbox-pane__trash">
                <h1>Trash</h1>
            </div>
        </div>
    )
}

export default InboxPane;