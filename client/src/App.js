import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home/Index'
import AddPage from './Pages/AddPage/Index'
import Navbar from './Components/Navbar/Index'
import Footer from './Components/Footer/Index'
import Details from './Pages/Details/Index'
import WishList from './Pages/WishList/Index'
import {useState} from 'react'


function App() {
  let [wishList, setWishList]= useState([])
  return (
    <BrowserRouter>
    <Navbar wishList = {wishList} setWishList={setWishList}/>
    <Routes>
    <Route path="/" element={<Home wishList={wishList} setWishList={setWishList} />} />
    <Route path='addpage' element={<AddPage/>}/>
    <Route path="/wishList" element={<WishList wishList={wishList} setWishList={setWishList} />} />
    <Route path="/details/:id" element={<Details />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
