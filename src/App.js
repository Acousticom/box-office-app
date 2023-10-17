import "./App.css";
import Starred from "./Pages/Starred";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Route>
        <Route path="/show/:showId" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
