import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import TvShows from "./components/TvShows";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/ProfilePage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <MyNavBar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="row-film">
                <HomePage />
              </div>
            }
          />
          <Route
            path="/TvShows"
            element={
              <div className="row-film">
                <TvShows />
              </div>
            }
          />
          <Route path="/MoviesDetails/:moviedId" />
          <Route
            path="/ProfilePage"
            element={
              <div className="profile-container">
                <Profile />
              </div>
            }
          />
        </Routes>
        <div className="footer">
          <MyFooter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
