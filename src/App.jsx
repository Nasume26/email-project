import "./App.scss";
import { useState, useEffect } from "react";
import Nav from "./containers/Nav/Nav";
import InboxPane from "./containers/InboxPane/InboxPane"

function App() {
  const [slectedTab, setSelectedTab] = useState("inbox")
  const [inbox, setInbox] = useState(true)
  const [trash, setTrash] = useState(false)
  // Importance key 1: low, 2: medium, 3: high
  // Type key 1: personal, 2: work
  const dataArr= [
    {
      name: "Test Man",
      email: "test@test.com",
      header: "test",
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
      header: "test 2",
      body: "Test 2",
      importance: 3,
      date: "10/22/2017",
      type: 2,
      isRead: false,
      isTrash: false
    }

  ]

  const trashArr= [
    {
      name: "Test Man Trash",
      email: "test@test.com",
      header: "Test Trash",
      body: "Test",
      importance: 1,
      date: "11/21/2016",
      type: 1,
      isRead: false,
      isTrash: false
    },    
    {
      name: "Other Test Trash",
      email: "test@test.com",
      header: "trashy test",
      body: "Test 2",
      importance: 3,
      date: "10/22/2017",
      type: 2,
      isRead: false,
      isTrash: false
    }

  ]

  const tabSelectorInbox = (event) => {
    setSelectedTab("inbox")
    setInbox(true)
    setTrash(false)
    
  }

  const tabSelectorTrash = () => {
    setSelectedTab("trash")
    setInbox(false)
    setTrash(true)
  }



  return (
    <div className="App">
      <Nav />
      <div className="App__main">
        <InboxPane slectedTab={slectedTab} setSelectedTab={setSelectedTab} dataArr= {dataArr} tabSelectorInbox={tabSelectorInbox} tabSelectorTrash={tabSelectorTrash} inbox={inbox} trash={trash}/>
      </div>
    </div>
  );
}

export default App;
