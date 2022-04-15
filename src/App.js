import './css/App.css';
import Header from "./components/Header";
import Home from './components/Home';
import Layout from './components/Layout';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Layout />} />
        
      </Routes>
    </div>
  );
}

export default App;
