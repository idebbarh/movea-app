import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="all-contents">
          <Header />
          <div className="main">
            <Pages />
          </div>
        </div>
        <SideBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
