import './App.css';
import Library from './component/Library/Library';
import { Routes, Route } from "react-router-dom";
import WishList from './component/WishList/WishList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/wishList" element={<WishList/>} />
      </Routes>
    </div>
  );
}

export default App;
