
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import LaptopList from './components/products/LaptopList';
import MobileList from './components/products/MobileList';
import Errorpage from './components/Errorpage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import User from './components/User';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import Post from './components/Post';
import PostLayout from './components/PostLayout';





function App() {
  return (
  <>
  
  <BrowserRouter>

  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About US</Link></li>
    <li><Link to="/shop">Shop</Link></li>
    
    <li><Link to="/pro/laptoplist">Laptop List</Link></li>
    <li><Link to="/pro/mobilelist">Mobile List</Link></li>
    <li><Link to="/user">User</Link></li>
  
    <li><Link to="/contact">Contact Us</Link></li>
    <li><Link to="/postpage">postpage</Link></li>
    <li><Link to="/login">Login</Link></li>

  </ul>
  
  <Routes>
     <Route path="/" element={<Home />}  />
     <Route path="/about" element={<About />}  />
     <Route path="/shop" element={<Shop />}  />
     <Route path="/contact" element={<Contact />}  />
     <Route path="*" element={<Errorpage />}  />
   
     <Route path='/pro'>

        <Route path="laptoplist" element={<LaptopList />}  />
        <Route path="mobilelist" element={<MobileList />}  />

     </Route>
  
  <Route path="/login" element={<Login />}  />
  <Route path="/dashboard" element={<Dashboard />}  />

  <Route path="/User" element={<User />}  />
  
  <Route path="/newpost" element={<NewPost />}  />

<Route path="/postpage"  element={<PostLayout />} >
  <Route index element={<PostPage />}  />
  <Route path=":id" element={<Post />}  />
  <Route path="newpost" element={<NewPost />}  />
</Route>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
