import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RadioProvider } from "./context/RadioContext";

import Header from "./components/Header";
import Body from "./components/Body";
import OnAirCrew from "./components/On-Air-crew";
import RadioPlayer from "./components/RadioPlayer";
import Footer from "./components/Footer";
import NaamGroup from "./Pages/NaaM Groups";

function App() {
  return (
    <RadioProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/naam-group" element={<NaamGroup />} />

              <Route
                path="/"
                element={
                  <>
                    <Body />
                    <RadioPlayer /> 
                    <OnAirCrew />
                    
                  </>
                }
              />
              <Route path="/about-us" element={<div className="p-8 text-white">About Us Page</div>} />
              <Route path="/naam-group" element={<div className="p-8 text-white">Naam Groups Page</div>} />
              <Route path="/fm-rk" element={<div className="p-8 text-white">FM RK Page</div>} />
              <Route path="/contact" element={<div className="p-8 text-white">Contact Us Page</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </RadioProvider>
  );
}

export default App;
