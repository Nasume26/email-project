import "./App.scss";
import { useState, useEffect } from "react";
import Nav from "./containers/Nav/Nav";
import InboxPane from "./containers/InboxPane/InboxPane"

function App() {
  const [slectedTab, setSelectedTab] = useState("inbox")
  // Importance key 1: low, 2: medium, 3: high
  // Type key 1: personal, 2: work
  const dataArr= [
    {
      name: "Test Man",
      email: "test@test.com",
      body: "Test",
      importance: 1,
      date: "11/21/2016",
      type: 1,
      isRead: false,
      isTrash: false
    },    
    {
      name: "Other Test",
      email: "test@test.com",
      body: "Test 2",
      importance: 3,
      date: "10/22/2017",
      type: 2,
      isRead: false,
      isTrash: false
    }

  ]



  return (
    <div className="App">
      <Nav />
      <div className="App__main">
        <InboxPane slectedTab={slectedTab} setSelectedTab={setSelectedTab} dataArr= {dataArr}/>
      </div>
    </div>
  );
}

export default App;
