import { useEffect, useState } from "react";
import {AiOutlineMail} from "react-icons/ai"
import "./InboxPane.scss"

const InboxPane = (props) => {
    const {dataArr, selectedTab, setSelectedTab, tabSelectorInbox, tabSelectorTrash, inbox, trash} = props;


    return (
        <div className="inbox-pane">
            <div onClick={tabSelectorInbox} className={`inbox-pane__inbox ${inbox ? "inbox-pane__active":""}`}>
                <div>
                    <AiOutlineMail /> <span>Inbox</span>
                </div>
                <div>
                    <p>{dataArr.length}</p> 
                </div>
            </div>
            <div onClick={tabSelectorTrash} className={`inbox-pane__trash ${trash ? "inbox-pane__active":""}`}>
                <h1>Trash</h1>
            </div>
        </div>
    )
}

export default InboxPane;