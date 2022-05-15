import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlaceList from "./pages/PlaceList";
import PlaceDetail from "./pages/PlaceDetail";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<PlaceList />} />
                <Route exact path="/placeDetail" element={<PlaceDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
