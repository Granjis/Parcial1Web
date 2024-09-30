import './App.css';
import MainMenu from './MainMenu';
import Login from './Login';
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mainMenu" element={<MainMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
