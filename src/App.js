import React  from 'react'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Pages from './pages/Pages';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className="all-contents">
        <Header/>
        <BrowserRouter>
            <div className="main">
              <Pages/>
            </div>
          </BrowserRouter>
      </div>
      <SideBar/>
    </div>
  );
}

export default App;
