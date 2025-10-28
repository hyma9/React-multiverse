import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './components/Heading'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Createpost from './components/Createpost'
import Postlist from './components/Postlist'
import {useState} from "react";
import {PostListProvider} from './store/post-list-store'
function App() {
  
  const [selectedTab,setSelectedTab]=useState("Home")

  return (
    <PostListProvider>
    <div className="appcontainer">
     <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
     <div className="content">
     <Heading></Heading>
     {selectedTab==="Home" ?(<Postlist></Postlist>):(<Createpost></Createpost>)}
     <Footer></Footer>
     </div>
    </div>
    </PostListProvider>
  )
}

export default App
