import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {MAIN_ROUTE} from "./utils/consts";
import {IMG_ROUTE} from "./utils/consts";
import MainPage from "./pages/MainPage/MainPage";
import ImgPage from "./pages/ImgPage/ImgPage";
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <div className="App">
        <NavBar />
        <BrowserRouter>
            <Routes>
                <Route path={MAIN_ROUTE} element={<MainPage />} />
                <Route path={IMG_ROUTE} element={<ImgPage />} />
                <Route path="*" element={<Navigate to ="/" />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
