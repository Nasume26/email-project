import { useState } from "react";
import EmailCard from "../../components/EmailCard/EmailCard";
import FilterPane from "../FilterPane/FilterPane";
import "./MIddlePane.scss"

const MiddlePane = (props) => {
    const {dataArr} = props;
    const [selectedEmail, setSelectedEmail] = useState("")

  

    const renderData = dataArr.map((data) => {
        return <EmailCard data={data} setSelectedEmail={setSelectedEmail}/>
    })

    return (
        <div className="middle-panel">
            <div className="middle-panel__tabs">
                <FilterPane />
                {renderData}

            

            </div>
            <div className="middle-panel__emails">
                {selectedEmail && 
                <>
                <h1>{selectedEmail.email}</h1>
                <p>{selectedEmail.body}</p>
                </>
                }
            </div>
        </div>
    )
}
export default MiddlePane;