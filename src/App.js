import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./components/providers/MoviesPagesContext";

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <BrowserRouter>
          <div className="all-contents">
            <Header />
            <div className="main">
              <Pages />
            </div>
          </div>
          <SideBar />
        </BrowserRouter>
      </ApiProvider>
    </div>
  );
}

export default App;
