import './App.css';
import { Routes, Route } from "react-router-dom";
import WishList from './pages/WishList/WishList';
import Categories from './component/Categories/Categories';
import Library from './pages/Library/Library'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/wishList" element={<WishList/>} />
      </Routes>
    </div>
  );
}

export default App;
