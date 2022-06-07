import './App.css';
import { Routes, Route } from "react-router-dom";
import WishList from './pages/WishList/WishList';
import Categories from './component/Categories/Categories';
import Library from './pages/Library/Library'
import AddBook from './pages/AddBook/AddBook';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/addbook" element={<AddBook/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/wishList" element={<WishList/>} />
      </Routes>
    </div>
  );
}

export default App;
