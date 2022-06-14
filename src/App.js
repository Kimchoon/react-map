import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Map from "./pages/map/Map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
