import { useState } from "react";
import EmailCard from "../../components/EmailCard/EmailCard";
import FilterPane from "../FilterPane/FilterPane";


const MiddlePane = (props) => {
    const {dataArr} = props;
    const [selectedEmail, setSelectedEmail] = useState("")

  

    const renderData = dataArr.map((data) => {
        return <EmailCard data={data} setSelectedEmail={setSelectedEmail}/>
    })

    return (
        <div>
            <div>
                <FilterPane />
                {renderData}

            

            </div>
            {selectedEmail && <h1>{selectedEmail.email}</h1>}
        </div>
    )
}
export default MiddlePane;