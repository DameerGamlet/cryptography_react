import './App.css';
import HeaderMain from "./header/HeaderMain";
import {Route, Routes} from "react-router-dom";
import MainPage from "./main/MainPage";
import TheoryPage from "./content/theories/TheoryPage";
import PracticePage from "./content/practice/PracticePage";
import SupportPage from "./main/SupportPage";
import CaesarPage from "./content/practice/caesar/CaesarPage";

function App() {
    return (
        <div>
            <HeaderMain/>
            <div className="bgcolor">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/theory" element={<TheoryPage/>}/>
                        <Route path="/practice" element={<PracticePage/>}/>
                        <Route path="/practice/caesar" element={<CaesarPage/>}/>
                        <Route path="/support" element={<SupportPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
